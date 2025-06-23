#!/usr/bin/env python3
import os
import frontmatter
from pathlib import Path

def generate_sitemap():
    base_url = "https://plotly.com"
    urls = []
    
    # Find all HTML and MD files in _posts/python
    for file_path in Path("_posts/python").rglob("*.html"):
        try:
            post = frontmatter.load(file_path)
            if 'permalink' in post:
                urls.append(f"{base_url}/{post['permalink']}")
        except:
            pass
    
    for file_path in Path("_posts/python").rglob("*.md"):
        try:
            post = frontmatter.load(file_path)
            if 'permalink' in post:
                urls.append(f"{base_url}/{post['permalink']}")
        except:
            pass
    
    # Generate sitemap
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    xml += ''.join(f'  <url>\n    <loc>{url}</loc>\n  </url>\n' for url in sorted(set(urls)))
    xml += '</urlset>'
    
    os.makedirs('python', exist_ok=True)
    with open('python/sitemap.xml', 'w') as f:
        f.write(xml)
    
    print(f"Generated sitemap with {len(urls)} URLs")

if __name__ == '__main__':
    generate_sitemap() 

