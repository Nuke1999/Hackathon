import os
import google.generativeai as genai
from pathlib import Path
import time
import json

# Configure Gemini API
# You'll need to set your API key as an environment variable: GOOGLE_API_KEY
genai.configure(api_key="AIzaSyBSPC4rhemh1dn5mvFm-QpkGgokgbj1pJk")

# Initialize the model
model = genai.GenerativeModel('gemini-2.0-flash')

def load_progress(progress_file):
    if os.path.exists(progress_file):
        with open(progress_file, 'r') as f:
            return set(json.load(f))
    return set()

def save_progress(progress_file, processed_files):
    with open(progress_file, 'w') as f:
        json.dump(list(processed_files), f)

def process_html_file(html_file_path, output_dir):
    # Read the HTML content
    with open(html_file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Create the prompt
    prompt = f"""
    Create a detailed product requirements document from this web page. Expand on it the specs with details (including exact text) so that another AI implementor can recreate the site. Think about the content you choose to include our implementor can only take so many words. DO NOT INCLUDE ANY DESIGN ELEMENTS JUST CONTENT. DO NOT INCLUDE REPETITIVE DETAILS LIKE LANGUAGE SELECTION, SEARCH BAR, NAVIGATION MENU, AND FOOTER. FOCUS ON THE MAIN CONTENT AREA AND MAKE SURE YOU KEEP IMPORTANT CONTENT. REMEMBER TO KEEP CONNECTIONS BETWEEN SITES (i.e. if a website links to another website make sure that is recorded)
    HTML Content:
    {html_content}
    """
    
    try:
        # Generate response from Gemini
        response = model.generate_content(prompt)
        
        # Create output filename (replace .html with .txt)
        output_filename = Path(html_file_path).stem + '.txt'
        output_path = os.path.join(output_dir, output_filename)
        
        # Save the response
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(response.text)
        
        print(f"Processed {html_file_path} -> {output_path}")
        return True
        
    except Exception as e:
        print(f"Error processing {html_file_path}: {str(e)}")
        return False
    finally:
        time.sleep(1)

def main():
    # Input and output directories
    input_dir = "scraped_pages"
    output_dir = "gemini_analysis"
    progress_file = "processing_progress.json"
    
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Load progress
    processed_files = load_progress(progress_file)
    print(f"Found {len(processed_files)} previously processed files")
    
    # Get all HTML files
    html_files = [f for f in os.listdir(input_dir) if f.endswith('.html')]
    total_files = len(html_files)
    
    # Process remaining files
    for i, filename in enumerate(html_files, 1):
        if filename in processed_files:
            print(f"Skipping {filename} (already processed)")
            continue
            
        html_file_path = os.path.join(input_dir, filename)
        print(f"\nProcessing file {i}/{total_files}: {filename}")
        
        if process_html_file(html_file_path, output_dir):
            processed_files.add(filename)
            save_progress(progress_file, processed_files)
            print(f"Progress saved: {len(processed_files)}/{total_files} files processed")
        else:
            print(f"Failed to process {filename}, will retry next time")

if __name__ == "__main__":
    main() 