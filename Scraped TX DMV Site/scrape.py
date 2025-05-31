import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import re
import os

base_url = "https://www.txdmv.gov"
start_url = base_url
headers = {"User-Agent": "Mozilla/5.0"}

visited = set()

def sanitize_filename(title):
    title = re.sub(r'[^\w\s-]', '', title).strip()
    title = re.sub(r'[\s]+', '_', title)
    return title[:60] if title else "untitled_page"

# Extract links from homepage
response = requests.get(start_url, headers=headers)
soup = BeautifulSoup(response.content, "html.parser")
links = soup.find_all("a", href=True)

for a in links:
    href = a['href'].strip()
    if not href or href.startswith("#"):
        continue

    full_url = urljoin(base_url, href)
    if full_url in visited:
        continue
    visited.add(full_url)

    try:
        page = requests.get(full_url, headers=headers, timeout=10)

        # Use title or fallback for filename
        page_soup = BeautifulSoup(page.content, "html.parser")
        title = page_soup.title.string.strip() if page_soup.title else "Untitled Page"
        filename = sanitize_filename(title) + ".html"

        with open(filename, "w", encoding="utf-8") as f:
            f.write(page.text)

        print(f"Saved DOM: {filename}")

    except Exception as e:
        print(f"Failed: {full_url} | {str(e)}")
