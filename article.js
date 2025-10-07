/**
 * Jason Blog 文章頁面 JavaScript
 * 實現獨立文章頁面、雙語切換和對照功能
 */

// 確保 articleCurrentLanguage 變數存在
if (typeof articleCurrentLanguage === 'undefined') {
   // 全域變數
 var articleCurrentLanguage = 'tw'; // 預設值
}

// 內建文章資料
const defaultArticles = [
    {
        id: 1,
        title: "財神爺就在你身邊",
        category: "investment",
        date: "2024-01-15",
        excerpt: "未來兩年，AMD 的股價會飆升且流動性會枯竭，同樣的採購需求，到了外星人的腦袋。卻是如此的簡單粗暴...",
        content: `
            <h1>財神爺就在你身邊</h1>
            
            <p><strong>先下結論與心得:</strong> 未來兩年，AMD 的股價會飆升且流動性會枯竭，同樣的採購需求，到了外星人的腦袋。卻是如此的簡單粗暴，祂們在地球上又將憑空創造出了1000億與6000億美金，對雙方與全球投資人言，這也只是早晚，且是腳拉拉的簡單事而已。</p>
            
            <h2>前情提要</h2>
            <p>2025/10/07 OpenAI 與 AMD 達成戰略合作，導致 AMD 股價飆升 25%。合作細節： OpenAI 將通過「績效認股權證」獲得最多 1.6 億股 AMD 股票，每股價格僅 0.01 美元（遠低於市價約 165 美元），這相當於獲得 AMD 近 10% 的股權。</p>
            
            <p>目前 (2025/10/07 )AMD的總股數是 16.2億 股，股價是210，總市值是3402億美金。如果到時候AMD的總股數仍是16.2億股不變，股價達600美金，總市值就會達到9720億美元，蘇媽與<strong>Sam Altman</strong>雙方打的算盤是?</p>
            
            <h3>AMD（蘇媽）的算盤：用「未來所有權」換取「當下市值暴漲」</h3>
            <p>您的理解非常精準。</p>
            <ul>
                <li>她的付出：將公司10%的所有權（1.62億股） 近乎免費地送給OpenAI。</li>
                <li>她的目標回報：換取OpenAI的長期大規模訂單承諾，這個承諾成為一個「超級催化劑」，點燃市場信心，將公司市值從3400億推高至9700億美元。</li>
            </ul>
            
            <h4>背後的深層邏輯：</h4>
            <ol>
                <li><strong>槓桿效應極高：</strong>她送出了10% 的股權，但換來了公司其餘90% 股權價值增長近3倍。這是一筆對現有股東（包括她自己）極為划算的交易。</li>
                <li><strong>確立AI市場地位：</strong>這不僅是財務操作，更是戰略決策。鎖定OpenAI這個標竿客戶，等於向全世界宣布：「AMD在AI晶片市場是Nvidia的頭號替代者」。這能吸引更多客戶、開發者和投資人，形成良性循環。</li>
                <li><strong>稀釋的代價 vs. 增長的收益：</strong>雖然現有股東的股權被稀釋了10%，但他們手中股票的總價值卻大幅增加了。這是一個典型的「把餅做大，即使分到的比例變小，但分到的實際大小卻翻了好幾倍」的策略。</li>
            </ol>
            
            <p><strong>結論：</strong>蘇媽的算盤是「捨小餅，做大餅」，用10%的股權作為誘餌，撬動一個接近兆美元的市值帝國，讓所有股東（包括她自己）的身價暴漲。</p>
            
            <h3>OpenAI的算盤：用「採購承諾」換取「幾乎無本的千億億美元橫財」</h3>
            <ul>
                <li>Open AI的付出：承諾在未來幾年向AMD採購數十億美元的晶片。(這些晶片本來就是OPEN AI要花錢買的。)</li>
                <li>OpenAI的財務收益：<strong>幾乎無本的</strong>取得 972億美元</li>
            </ul>
            
            <h2>我看到的不只是新聞，是「兌換券」</h2>
            
            <h3>只要13股AMD，2年內免費讓AMD+OPEN AI幫你買單！</h3>
            <p>10年頂級PC + 10年AI訂閱，總價超過$5400美元的未來，現在用$2730本金就能預訂。</p>
            
            <p>當所有人還在討論AMD與OpenAI的千億美元合作時，我已經算好了如何讓這場結盟，直接替我付費。</p>
            
            <h4>小學生都會算的數學：</h4>
            <ul>
                <li>我的目標：一台$3000的頂規AMD PC + 10年$2400的OpenAI訂閱。</li>
                <li>我的方法：在股價$210時，買入13股AMD。</li>
                <li>我的計畫：在股價達到$600時賣出。</li>
                <li>我的獲利：$5070淨利潤，直接覆蓋我的全部夢想清單。</li>
            </ul>
            
            <p><strong>為什麼是2年內？</strong><br>
            因為AI的發展速度是以月計算。OpenAI的巨額訂單、AMD Instinct GPU的持續放量，將在未來幾個季度點燃營收與股價。市場從不相信奇蹟，只相信實績，而AMD的實績正在路上。</p>
            
            <p>我管理風險的方法，不是害怕，而是紀律：</p>
            <ol>
                <li>這$2730 USD，是我「虧得起」的錢，不影響生活。</li>
                <li>我會分段賣出：$400賣一部分鎖定利潤，$600再賣一部分。絕不貪心。</li>
                <li>我給它2年時間，但也準備好持有更久，因為我看好的是AI的十年大趨勢。</li>
            </ol>
            
            <p>這不是賭博。這是一場基於商業邏輯的「個人財務小撇步」。巨頭們在佈局他們的帝國，而我們散戶、電腦宅男、宅女可以巧妙地在他們的航道上，為自己揚起一面帆。</p>
            
            <p>我剛剛上車預訂了我的AMD電腦與Open AI的10年訂閱。你呢？</p>
            
            <h4>資料來源:</h4>
            <p><a href="https://www.youtube.com/watch?v=xPdAcoGyZ98" target="_blank">YouTube影片1</a><br>
            <a href="https://www.youtube.com/watch?v=U0mYqcXd8Nc" target="_blank">YouTube影片2</a></p>
        `,
        tags: ["AMD", "OpenAI", "投資", "AI", "股票分析"]
    },
    {
        id: 2,
        title: "AI產業投資趨勢分析",
        category: "ai",
        date: "2024-01-10",
        excerpt: "深入分析人工智慧產業的投資機會與風險，探討未來發展趨勢...",
        content: `
            <h1>AI產業投資趨勢分析</h1>
            <p>人工智慧產業正在經歷前所未有的發展階段，投資機會與挑戰並存...</p>
            <h2>市場現況</h2>
            <p>目前AI市場規模已達到數千億美元，預計未來五年將持續高速成長...</p>
        `,
        tags: ["AI", "投資", "趨勢分析", "科技"]
    },
    {
        id: 3,
        title: "科技股投資策略",
        category: "tech",
        date: "2024-01-05",
        excerpt: "分析當前科技股市場環境，提供實用的投資策略建議...",
        content: `
            <h1>科技股投資策略</h1>
            <p>科技股一直是投資者關注的焦點，但如何在波動的市場中找到機會...</p>
            <h2>選股原則</h2>
            <p>選擇科技股時需要考慮多個因素，包括技術創新能力、市場地位等...</p>
        `,
        tags: ["科技股", "投資策略", "選股"]
    }
];

