/**
 * 文章管理系統 - 基於 Markdown 檔案的動態文章載入
 * 支援多語言、分類管理和元數據處理
 */

class ArticleManager {
    constructor() {
        this.articlesConfig = null;
        this.articles = [];
        this.categories = {};
        this.settings = {};
        this.markdownParser = null;
        this.initialized = false;
    }

    /**
     * 初始化文章管理系統
     * @returns {Promise<boolean>} 初始化是否成功
     */
    async initialize() {
        try {
            await this.loadArticlesConfig();
            await this.initializeMarkdownParser();
            this.initialized = true;
            console.log('文章管理系統初始化成功');
            return true;
        } catch (error) {
            console.error('文章管理系統初始化失敗:', error);
            return false;
        }
    }

    /**
     * 載入文章配置檔案
     * @returns {Promise<void>}
     */
    async loadArticlesConfig() {
        try {
            const response = await fetch('/articles/articles-config.json');
            if (!response.ok) {
                throw new Error(`無法載入文章配置: ${response.status}`);
            }
            
            this.articlesConfig = await response.json();
            this.articles = this.articlesConfig.articles || [];
            this.categories = this.articlesConfig.categories || {};
            this.settings = this.articlesConfig.settings || {};
            
            console.log(`成功載入 ${this.articles.length} 篇文章配置`);
        } catch (error) {
            console.error('載入文章配置失敗:', error);
            // 如果載入失敗，使用預設配置
            await this.loadFallbackConfig();
        }
    }

    /**
     * 載入備用配置（向後相容性）
     * @returns {Promise<void>}
     */
    async loadFallbackConfig() {
        console.log('使用備用配置（硬編碼文章數據）');
        
        // 檢查是否存在舊的文章數據
        if (window.articles && Array.isArray(window.articles)) {
            this.articles = window.articles;
        } else {
            this.articles = [];
        }
        
        // 預設分類
        this.categories = {
            investment: { tw: "投資理財", en: "Investment", cn: "投资理财", jp: "投資" },
            technology: { tw: "科技趨勢", en: "Technology", cn: "科技趋势", jp: "テクノロジー" },
            lifestyle: { tw: "生活風格", en: "Lifestyle", cn: "生活方式", jp: "ライフスタイル" },
            tutorial: { tw: "教學指南", en: "Tutorial", cn: "教程指南", jp: "チュートリアル" }
        };
        
        // 預設設定
        this.settings = {
            defaultLanguage: 'tw',
            supportedLanguages: ['tw', 'en', 'cn', 'jp'],
            articlesPerPage: 6,
            enableComments: true,
            enableSharing: true
        };
    }

    /**
     * 初始化 Markdown 解析器
     * @returns {Promise<void>}
     */
    async initializeMarkdownParser() {
        // 簡單的 Markdown 解析器實現
        this.markdownParser = {
            parse: (markdown) => {
                // 解析 Front Matter
                const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
                const match = markdown.match(frontMatterRegex);
                
                let metadata = {};
                let content = markdown;
                
                if (match) {
                    // 解析 YAML Front Matter
                    const yamlContent = match[1];
                    const markdownContent = match[2];
                    
                    metadata = this.parseYAML(yamlContent);
                    content = this.parseMarkdownContent(markdownContent);
                } else {
                    content = this.parseMarkdownContent(markdown);
                }
                
                return { metadata, content };
            }
        };
    }

    /**
     * 簡單的 YAML 解析器
     * @param {string} yaml YAML 內容
     * @returns {object} 解析後的物件
     */
    parseYAML(yaml) {
        const result = {};
        const lines = yaml.split('\n');
        
        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) continue;
            
            const colonIndex = trimmed.indexOf(':');
            if (colonIndex === -1) continue;
            
            const key = trimmed.substring(0, colonIndex).trim();
            let value = trimmed.substring(colonIndex + 1).trim();
            
            // 移除引號
            if ((value.startsWith('"') && value.endsWith('"')) || 
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            
            // 處理陣列
            if (value.startsWith('[') && value.endsWith(']')) {
                value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
            }
            
            // 處理布林值
            if (value === 'true') value = true;
            if (value === 'false') value = false;
            
            result[key] = value;
        }
        
