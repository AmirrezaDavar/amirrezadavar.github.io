"""Validate built page links, assets, anchors, and accidental source exposure."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
import sys


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.refs = []
        self.ids = set()
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        for attr in ("href", "src", "poster"):
            if attrs.get(attr):
                self.refs.append(attrs[attr])


root = Path(sys.argv[1] if len(sys.argv) > 1 else "_site").resolve()
pages = {p: Page(p.read_text()) for p in root.rglob("*.html")}
errors = []
checked = 0
for source, page in pages.items():
    for ref in page.refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc:
            continue
        relative_source = "/" + source.relative_to(root).as_posix()
        path = unquote(urlsplit(urljoin(relative_source, ref)).path)
        target = root / path.lstrip("/")
        if target.is_dir():
            target /= "index.html"
        if not target.is_file():
            errors.append(f"{source.relative_to(root)}: missing {ref}")
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f"{source.relative_to(root)}: missing anchor {ref}")
        checked += 1

for forbidden in ("docs", "vendor", "node_modules", "Gemfile", "Gemfile.lock", "README.md", "CONTENT_SOURCES.md", "test", "scripts", ".git"):
    if (root / forbidden).exists():
        errors.append(f"Source-only path published: {forbidden}")

if Path("_bibliography/papers.bib").read_bytes() != (root / "assets/bibliography/papers.bib").read_bytes():
    errors.append("Downloadable bibliography is out of sync")

if errors:
    print("\n".join(errors))
    sys.exit(1)
print(f"Checked {len(pages)} HTML pages and {checked} local links/assets: passed.")