// 全域變數
let currentArticle = null;
let currentViewMode = 'single';

// 語言包
const articleTranslations = {
    tw: {
        // 界面文字
        'Investment Analysis × AI Insights': '投資分析 × AI洞察',
        'Home': '首頁',
        'Articles': '文章',
        'About': '關於',
        'Admin': '管理',
        'Loading article...': '載入文章中...',
        'Chinese': '中文',
        'English': 'English',
        'View Mode:': '檢視模式：',
        'Single': '單語',
        'Compare': '對照',
        'Chinese Version': '中文版本',
        'English Version': '英文版本',
        'Back to Articles': '返回文章列表',
        'Share Article': '分享文章',
        'Failed to Load Article': '文章載入失敗',
        'Article not found. Please check if the URL is correct.': '找不到指定的文章，請檢查網址是否正確。',
        'Back to Home': '返回首頁',
        // 分類名稱
        'investment': '投資分析',
        'tech': '科技股',
        'ai': 'AI產業',
        'news': '財經新聞'
    },
    en: {
        // 界面文字
        'Investment Analysis × AI Insights': 'Investment Analysis × AI Insights',
        'Home': 'Home',
        'Articles': 'Articles',
        'About': 'About',
        'Admin': 'Admin',
        'Loading article...': 'Loading article...',
        'Chinese': 'Chinese',
        'English': 'English',
        'View Mode:': 'View Mode:',
        'Single': 'Single',
        'Compare': 'Compare',
        'Chinese Version': 'Chinese Version',
        'English Version': 'English Version',
        'Back to Articles': 'Back to Articles',
        'Share Article': 'Share Article',
        'Failed to Load Article': 'Failed to Load Article',
        'Article not found. Please check if the URL is correct.': 'Article not found. Please check if the URL is correct.',
        'Back to Home': 'Back to Home',
        // 分類名稱
        'investment': 'Investment Analysis',
        'tech': 'Technology Stocks',
        'ai': 'AI Industry',
        'news': 'Financial News'
    }
};

// DOM 元素引用
const loadingState = document.getElementById('loadingState');
const articleContentElement = document.getElementById('articleContent');
const errorState = document.getElementById('errorState');
const articleTitle = document.getElementById('articleTitle');
const articleCategory = document.getElementById('articleCategory');
const articleDate = document.getElementById('articleDate');
const articleTags = document.getElementById('articleTags');
const contentZh = document.getElementById('contentZh');
const contentEn = document.getElementById('contentEn');
const bilingualContentZh = document.getElementById('bilingualContentZh');
const bilingualContentEn = document.getElementById('bilingualContentEn');
const singleLanguageContent = document.getElementById('singleLanguageContent');
const bilingualContent = document.getElementById('bilingualContent');
const prevArticleBtn = document.getElementById('prevArticleBtn');
const nextArticleBtn = document.getElementById('nextArticleBtn');
const prevArticleTitle = document.getElementById('prevArticleTitle');
const nextArticleTitle = document.getElementById('nextArticleTitle');

/**
 * 初始化文章頁面
 */
function initArticlePage() {
    setupEventListeners();
    initializeLanguagePreference(); // 初始化語言偏好
    loadArticleFromURL();
    updateLanguage();
}

/**
 * 設置事件監聽器
 */
function setupEventListeners() {
    // 語言切換按鈕
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', handleLanguageSwitch);
    });
    
    // 檢視模式切換按鈕
    document.querySelectorAll('.view-mode-btn').forEach(btn => {
        btn.addEventListener('click', handleViewModeSwitch);
    });
    
    // 分享按鈕
    document.getElementById('shareBtn').addEventListener('click', handleShare);
}

