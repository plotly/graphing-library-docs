import os
import glob
import re

def get_permalinks():
    html_files = glob.glob('_posts/python/**/*.html', recursive=True)
    md_files = glob.glob('_posts/python/**/*.md', recursive=True)
    files = html_files + md_files
    permalinks = []
    for f in files:
        if '/html/' in f or '/chart-studio/' in f:
            continue
        try:
            with open(f, encoding='utf-8') as file:
                m = re.search(r'permalink:\s*(.+?)(?:\n|$)', file.read())
                if m:
                    link = m.group(1).strip()
                    if not link.startswith('/'):
                        link = '/' + link
                    permalinks.append(link)
        except Exception:
            continue
    return permalinks

def main():
    base_url = 'https://plotly.com'
    permalinks = get_permalinks()
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    xml += ''.join(f'  <url>\n    <loc>{base_url}{p}</loc>\n  </url>\n' for p in permalinks)
    xml += '</urlset>'
    os.makedirs('python', exist_ok=True)
    with open('python/sitemap.xml', 'w') as f:
        f.write(xml)
    print(f"Generated Python sitemap with {len(permalinks)} URLs")

if __name__ == '__main__':
    main() 

