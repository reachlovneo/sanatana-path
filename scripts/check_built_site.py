"""Check the generated site as a connected product, without a browser dependency."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
import re
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids = []
        self.links = []
        self.assets = []
        self.layers = set()
        self.mains = 0
        self.noindex = False
        self.description = False
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.append(attrs["id"])
        if attrs.get("data-layer"):
            self.layers.add(attrs["data-layer"])
        if tag == "main":
            self.mains += 1
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])
        if tag in ("img", "script") and attrs.get("src"):
            self.assets.append(attrs["src"])
        if tag == "link" and attrs.get("rel") in ("stylesheet", "preload"):
            self.assets.append(attrs.get("href", ""))
        if tag == "meta":
            self.noindex |= attrs.get("name") == "robots" and "noindex" in attrs.get("content", "")
            self.description |= attrs.get("name") == "description" and bool(attrs.get("content"))


def main():
    pages = {}
    errors = []
    for file in DIST.rglob("index.html"):
        relative = file.parent.relative_to(DIST).as_posix()
        route = "/" if relative == "." else "/" + relative
        text = file.read_text(encoding="utf-8")
        pages[route] = Page(text)
        if "\ufffd" in text:
            errors.append(f"{route}: invalid replacement character")
        if not re.search(r"<title>[^<]+</title>", text):
            errors.append(f"{route}: missing title")
    if not pages:
        errors.append("No built pages. Run npm run build first.")

    for route, page in pages.items():
        if page.mains != 1:
            errors.append(f"{route}: expected one main landmark, got {page.mains}")
        if not page.description:
            errors.append(f"{route}: missing description")
        for identifier, count in Counter(page.ids).items():
            if count > 1:
                errors.append(f"{route}: duplicate id {identifier}")
        for href in page.links:
            parsed = urlsplit(href)
            if parsed.scheme or parsed.netloc:
                continue
            target = urlsplit(urljoin(route + "/", href)).path.rstrip("/") or "/"
            if not parsed.path:
                target = route
            if target not in pages:
                errors.append(f"{route}: missing route {href}")
                continue
            fragment = unquote(parsed.fragment)
            # The Atlas also has JS-driven layer selection encoded in the URL.
            if fragment and fragment not in pages[target].ids and fragment not in pages[target].layers:
                errors.append(f"{route}: missing anchor {href}")
        for asset in page.assets:
            if asset.startswith("/") and not (DIST / unquote(urlsplit(asset).path[1:])).is_file():
                errors.append(f"{route}: missing asset {asset}")

    indexed = set()
    for file in DIST.glob("sitemap-*.xml"):
        tree = ET.parse(file)
        if tree.getroot().tag.endswith("sitemapindex"):
            continue
        for element in tree.iter():
            if element.tag.endswith("}loc"):
                indexed.add(urlsplit(element.text).path.rstrip("/") or "/")
    for route, page in pages.items():
        if page.noindex and route in indexed:
            errors.append(f"{route}: noindex page appears in sitemap")
        if not page.noindex and route not in indexed:
            errors.append(f"{route}: indexable page missing from sitemap")
    if errors:
        print("\n".join(errors))
        return 1
    print(f"PASS: {len(pages)} routes; internal links, anchors, assets, metadata, landmarks, UTF-8, and sitemap policy.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