/**
 * 從URL載入文章
 */
function loadArticleFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    const language = urlParams.get('lang');
    
    if (!articleId) {
        showError();
        return;
    }
    
    // 設定語言
    if (language && ['tw', 'en', 'cn', 'jp'].includes(language)) {
        articleCurrentLanguage = language;
        localStorage.setItem('preferredLanguage', language);
    }
    
    loadArticle(parseInt(articleId));
}

/**
 * 從 Markdown 檔案載入文章內容
 */
async function loadArticleFromMarkdown(articleId, language = 'tw') {
    try {
        // 根據文章ID和語言代碼構建檔案路徑
        const filePath = getMarkdownFilePath(articleId, language);
        
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load markdown file: ${response.status}`);
        }
        
        const markdownContent = await response.text();
        
        // 解析 Markdown 內容（簡單的解析，將 # 轉換為 h1 等）
        const htmlContent = parseMarkdownToHtml(markdownContent);
        
        // 從檔案名稱提取文章資訊
        const articleInfo = extractArticleInfoFromFilename(filePath);
        
        return {
            id: articleId,
            category: articleInfo.category,
            title: articleInfo.title,
            content: htmlContent,
            date: "2025-10-07", // 可以從 Markdown 檔案中解析
            tags: [], // 可以從 Markdown 檔案中解析
            language: language
        };
    } catch (error) {
        console.error('Error loading markdown file:', error);
        return null;
    }
}

/**
 * 根據文章ID和語言代碼獲取 Markdown 檔案路徑
 */
function getMarkdownFilePath(articleId, language) {
    // 根據 URL_NAMING_RULES.md 的檔案命名規範
    const fileMap = {
        1: {
            tw: 'content/tw/investment_fortune-god-beside-you_1_財神爺就在你身邊.md',
            en: 'content/en/investment_fortune-god-beside-you_1_Fortune God Beside You.md',
            cn: 'content/cn/investment_fortune-god-beside-you_1_财神爷就在你身边.md',
            jp: 'content/jp/investment_fortune-god-beside-you_1_財神様があなたのそばに.md'
        },
        2: {
            tw: 'content/tw/investment_amd-arbitrage-strategy_2_科技宅男的終極套利密碼.md',
            en: 'content/en/investment_amd-arbitrage-strategy_2_Tech Guy Ultimate Arbitrage Code.md',
            cn: 'content/cn/investment_amd-arbitrage-strategy_2_科技宅男的终极套利密码.md',
            jp: 'content/jp/investment_amd-arbitrage-strategy_2_テクノロジーオタクの究極アービトラージコード.md'
        },
        3: {
            tw: 'content/tw/tech_tech-stock-investment-strategy_3_科技股投資策略.md',
            en: 'content/en/tech_tech-stock-investment-strategy_3_Tech Stock Investment Strategy.md',
            cn: 'content/cn/tech_tech-stock-investment-strategy_3_科技股投资策略.md',
            jp: 'content/jp/tech_tech-stock-investment-strategy_3_テック株投資戦略.md'
        }
    };
    
    return fileMap[articleId] && fileMap[articleId][language] 
        ? fileMap[articleId][language] 
        : null;
}

/**
 * 簡單的 Markdown 到 HTML 轉換器
 */
function parseMarkdownToHtml(markdown) {
    let html = markdown;
    
    // 轉換標題
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // 轉換粗體
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // 轉換斜體
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // 轉換連結
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    
    // 轉換段落
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';
    
    // 清理空段落
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p>\s*<h/g, '<h');
    html = html.replace(/<\/h([1-6])>\s*<\/p>/g, '</h$1>');
    
    return html;
}

/**
 * 從檔案名稱提取文章資訊
 */
function extractArticleInfoFromFilename(filePath) {
    const filename = filePath.split('/').pop();
    const parts = filename.replace('.md', '').split('_');
    
    return {
        category: parts[0] || 'general',
        slug: parts[1] || '',
        id: parseInt(parts[2]) || 0,
        title: parts[3] || 'Untitled'
    };
}

/**
 * 載入文章資料
 */
async function loadArticle(articleId) {
    showLoading();
    
    try {
        // 嘗試從 Markdown 檔案載入文章
        const article = await loadArticleFromMarkdown(articleId, articleCurrentLanguage);
        
        if (article) {
            currentArticle = article;
            displayArticle(article);
            
            // 更新瀏覽器URL為新格式
            updateBrowserUrl(article, articleCurrentLanguage);
            
            // 設置文章導航
            setupArticleNavigation(articleId);
        } else {
            // 如果 Markdown 檔案載入失敗，回退到硬編碼內容
            loadArticleFromFallback(articleId);
        }
    } catch (error) {
        console.error('Error loading article:', error);
        loadArticleFromFallback(articleId);
    } finally {
        hideLoading();
    }
}

/**
 * 回退到硬編碼文章內容
 */
function loadArticleFromFallback(articleId) {
    // 從 script.js 獲取文章資料（使用新的多語言結構）
    const article = window.articles ? window.articles.find(a => a.id === articleId) : null;
    
    if (!article) {
        // 如果沒有找到文章，嘗試從舊的資料結構載入
        const storedArticles = JSON.parse(localStorage.getItem('blogArticles')) || [];
        const fallbackArticles = storedArticles.length > 0 ? storedArticles : defaultArticles;
        const fallbackArticle = fallbackArticles.find(a => a.id === articleId);
        
        if (!fallbackArticle) {
            showError();
            return;
        }
        
        // 將舊格式轉換為新格式
        const convertedArticle = {
            ...fallbackArticle,
            multilingual: {
                tw: {
                    title: fallbackArticle.title,
                    excerpt: fallbackArticle.excerpt,
                    content: fallbackArticle.content,
                    tags: fallbackArticle.tags || []
                },
                en: generateEnglishContent(fallbackArticle),
                cn: {
                    title: fallbackArticle.title,
                    excerpt: fallbackArticle.excerpt,
                    content: fallbackArticle.content,
                    tags: fallbackArticle.tags || []
                },
                jp: {
                    title: fallbackArticle.title,
                    excerpt: fallbackArticle.excerpt,
                    content: fallbackArticle.content,
                    tags: fallbackArticle.tags || []
                }
            }
        };
        
        currentArticle = convertedArticle;
        displayArticle(convertedArticle);
    } else {
        // 使用新的多語言結構
        currentArticle = article;
        displayArticle(article);
    }
    
    // 更新瀏覽器URL為新格式
    updateBrowserUrl(currentArticle, articleCurrentLanguage);
    
    // 設置文章導航
    setupArticleNavigation(articleId);
}

/**
 * 顯示文章內容
 */
function displayArticle(article) {
    // 隱藏載入狀態，顯示文章內容
    loadingState.classList.add('hidden');
    articleContentElement.classList.remove('hidden');
    
    // 獲取當前語言的內容
    const currentLangContent = article.multilingual && article.multilingual[articleCurrentLanguage] 
        ? article.multilingual[articleCurrentLanguage] 
        : article.multilingual?.tw || article; // 預設使用繁體中文或原始格式
    
    const currentTitle = currentLangContent.title || article.title || '';
    const currentContent = currentLangContent.content || article.content || '';
    const currentTags = currentLangContent.tags || article.tags || [];
    
    // 設置頁面標題
    document.title = `${currentTitle} - Jason Blog`;
    document.getElementById('pageTitle').textContent = `${currentTitle} - Jason Blog`;
    
    // 設置文章基本資訊
    articleTitle.textContent = currentTitle;
    articleCategory.textContent = getCategoryName(article.category);
    articleCategory.className = `article-category ${article.category}`;
    articleDate.textContent = formatDate(article.date);
    
    // 設置標籤
    if (currentTags && currentTags.length > 0) {
        articleTags.innerHTML = currentTags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
    }
    
    // 設置文章內容
    const zhContent = article.multilingual?.tw?.content || article.content || '';
    const enContent = article.multilingual?.en?.content || '';
    const cnContent = article.multilingual?.cn?.content || zhContent;
    const jpContent = article.multilingual?.jp?.content || zhContent;
    
    // 根據當前語言顯示對應內容
    contentZh.innerHTML = zhContent;
    contentEn.innerHTML = enContent;
    bilingualContentZh.innerHTML = zhContent;
    bilingualContentEn.innerHTML = enContent;
    
    // 如果有簡體中文和日文內容，也設置它們
    if (document.getElementById('contentCn')) {
        document.getElementById('contentCn').innerHTML = cnContent;
    }
    if (document.getElementById('contentJp')) {
        document.getElementById('contentJp').innerHTML = jpContent;
    }
    
    /**
     * 更新檢視模式
     */
    function updateViewMode() {
        if (currentViewMode === 'single') {
            // 單語模式
            singleLanguageContent.classList.remove('hidden');
            bilingualContent.classList.add('hidden');
            
            // 顯示對應語言的內容
            if (articleCurrentLanguage === 'tw') {
                contentZh.classList.remove('hidden');
                contentEn.classList.add('hidden');
            } else {
                contentZh.classList.add('hidden');
                contentEn.classList.remove('hidden');
            }
        } else {
            // 雙語對照模式
            singleLanguageContent.classList.add('hidden');
            bilingualContent.classList.remove('hidden');
        }
    }
}

/**
 * 生成英文內容（示例實現）
 */
function generateEnglishContent(article) {
    const englishArticles = {
        1: {
            title: "Fortune God is Right Beside You",
            excerpt: "Over the next two years, AMD's stock price will soar and liquidity will dry up. The same procurement demand, when it reaches the minds of aliens, becomes so simple and brutal.",
            content: `
                <h1>Fortune God is Right Beside You</h1>
                
                <p><strong>Conclusion and Insights:</strong> Over the next two years, AMD's stock price will soar and liquidity will dry up. The same procurement demand, when it reaches the minds of aliens, becomes so simple and brutal. They will create $100 billion and $600 billion out of thin air on Earth. For both parties and global investors, this is just a matter of time, and it's as simple as pulling your leg.</p>
                
                <h2>Background</h2>
                <p>On 2025/10/07, OpenAI and AMD reached a strategic partnership, causing AMD's stock price to surge 25%. Partnership details: OpenAI will obtain up to 160 million AMD shares through "performance warrants" at a price of only $0.01 per share (far below the market price of about $165), which is equivalent to obtaining nearly 10% of AMD's equity.</p>
                
                <p>Currently (2025/10/07), AMD has 1.62 billion outstanding shares, stock price is $210, total market cap is $340.2 billion. If AMD's total shares remain at 1.62 billion unchanged and the stock price reaches $600, the total market cap will reach $972 billion. What are the calculations of Su Bae and <strong>Sam Altman</strong>?</p>
                
                <h3>AMD (Su Bae)'s Calculation: Trading "Future Ownership" for "Current Market Cap Explosion"</h3>
                <p>Your understanding is very precise.</p>
                <ul>
                    <li>Her sacrifice: Giving away 10% of company ownership (162 million shares) almost for free to OpenAI.</li>
                    <li>Her target return: In exchange for OpenAI's long-term large-scale order commitment, this commitment becomes a "super catalyst" that ignites market confidence, pushing the company's market cap from $340 billion to $972 billion.</li>
                </ul>
                
                <h4>The Deep Logic Behind:</h4>
                <ol>
                    <li><strong>Extremely High Leverage Effect:</strong> She gave away 10% equity but gained nearly 3x growth in the value of the remaining 90% equity. This is an extremely profitable deal for existing shareholders (including herself).</li>
                    <li><strong>Establishing AI Market Position:</strong> This is not just financial maneuvering, but strategic decision-making. Locking in OpenAI as a benchmark client is equivalent to announcing to the world: "AMD is Nvidia's number one alternative in the AI chip market." This can attract more customers, developers, and investors, creating a virtuous cycle.</li>
                    <li><strong>Cost of Dilution vs. Benefit of Growth:</strong> Although existing shareholders' equity is diluted by 10%, the total value of their holdings has increased significantly. This is a typical strategy of "making the pie bigger - even if the proportion becomes smaller, the actual size received multiplies several times."</li>
                </ol>
                
                <p><strong>Conclusion:</strong> Su Bae's calculation is "sacrifice small pie, make big pie," using 10% equity as bait to leverage a nearly trillion-dollar market cap empire, making all shareholders (including herself) much wealthier.</p>
                
                <h3>OpenAI's Calculation: Trading "Procurement Commitment" for "Nearly Cost-Free Hundred Billion Dollar Windfall"</h3>
                <ul>
                    <li>OpenAI's sacrifice: Committing to purchase billions of dollars worth of chips from AMD in the coming years. (These chips are what OpenAI would have to buy anyway.)</li>
                    <li>OpenAI's financial gain: <strong>Nearly cost-free</strong> acquisition of $97.2 billion</li>
                </ul>
                
                <h2>What I See is Not Just News, But "Exchange Vouchers"</h2>
                
                <h3>Just 13 AMD Shares, Let AMD+OpenAI Pay for You Within 2 Years!</h3>
                <p>10-year top-tier PC + 10-year AI subscription, total value over $5,400, now pre-orderable with $2,730 principal.</p>
                
                <p>While everyone is still discussing the hundred-billion-dollar partnership between AMD and OpenAI, I've already calculated how to make this alliance pay for me directly.</p>
                
                <h4>Elementary School Math:</h4>
                <ul>
                    <li>My goal: A $3,000 top-spec AMD PC + 10-year $2,400 OpenAI subscription.</li>
                    <li>My method: Buy 13 AMD shares at $210 stock price.</li>
                    <li>My plan: Sell when stock price reaches $600.</li>
                    <li>My profit: $5,070 net profit, directly covering my entire wish list.</li>
                </ul>
                
                <p><strong>Why within 2 years?</strong><br>
                Because AI development speed is measured in months. OpenAI's massive orders and AMD Instinct GPU's continued volume will ignite revenue and stock price in the coming quarters. The market never believes in miracles, only in performance, and AMD's performance is on the way.</p>
                
                <p>My risk management method is not fear, but discipline:</p>
                <ol>
                    <li>This $2,730 USD is money I "can afford to lose" without affecting my life.</li>
                    <li>I will sell in stages: sell part at $400 to lock in profits, sell another part at $600. Never be greedy.</li>
                    <li>I give it 2 years, but I'm also prepared to hold longer because I'm bullish on the 10-year AI mega-trend.</li>
                </ol>
                
                <p>This is not gambling. This is a "personal financial tip" based on business logic. The giants are laying out their empires, and we retail investors, computer geeks, can cleverly hoist a sail in their wake.</p>
                
                <p>I just boarded and pre-ordered my AMD computer and OpenAI's 10-year subscription. How about you?</p>
                
                <h4>Data Sources:</h4>
                <p><a href="https://www.youtube.com/watch?v=xPdAcoGyZ98" target="_blank">YouTube Video 1</a><br>
                <a href="https://www.youtube.com/watch?v=U0mYqcXd8Nc" target="_blank">YouTube Video 2</a></p>
            `
        },
        2: {
            title: "The Art and Science of Web Development",
            excerpt: "Modern web development combines creativity with technical expertise. From responsive design to progressive web apps, developers are creating increasingly sophisticated digital experiences.",
            content: `
                <h2>Frontend Technologies</h2>
                <p>The frontend landscape continues to evolve with frameworks like React, Vue, and Angular leading the way. CSS has also advanced with Grid and Flexbox making layouts more intuitive.</p>
                
                <h2>Backend Development</h2>
                <p>Server-side technologies have embraced microservices architecture, containerization with Docker, and cloud-native development practices.</p>
                
                <h2>Best Practices</h2>
                <ul>
                    <li>Mobile-first responsive design</li>
                    <li>Performance optimization</li>
                    <li>Accessibility standards</li>
                    <li>Security considerations</li>
                </ul>
            `
        },
        3: {
            title: "Digital Marketing in the Modern Era",
            excerpt: "Digital marketing has transformed how businesses connect with customers. Social media, content marketing, and data analytics are reshaping the marketing landscape.",
            content: `
                <h2>Social Media Strategy</h2>
                <p>Platforms like Instagram, TikTok, and LinkedIn offer unique opportunities for brand engagement and customer acquisition.</p>
                
                <h2>Content Marketing</h2>
                <p>Quality content remains king. Video content, podcasts, and interactive media are driving engagement rates higher than ever.</p>
                
                <h2>Analytics and Measurement</h2>
                <p>Data-driven decision making is crucial. Tools like Google Analytics, social media insights, and customer journey mapping provide valuable insights.</p>
            `
        }
    };
    
    if (englishArticles[article.id]) {
         return englishArticles[article.id];
     }
    
    // 對於其他文章，返回基本的英文版本提示
    return `
        <h1>${article.title} (English Version)</h1>
        <p><em>English translation is being prepared. Please check back later or switch to Chinese version.</em></p>
        <p><strong>Original Chinese content summary:</strong></p>
        <p>${article.excerpt}</p>
    `;
}

/**
 * 處理語言切換
 */
function handleLanguageSwitch(e) {
    e.preventDefault();
    const targetLang = e.target.getAttribute('data-lang');
    
    if (targetLang === articleCurrentLanguage) return;
    
    // 顯示語言切換反饋
    showLanguageSwitchFeedback(targetLang);
    
    // 更新語言設定
    articleCurrentLanguage = targetLang;
    
    // 儲存語言偏好
    localStorage.setItem('preferredLanguage', articleCurrentLanguage);
    
    // 重新載入文章
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId) {
        // 更新URL參數
        urlParams.set('lang', targetLang);
        const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
        window.history.pushState({}, '', newUrl);
        
        // 重新載入文章
        loadArticle(articleId);
    }
    
    // 更新語言相關的UI
    updateLanguage();
    updateLanguageButtons();
}

/**
 * 處理檢視模式切換
 */
function handleViewModeSwitch(e) {
    const targetMode = e.target.getAttribute('data-mode');
    
    if (targetMode === currentViewMode) return;
    
    // 更新按鈕狀態
    document.querySelectorAll('.view-mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // 更新當前檢視模式
    currentViewMode = targetMode;
    
    // 更新內容顯示
    updateViewMode();
}

/**
 * 更新檢視模式
 */
function updateViewMode() {
    if (currentViewMode === 'single') {
        // 單語模式
        singleLanguageContent.classList.remove('hidden');
        bilingualContent.classList.add('hidden');
        
        // 顯示對應語言的內容
        if (articleCurrentLanguage === 'tw') {
            contentZh.classList.remove('hidden');
            contentEn.classList.add('hidden');
        } else {
            contentZh.classList.add('hidden');
            contentEn.classList.remove('hidden');
        }
    } else {
        // 雙語對照模式
        singleLanguageContent.classList.add('hidden');
        bilingualContent.classList.remove('hidden');
    }
}

/**
 * 顯示語言切換反饋
 */
function showLanguageSwitchFeedback(targetLang) {
    const feedback = document.createElement('div');
    feedback.className = 'language-switch-feedback';
    feedback.textContent = targetLang === 'tw' ? '已切換至中文' : 'Switched to English';
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(feedback);
    
    // 觸發動畫
    setTimeout(() => {
        feedback.style.opacity = '1';
        feedback.style.transform = 'translateY(0)';
    }, 10);
    
    // 3秒後移除
    setTimeout(() => {
        feedback.style.opacity = '0';
        feedback.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.parentNode.removeChild(feedback);
            }
        }, 300);
    }, 3000);
}

/**
 * 初始化語言偏好
 */
function initializeLanguagePreference() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
        
        // 更新按鈕狀態
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === currentLanguage) {
                btn.classList.add('active');
            }
        });
        
        // 更新界面
        updateLanguage();
    }
}

/**
 * 更新界面語言
 */
function updateLanguage() {
    // 更新HTML lang屬性
    document.documentElement.lang = currentLanguage === 'tw' ? 'zh-TW' : 'en';
    
    // 更新所有帶有data-zh和data-en屬性的元素
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
        const zhText = element.getAttribute('data-zh');
        const enText = element.getAttribute('data-en');
        
        if (currentLanguage === 'tw') {
            element.textContent = zhText;
        } else {
            element.textContent = enText;
        }
    });
    
    // 更新分類名稱
    if (currentArticle) {
        articleCategory.textContent = getCategoryName(currentArticle.category);
    }
}

/**
 * 獲取分類名稱
 */
function getCategoryName(category) {
    return articleTranslations[currentLanguage][category] || category;
}

/**
 * 格式化日期
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    
    if (currentLanguage === 'tw') {
        return date.toLocaleDateString('zh-TW', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } else {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

/**
 * 處理分享功能
 */
function handleShare() {
    if (navigator.share && currentArticle) {
        navigator.share({
            title: currentArticle.title,
            text: currentArticle.excerpt,
            url: window.location.href
        }).catch(err => {
            console.log('分享失敗:', err);
            fallbackShare();
        });
    } else {
        fallbackShare();
    }
}

/**
 * 備用分享方法
 */
function fallbackShare() {
    // 複製連結到剪貼簿
    navigator.clipboard.writeText(window.location.href).then(() => {
        showNotification(
            currentLanguage === 'tw' ? '連結已複製到剪貼簿' : 'Link copied to clipboard'
        );
    }).catch(() => {
        // 如果剪貼簿API不可用，顯示連結
        const url = window.location.href;
        prompt(
            currentLanguage === 'tw' ? '請複製以下連結：' : 'Please copy the following link:',
            url
        );
    });
}

/**
 * 顯示錯誤狀態
 */
function showError() {
    loadingState.classList.add('hidden');
    errorState.classList.remove('hidden');
}

/**
 * 獲取所有文章列表
 */
function getAllArticles() {
    try {
        const storedArticles = localStorage.getItem('articles');
        return storedArticles ? JSON.parse(storedArticles) : defaultArticles;
    } catch (error) {
        console.error('Error loading articles:', error);
        return defaultArticles;
    }
}

/**
 * 根據當前文章ID獲取前後文章
 */
function getAdjacentArticles(currentId) {
    const articles = getAllArticles();
    const currentIndex = articles.findIndex(article => article.id === parseInt(currentId));
    
    if (currentIndex === -1) {
        return { prev: null, next: null };
    }
    
    const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
    const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;
    
    return { prev: prevArticle, next: nextArticle };
}

/**
 * 設置文章導航按鈕
 */
function setupArticleNavigation(currentId) {
    const { prev, next } = getAdjacentArticles(currentId);
    
    // 設置上一篇文章按鈕
    if (prev) {
        const prevUrl = `article.html?id=${prev.id}&lang=${currentLanguage}`;
        prevArticleBtn.href = prevUrl;
        prevArticleTitle.textContent = prev.title;
        prevArticleBtn.classList.remove('hidden');
    } else {
        prevArticleBtn.classList.add('hidden');
    }
    
    // 設置下一篇文章按鈕
    if (next) {
        const nextUrl = `article.html?id=${next.id}&lang=${currentLanguage}`;
        nextArticleBtn.href = nextUrl;
        nextArticleTitle.textContent = next.title;
        nextArticleBtn.classList.remove('hidden');
    } else {
        nextArticleBtn.classList.add('hidden');
    }
}

/**
 * 更新語言按鈕狀態
 */
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

/**
 * 顯示載入狀態
 */
function showLoading() {
    if (loadingState) {
        loadingState.classList.remove('hidden');
    }
    if (articleContentElement) {
        articleContentElement.classList.add('hidden');
    }
    if (errorState) {
        errorState.classList.add('hidden');
    }
}

/**
 * 隱藏載入狀態
 */
function hideLoading() {
    if (loadingState) {
        loadingState.classList.add('hidden');
    }
}

/**
 * 顯示錯誤狀態
 */
function showError(message = '文章載入失敗') {
    if (loadingState) {
        loadingState.classList.add('hidden');
    }
    if (articleContent) {
        articleContent.classList.add('hidden');
    }
    if (errorState) {
        errorState.classList.remove('hidden');
        const errorMessage = errorState.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.textContent = message;
        }
    }
}

/**
 * 顯示雙語對照內容
 * @param {Object} article - 文章物件
 */
function displayBilingualContent(article) {
    const contentElement = document.getElementById('article-content');
    if (!contentElement) return;
    
    const englishContent = generateEnglishContent(article);
    const enContent = typeof englishContent === 'string' ? englishContent : englishContent.content;
    
    contentElement.innerHTML = `
        <div class="bilingual-content">
            <div class="language-column zh-column">
                <div class="language-header">
                    <h3><i class="fas fa-flag"></i> 中文版本</h3>
                    <span class="language-indicator">繁體中文</span>
                </div>
                <div class="content-wrapper">
                    ${article.content}
                </div>
            </div>
            <div class="language-column en-column">
                <div class="language-header">
                    <h3><i class="fas fa-flag"></i> English Version</h3>
                    <span class="language-indicator">English</span>
                </div>
                <div class="content-wrapper">
                    ${enContent}
                </div>
            </div>
        </div>
    `;
    
    // 添加同步滾動功能
    addSyncScroll();
}

/**
 * 顯示單一語言內容
 * @param {Object} article - 文章物件
 */
function displaySingleLanguageContent(article) {
    const contentElement = document.getElementById('article-content');
    if (!contentElement) return;
    
    let content;
    if (currentLanguage === 'tw') {
        content = article.content;
    } else {
        const englishContent = generateEnglishContent(article);
        content = typeof englishContent === 'string' ? englishContent : englishContent.content;
    }
    
    contentElement.innerHTML = `
        <div class="single-language-content">
            <div class="content-wrapper">
                ${content}
            </div>
        </div>
    `;
}

/**
 * 添加同步滾動功能
 */
function addSyncScroll() {
    const zhColumn = document.querySelector('.zh-column .content-wrapper');
    const enColumn = document.querySelector('.en-column .content-wrapper');
    
    if (!zhColumn || !enColumn) return;
    
    // 添加移動設備上的同步滾動提示
    if (window.innerWidth <= 768) {
        const bilingualContent = document.querySelector('.bilingual-content');
        if (bilingualContent) {
            const hint = document.createElement('div');
            hint.className = 'sync-scroll-hint';
            hint.innerHTML = '<i class="fas fa-arrows-alt-v"></i> 滾動任一欄位將同步另一欄位';
            bilingualContent.insertBefore(hint, bilingualContent.firstChild);
        }
    }
    
    let isScrolling = false;
    let lastScrollTime = 0;
    
    function syncScroll(source, target) {
        if (isScrolling) return;
        
        const now = Date.now();
        if (now - lastScrollTime < 16) return; // 限制滾動頻率
        lastScrollTime = now;
        
        isScrolling = true;
        
        const scrollPercentage = source.scrollTop / (source.scrollHeight - source.clientHeight);
        const targetScrollTop = scrollPercentage * (target.scrollHeight - target.clientHeight);
        
        // 使用 requestAnimationFrame 來平滑滾動
        requestAnimationFrame(() => {
            target.scrollTop = targetScrollTop;
            setTimeout(() => {
                isScrolling = false;
            }, 50);
        });
    }
    
    // 添加滾動事件監聽器
    zhColumn.addEventListener('scroll', () => syncScroll(zhColumn, enColumn), { passive: true });
    enColumn.addEventListener('scroll', () => syncScroll(enColumn, zhColumn), { passive: true });
    
    // 添加視覺反饋
    function addScrollIndicator(element, side) {
        element.addEventListener('scroll', () => {
            element.style.borderLeft = `4px solid var(--${side === 'tw' ? 'primary' : 'secondary'}-color)`;
            clearTimeout(element.scrollTimeout);
            element.scrollTimeout = setTimeout(() => {
                element.style.borderLeft = `4px solid var(--border-color)`;
            }, 1000);
        });
    }
    
    addScrollIndicator(zhColumn.parentElement, 'tw');
    addScrollIndicator(enColumn.parentElement, 'en');
}

// 當DOM載入完成時初始化文章頁面
document.addEventListener('DOMContentLoaded', initArticlePage);

/**
 * 生成SEO友好的URL slug
 * @param {string} title - 文章標題
 * @returns {string} - URL slug
 */
function generateUrlSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // 只保留英文字母、數字、空格和連字號
        .replace(/[\s_]+/g, '-') // 將空格和下劃線轉換為連字號
        .replace(/^-+|-+$/g, ''); // 移除開頭和結尾的連字號
}

/**
 * 獲取分類的英文名稱
 * @param {string} category - 分類名稱
 * @returns {string} - 英文分類名稱
 */
function getCategorySlug(category) {
    const categoryMap = {
        'investment': 'investment',
        'ai': 'ai',
        'tech': 'tech',
        'news': 'news'
    };
    return categoryMap[category] || category;
}

/**
 * 生成新格式的文章URL
 * @param {Object} article - 文章對象
 * @param {string} language - 語言代碼 (tw, en, cn, jp等)
 * @returns {string} - 新格式的URL
 */
function generateArticleUrl(article, language = 'tw') {
    const categorySlug = getCategorySlug(article.category);
    
    // 統一使用英文標題slug，不論語言版本
    const englishContent = generateEnglishContent(article);
    const englishTitle = englishContent && englishContent.title ? englishContent.title : article.title;
    const titleSlug = generateUrlSlug(englishTitle);
    
    return `/${categorySlug}/${titleSlug}-${article.id}-${language}`;
}

/**
 * 解析新格式的文章URL
 * @param {string} url - URL字符串
 * @returns {Object|null} - 解析結果 {articleId, language, category, titleSlug}
 */
function parseArticleUrl(url) {
    // 移除域名和協議，只保留路徑
    const path = url.replace(/^https?:\/\/[^\/]+/, '');
    
    // 新格式: /[category]/[title-slug]-[id]-[language]
    const newFormatMatch = path.match(/^\/([^\/]+)\/(.+)-(\d+)-([a-z]{2,3})$/);
    
    if (newFormatMatch) {
        const [, category, titleSlug, articleId, language] = newFormatMatch;
        return {
            articleId: parseInt(articleId),
            language: language,
            category: category,
            titleSlug: titleSlug
        };
    }
    
    return null;
}

/**
 * 從URL中提取文章ID（支援新舊格式）
 * @returns {number|null} - 文章ID
 */
function parseArticleId() {
    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;
    
    // 首先嘗試解析新格式URL
    const newFormatResult = parseArticleUrl(currentUrl);
    if (newFormatResult) {
        return newFormatResult.articleId;
    }
    
    // 如果新格式解析失敗，嘗試舊格式（查詢參數）
    const urlParams = new URLSearchParams(window.location.search);
    const idFromQuery = urlParams.get('id');
    
    if (idFromQuery) {
        return parseInt(idFromQuery);
    }
    
    return null;
}

/**
 * 從URL中提取語言代碼
 * @returns {string} - 語言代碼，默認為'tw'
 */
function parseLanguageFromUrl() {
    const currentUrl = window.location.href;
    
    // 嘗試從新格式URL中提取語言
    const newFormatResult = parseArticleUrl(currentUrl);
    if (newFormatResult && newFormatResult.language) {
        return newFormatResult.language;
    }
    
    // 如果新格式解析失敗，檢查查詢參數
    const urlParams = new URLSearchParams(window.location.search);
    const langFromQuery = urlParams.get('lang');
    
    if (langFromQuery) {
        return langFromQuery;
    }
    
    // 默認返回中文
    return 'tw';
}

/**
 * 更新瀏覽器URL（不刷新頁面）
 * @param {Object} article - 文章對象
 * @param {string} language - 語言代碼
 */
function updateBrowserUrl(article, language) {
    if (!article) return;
    
    const newUrl = generateArticleUrl(article, language);
    
    // 更新瀏覽器URL但不刷新頁面
    window.history.replaceState(
        { articleId: article.id, language: language },
        `${article.title} - Jason Blog`,
        newUrl
    );
    
    // 更新頁面標題
    document.title = `${article.title} - Jason Blog`;
}