        return result;
    }

    /**
     * 簡單的 Markdown 內容解析器
     * @param {string} markdown Markdown 內容
     * @returns {string} HTML 內容
     */
    parseMarkdownContent(markdown) {
        return markdown
            // 標題
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            // 粗體
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            // 斜體
            .replace(/\*(.*)\*/gim, '<em>$1</em>')
            // 連結
            .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" target="_blank">$1</a>')
            // 段落
            .replace(/\n\n/gim, '</p><p>')
            .replace(/^(.*)$/gim, '<p>$1</p>')
            // 清理空段落
            .replace(/<p><\/p>/gim, '');
    }

    /**
     * 載入 Markdown 文章內容
     * @param {string} filePath 檔案路徑
     * @returns {Promise<object>} 解析後的文章內容
     */
    async loadMarkdownArticle(filePath) {
        try {
            const response = await fetch(`/articles/${filePath}`);
            if (!response.ok) {
                throw new Error(`無法載入文章檔案: ${response.status}`);
            }
            
            const markdown = await response.text();
            return this.markdownParser.parse(markdown);
        } catch (error) {
            console.error(`載入 Markdown 文章失敗 (${filePath}):`, error);
            return null;
        }
    }

    /**
     * 根據語言和分類獲取文章列表
     * @param {string} language 語言代碼
     * @param {string} category 分類（可選）
     * @param {number} page 頁碼（可選）
     * @returns {Promise<Array>} 文章列表
     */
    async getArticles(language = 'tw', category = null, page = 1) {
        if (!this.initialized) {
            await this.initialize();
        }
        
        let filteredArticles = this.articles.filter(article => {
            // 檢查文章是否有指定語言版本
            if (!article.multilingual || !article.multilingual[language]) {
                return false;
            }
            
            // 檢查分類篩選
            if (category && article.category !== category) {
                return false;
            }
            
            // 檢查文章狀態
            if (article.status && article.status !== 'published') {
                return false;
            }
            
            return true;
        });
        
        // 按日期排序（最新的在前）
        filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // 分頁處理
        const articlesPerPage = this.settings.articlesPerPage || 6;
        const startIndex = (page - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        
        return filteredArticles.slice(startIndex, endIndex);
    }

    /**
     * 根據 ID 獲取單篇文章
     * @param {number} articleId 文章 ID
     * @param {string} language 語言代碼
     * @returns {Promise<object>} 文章物件
     */
    async getArticleById(articleId, language = 'tw') {
        if (!this.initialized) {
            await this.initialize();
        }
        
        const article = this.articles.find(a => a.id === parseInt(articleId));
        if (!article || !article.multilingual || !article.multilingual[language]) {
            return null;
        }
        
        const articleData = {
            ...article,
            ...article.multilingual[language]
        };
        
        // 如果有 Markdown 檔案，載入內容
        if (article.multilingual[language].file) {
            const markdownData = await this.loadMarkdownArticle(article.multilingual[language].file);
            if (markdownData) {
                articleData.content = markdownData.content;
                // 合併元數據
                Object.assign(articleData, markdownData.metadata);
            }
        }
        
        return articleData;
    }

    /**
     * 獲取分類列表
     * @param {string} language 語言代碼
     * @returns {object} 分類物件
     */
    getCategories(language = 'tw') {
        const result = {};
        for (const [key, value] of Object.entries(this.categories)) {
            result[key] = value[language] || value.tw || key;
        }
        return result;
    }

    /**
     * 搜尋文章
     * @param {string} query 搜尋關鍵字
     * @param {string} language 語言代碼
     * @returns {Promise<Array>} 搜尋結果
     */
    async searchArticles(query, language = 'tw') {
        if (!this.initialized) {
            await this.initialize();
        }
        
        const searchTerm = query.toLowerCase();
        
        return this.articles.filter(article => {
            const langData = article.multilingual[language];
            if (!langData) return false;
            
            // 搜尋標題、摘要和標籤
            const searchableText = [
                langData.title,
                langData.excerpt,
                ...(langData.tags || [])
            ].join(' ').toLowerCase();
            
            return searchableText.includes(searchTerm);
        });
    }

    /**
     * 獲取推薦文章
     * @param {number} currentArticleId 當前文章 ID
     * @param {string} language 語言代碼
     * @param {number} limit 推薦數量
     * @returns {Promise<Array>} 推薦文章列表
     */
    async getRecommendedArticles(currentArticleId, language = 'tw', limit = 3) {
        if (!this.initialized) {
            await this.initialize();
        }
        
        const currentArticle = this.articles.find(a => a.id === currentArticleId);
        if (!currentArticle) return [];
        
        // 優先推薦同分類的文章
        let recommended = this.articles.filter(article => {
            return article.id !== currentArticleId && 
                   article.category === currentArticle.category &&
                   article.multilingual[language] &&
                   (!article.status || article.status === 'published');
        });
        
        // 如果同分類文章不足，添加其他文章
        if (recommended.length < limit) {
            const others = this.articles.filter(article => {
                return article.id !== currentArticleId && 
                       article.category !== currentArticle.category &&
                       article.multilingual[language] &&
                       (!article.status || article.status === 'published');
            });
            recommended = recommended.concat(others);
        }
        
        // 按日期排序並限制數量
        return recommended
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, limit);
    }
}

// 將 ArticleManager 類別暴露到全域範圍
window.ArticleManager = ArticleManager;

// 建立全域實例
window.articleManager = new ArticleManager();

// 向後相容性：保持原有的 articles 變數
if (!window.articles) {
    window.articles = [];
}