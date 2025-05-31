import os
import asyncio
import json
import google.generativeai as genai
from playwright.async_api import async_playwright

# Configure Gemini
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Gemini model
model = genai.GenerativeModel("gemini-pro")

# Prompt template
LAYOUT_PROMPT = """
You are an expert in webpage layout analysis.

Given the fully rendered HTML of a webpage, identify the structural components that define its layout, considering elements up to **three levels deep inside the <body>** tag.

Ignore deeply nested content-specific or decorative elements (e.g., paragraphs, spans, article text). Focus on containers and blocks that serve layout or organizational purposes.

For each relevant element, return the following fields:
- `section_name`: a descriptive label you generate (e.g., "Top bar", "Left sidebar", "Main content area")
- `tag`: HTML tag name (e.g., div, section)
- `id`: `id` attribute if present
- `class`: `class` attribute if present
- `depth`: nesting level (1 = direct child of `<body>`)
- `child_count`: number of direct children
- `position_order`: order from top to bottom in the page layout
- `role`: the **inferred role** of the component, one of:
  - `"navigation"`
  - `"header"`
  - `"main"`
  - `"sidebar"`
  - `"footer"`
  - `"banner"`
  - `"container"`
  - `"other"` (if none apply)

Return the result in the following JSON format:

{
  "layout": [
    {
      "section_name": "...",
      "tag": "...",
      "id": "...",
      "class": "...",
      "depth": ...,
      "child_count": ...,
      "position_order": ...,
      "role": "..."
    }
  ]
}

Here is the HTML content:

```html
{html}

"""