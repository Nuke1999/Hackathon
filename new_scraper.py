import asyncio
import json
from bs4 import BeautifulSoup
from playwright.async_api import async_playwright

def extract_layout_structure(soup):
    layout = {}

    # Heuristics to identify major layout sections
    header = soup.find('header')
    if header:
        layout['header'] = str(header)[:200]

    nav = soup.find('nav')
    if nav:
        layout['nav'] = str(nav)[:200]

    main = soup.find('main')
    if main:
        layout['main'] = str(main)[:200]
    else:
        # Fallback: find primary content div
        candidates = soup.find_all('div')
        for div in candidates:
            if 'content' in div.get('class', []) or 'main' in div.get('class', []):
                layout['main'] = str(div)[:200]
                break

    footer = soup.find('footer')
    if footer:
        layout['footer'] = str(footer)[:200]

    return layout

async def scrape_and_generate_spec(url, output_file='layout_spec.json'):
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto(url, wait_until='networkidle')

        content = await page.content()
        await browser.close()

        soup = BeautifulSoup(content, 'html.parser')
        layout_structure = extract_layout_structure(soup)

        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(layout_structure, f, indent=4)

# Example usage:
# asyncio.run(scrape_and_generate_spec("https://example.com"))
