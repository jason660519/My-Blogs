/**
 * URL 重定向處理器
 * 處理舊格式 URL 到新格式 URL 的重定向
 */

/**
 * 檢查並處理 URL 重定向
 */
function handleUrlRedirect() {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    
    // 檢查是否為舊格式的文章 URL
    const legacyMatch = currentPath.match(/^\/([^\/]+)\/(.+)-(\d+)-([a-z]{2,3})$/);
    if (legacyMatch) {
        const [, category, titleSlug, articleId, language] = legacyMatch;
        
        // 生成新格式的 URL
        const newUrl = `/articles/${language}/${category}/${titleSlug}/${articleId}${currentSearch}`;
        
        // 執行 301 重定向
        console.log(`重定向舊 URL: ${currentPath} -> ${newUrl}`);
        window.history.replaceState(null, '', newUrl);
        
        return true; // 表示已處理重定向
    }
    
    // 檢查是否為舊格式的首頁語言 URL
    const homeLanguageMatch = currentPath.match(/^\/(tw|en|cn|jp)\/?$/);
    if (homeLanguageMatch) {
        const [, language] = homeLanguageMatch;
        
        // 重定向到新格式的首頁
        const urlParams = new URLSearchParams(currentSearch);
        urlParams.set('lang', language);
        const newUrl = `/?${urlParams.toString()}`;
        
        console.log(`重定向舊首頁 URL: ${currentPath} -> ${newUrl}`);
        window.history.replaceState(null, '', newUrl);
        
        return true; // 表示已處理重定向
    }
    
    return false; // 沒有處理重定向
}

/**
 * 生成向後兼容的連結
 * @param {Object} article - 文章對象
 * @param {string} language - 語言代碼
 * @param {boolean} useNewFormat - 是否使用新格式
 * @returns {string} - 文章 URL
 */
function generateCompatibleUrl(article, language = 'tw', useNewFormat = true) {
    // 使用已存在的函數，避免重複定義
    if (typeof generateArticleUrl !== 'undefined') {
        return generateArticleUrl(article, language);
    } else if (typeof generateLegacyArticleUrl !== 'undefined') {
        return generateLegacyArticleUrl(article, language);
    }
    
    // 回退方案
    const category = article.categories ? article.categories[0] : article.category;
    const titleSlug = article.slug || article.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');
    
    return useNewFormat ? 
        `/articles/${language}/${category}/${titleSlug}/${article.id}` :
        `/${category}/${titleSlug}-${article.id}-${language}`;
}

/**
 * 初始化 URL 重定向處理
 */
function initUrlRedirect() {
    // 在頁面載入時檢查是否需要重定向
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleUrlRedirect);
    } else {
        handleUrlRedirect();
    }
    
    // 監聽 popstate 事件（瀏覽器前進/後退）
    window.addEventListener('popstate', handleUrlRedirect);
}

// 自動初始化
initUrlRedirect();