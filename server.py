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
        
        # 支援的語言列表
        supported_languages = ['tw', 'en', 'cn', 'jp']
        
        # 處理多語言首頁路由: /home/[language]
        home_pattern = r'^/home/([a-z]{2,3})/?$'
        home_match = re.match(home_pattern, path)
        
        if home_match:
            language = home_match.group(1)
            if language in supported_languages:
                # 重寫為首頁並添加語言參數
                new_path = f'/index.html?lang={language}'
                self.path = new_path
                print(f"多語言首頁重寫: {path} -> {new_path}")
            else:
                # 不支援的語言，重定向到預設語言
                new_path = '/index.html?lang=tw'
                self.path = new_path
                print(f"不支援語言，重定向到預設: {path} -> {new_path}")
        
        # 新格式文章URL匹配: /articles/[language]/[category]/[title]/[id]
        elif path.startswith('/articles/'):
            new_article_pattern = r'^/articles/([a-z]{2,3})/([^/]+)/([^/]+)/(\d+)/?$'
            new_match = re.match(new_article_pattern, path)
            
            if new_match:
                language, category, title_slug, article_id = new_match.groups()
                if language in supported_languages:
                    # 重寫為文章頁面
                    new_path = f'/article.html?id={article_id}&lang={language}'
                    self.path = new_path
                    print(f"新格式文章URL重寫: {path} -> {new_path}")
        
        # 舊格式文章URL匹配: /[category]/[title-slug]-[id]-[language] (向下相容)
        elif path.startswith('/') and path.count('/') >= 2:
            legacy_article_pattern = r'^/([^/]+)/(.+)-(\d+)-([a-z]{2,3})/?$'
            legacy_match = re.match(legacy_article_pattern, path)
            
            if legacy_match:
                category, title_slug, article_id, language = legacy_match.groups()
                if language in supported_languages:
                    # 重寫為文章頁面
                    new_path = f'/article.html?id={article_id}&lang={language}'
                    self.path = new_path
                    print(f"舊格式文章URL重寫: {path} -> {new_path}")
        
        # 處理根目錄請求 - 直接提供首頁內容
        elif path == '/' or path == '/index.html':
            # 直接提供 index.html 內容，不進行重定向
            try:
                with open('index.html', 'rb') as f:
                    content = f.read()
                self.send_response(200)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.send_header('Content-Length', str(len(content)))
                self.end_headers()
                self.wfile.write(content)
                return
            except FileNotFoundError:
                self.send_error(404, "首頁檔案未找到")
                return
        
        # 處理查詢參數格式的文章頁面: /article.html?id=...&lang=...
        elif path == '/article.html' and parsed_path.query:
            # 解析查詢參數
            query_params = urllib.parse.parse_qs(parsed_path.query)
            article_id = query_params.get('id', [None])[0]
            language = query_params.get('lang', ['tw'])[0]
            
            if article_id and language in supported_languages:
                # 保持原始路徑，讓瀏覽器正常載入 article.html
                print(f"文章頁面訪問: {self.path} (ID: {article_id}, 語言: {language})")
            else:
                print(f"無效的文章參數: {self.path}")
        
        # 調用父類方法處理請求
        super().do_GET()
    
    def _detect_language(self, accept_language):
        """根據Accept-Language標頭偵測使用者語言偏好"""
        # 支援的語言對應表
        language_map = {
            'zh-tw': 'tw',
            'zh-hk': 'tw', 
            'zh-mo': 'tw',
            'zh-cn': 'cn',
            'zh-sg': 'cn',
            'zh': 'tw',  # 預設繁體中文
            'en': 'en',
            'en-us': 'en',
            'en-gb': 'en',
            'ja': 'jp',
            'ja-jp': 'jp'
        }
        
        if not accept_language:
            return 'tw'  # 預設語言
        
        # 解析Accept-Language標頭
        languages = []
        for lang_range in accept_language.split(','):
            lang_range = lang_range.strip()
            if ';' in lang_range:
                lang, quality = lang_range.split(';', 1)
                try:
                    q = float(quality.split('=')[1])
                except:
                    q = 1.0
            else:
                lang, q = lang_range, 1.0
            languages.append((lang.lower().strip(), q))
        
        # 按品質排序
        languages.sort(key=lambda x: x[1], reverse=True)
        
        # 尋找最佳匹配
        for lang, _ in languages:
            if lang in language_map:
                return language_map[lang]
            # 嘗試匹配語言前綴
            lang_prefix = lang.split('-')[0]
            if lang_prefix in language_map:
                return language_map[lang_prefix]
        
        return 'tw'  # 預設語言
    
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
        print("支援的URL格式:")
        print("  多語言首頁:")
        print("    - http://localhost:{}/home/tw (正體中文)".format(port))
        print("    - http://localhost:{}/home/en (英文)".format(port))
        print("    - http://localhost:{}/home/cn (簡體中文)".format(port))
        print("    - http://localhost:{}/home/jp (日文)".format(port))
        print("  文章頁面:")
        print("    新格式 (推薦):")
        print("      - /articles/[language]/[category]/[title]/[id]")
        print("      - 例如: /articles/tw/investment/fortune-god-beside-you/1")
        print("    舊格式 (向下相容):")
        print("      - /[category]/[title-slug]-[id]-[language]")
        print("      - 例如: /investment/fortune-god-beside-you-1-tw")
        print("  根目錄 (/) 會自動偵測瀏覽器語言")
        print("\n按 Ctrl+C 停止伺服器")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n伺服器已停止")

if __name__ == "__main__":
    # 切換到腳本所在目錄
    os.chdir(Path(__file__).parent)
    run_server()