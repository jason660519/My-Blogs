#!/usr/bin/env python3
"""
簡單的HTTP伺服器，支援SEO友好的URL重寫
"""

import http.server
import socketserver
import urllib.parse
import re
import os
from pathlib import Path

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """自定義HTTP請求處理器，支援URL重寫"""
    
    def do_GET(self):
        """處理GET請求，包含URL重寫邏輯"""
        # 解析URL路徑
        parsed_path = urllib.parse.urlparse(self.path)
        path = parsed_path.path
        
        # 新格式URL匹配: /[category]/[title-slug]-[id]-[language]
        article_pattern = r'^/([^/]+)/(.+)-(\d+)-([a-z]{2,3})/?$'
        match = re.match(article_pattern, path)
        
        if match:
            category, title_slug, article_id, language = match.groups()
            # 重寫為舊格式URL
            new_path = f'/article.html?id={article_id}&lang={language}'
            self.path = new_path
            print(f"URL重寫: {path} -> {new_path}")
        
        # 處理根目錄
        elif path == '/':
            self.path = '/index.html'
        
        # 調用父類方法處理請求
        super().do_GET()
    
    def end_headers(self):
        """添加CORS標頭"""
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def run_server(port=8000):
    """啟動HTTP伺服器"""
    handler = CustomHTTPRequestHandler
    
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"伺服器運行在 http://localhost:{port}")
        print("支援SEO友好的URL格式:")
        print("  - /[category]/[title-slug]-[id]-[language]")
        print("  - 例如: /investment/fortune-god-is-right-beside-you-1-zh")
        print("\n按 Ctrl+C 停止伺服器")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n伺服器已停止")

if __name__ == "__main__":
    # 切換到腳本所在目錄
    os.chdir(Path(__file__).parent)
    run_server()