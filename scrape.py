import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import re
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

base_url = "https://www.txdmv.gov"
start_url = base_url
output_dir = "scraped_pages"

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Setup Chrome options
chrome_options = Options()
chrome_options.add_argument('--headless')  # Run in headless mode
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
chrome_options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')

# Initialize the Chrome WebDriver
driver = webdriver.Chrome(options=chrome_options)

visited = set()

def sanitize_filename(title):
    title = re.sub(r'[^\w\s-]', '', title).strip()
    title = re.sub(r'[\s]+', '_', title)
    return title[:60] if title else "untitled_page"

try:
    # Get the initial page
    driver.get(start_url)
    # Wait for the page to load (adjust timeout as needed)
    time.sleep(5)  # Basic wait for dynamic content
    
    # Get all links from the page
    links = driver.find_elements("tag name", "a")
    hrefs = [link.get_attribute('href') for link in links if link.get_attribute('href')]

    for href in hrefs:
        if not href or href.startswith("#"):
            continue

        full_url = urljoin(base_url, href)
        if full_url in visited:
            continue
        visited.add(full_url)

        try:
            # Navigate to the page
            driver.get(full_url)
            # Wait for the page to load
            time.sleep(5)  # Basic wait for dynamic content
            
            # Get the page title
            title = driver.title.strip() if driver.title else "Untitled Page"
            filename = sanitize_filename(title) + ".html"
            filepath = os.path.join(output_dir, filename)

            # Get the fully rendered HTML
            page_source = driver.page_source
            
            # Clean up the HTML using BeautifulSoup
            soup = BeautifulSoup(page_source, 'html.parser')
            
            # Remove script tags
            for script in soup.find_all('script'):
                script.decompose()
            
            # Remove style tags
            for style in soup.find_all('style'):
                style.decompose()
            
            # Remove comments
            for comment in soup.find_all(text=lambda text: isinstance(text, str) and text.strip().startswith('<!--')):
                comment.extract()

            with open(filepath, "w", encoding="utf-8") as f:
                f.write(str(soup))

            print(f"Saved DOM: {filepath}")

        except Exception as e:
            print(f"Failed: {full_url} | {str(e)}")

finally:
    # Clean up
    driver.quit()
