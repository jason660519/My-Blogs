/**
 * Jason Blog - 主要JavaScript功能
 * 包含導航、搜尋、篩選、模態框和評論系統
 */

// 從localStorage載入文章資料，如果沒有則使用預設資料
let articles = JSON.parse(localStorage.getItem('blogArticles')) || [
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
            
            <h3>OpenAI的算盤：用「採購承諾」換取「幾乎無本的千億美元橫財」</h3>
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

// 評論資料庫 (模擬)
let commentsData = {
    1: [
        {
            id: 1,
            author: "投資新手",
            date: "2024-01-16",
            text: "很有見地的分析！AMD確實有很大的潛力。"
        },
        {
            id: 2,
            author: "財經達人",
            date: "2024-01-16",
            text: "風險管理的部分寫得很好，投資確實需要紀律。"
        }
    ]
};

// DOM元素
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const articlesGrid = document.getElementById('articlesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('articleModal');
const closeModal = document.querySelector('.close');
const articleContent = document.getElementById('articleContent');
const commentText = document.getElementById('commentText');
const submitComment = document.getElementById('submitComment');
const commentsList = document.getElementById('commentsList');

// 當前狀態
let currentFilter = 'all';
let currentSearchTerm = '';
let currentArticleId = null;
let currentLanguage = 'zh';

// 語言包
const translations = {
    zh: {
        'Investment Analysis × AI Insights': '投資分析 × AI洞察',
        'Home': '首頁',
        'Articles': '文章',
        'About': '關於',
        'Admin': '管理',
        'Search articles...': '搜尋文章...',
        'All': '全部',
        'Investment': '投資分析',
        'Tech': '科技股',
        'AI': 'AI產業',
        'News': '財經新聞',
        'Latest Articles': '最新文章',
        'Categories': '文章分類',
        'About Jason Blog': '關於 Jason Blog',
        'Read More': '閱讀更多',
        'investment': '投資分析',
        'tech': '科技股',
        'ai': 'AI產業',
        'news': '財經新聞'
    },
    en: {
        'Investment Analysis × AI Insights': 'Investment Analysis × AI Insights',
        'Home': 'Home',
        'Articles': 'Articles',
        'About': 'About',
        'Admin': 'Admin',
        'Search articles...': 'Search articles...',
        'All': 'All',
        'Investment': 'Investment',
        'Tech': 'Technology',
        'AI': 'AI Industry',
        'News': 'Financial News',
        'Latest Articles': 'Latest Articles',
        'Categories': 'Categories',
        'About Jason Blog': 'About Jason Blog',
        'Read More': 'Read More',
        'investment': 'Investment Analysis',
        'tech': 'Technology Stocks',
        'ai': 'AI Industry',
        'news': 'Financial News'
    }
};

/**
 * 載入文章資料
 */
function loadArticles() {
    // 文章資料已經在全域變數中定義，這裡可以進行額外的初始化
    console.log('文章資料已載入:', articles.length, '篇文章');
}

/**
 * 渲染分類按鈕
 */
function renderCategories() {
    // 分類按鈕已經在HTML中定義，這裡可以進行動態更新
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        const category = btn.dataset.filter;
        if (category && category !== 'all') {
            const categoryName = getCategoryName(category);
            if (categoryName) {
                btn.textContent = categoryName;
            }
        }
    });
}

/**
 * 初始化應用程式
 */
function initApp() {
    loadArticles();
    setupEventListeners();
    initializeLanguagePreference(); // 初始化語言偏好
    initializeCategoryFromURL(); // 從 URL 初始化分類狀態
    renderArticles();
    renderCategories();
    updateLanguage();
}

/**
 * 從 URL 參數初始化分類狀態
 */
function initializeCategoryFromURL() {
    const urlCategory = getCategoryFromURL();
    
    // 更新當前篩選狀態
    currentFilter = urlCategory;
    
    // 更新按鈕的活動狀態
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === urlCategory) {
            btn.classList.add('active');
        }
    });
}

/**
 * 設置事件監聽器
 */
function setupEventListeners() {
    // 語言切換按鈕
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', handleLanguageSwitch);
    });
    
    // 搜尋功能
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // 分類篩選
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // 漢堡選單
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // 導航連結
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // 模態框關閉
    if (closeModal) {
        closeModal.addEventListener('click', closeArticleModal);
    }
    
    // 點擊模態框背景關閉
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeArticleModal();
            }
        });
    }
    
    // 評論提交
    if (submitComment) {
        submitComment.addEventListener('click', handleCommentSubmit);
    }
    
    // 按 ESC 鍵關閉模態框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeArticleModal();
        }
    });
}

/**
 * 切換手機版選單
 */
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

/**
 * 處理導航連結點擊
 */
function handleNavClick(e) {
    e.preventDefault();
    
    // 移除所有active類別
    navLinks.forEach(link => link.classList.remove('active'));
    
    // 添加active類別到當前連結
    e.target.classList.add('active');
    
    // 關閉手機版選單
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    
    // 滾動到對應區塊
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * 設置平滑滾動
 */
function setupSmoothScrolling() {
    // 監聽滾動事件來更新導航狀態
    window.addEventListener('scroll', updateActiveNavLink);
}

/**
 * 更新活動導航連結
 */
function updateActiveNavLink() {
    const sections = ['home', 'articles', 'categories', 'about'];
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        }
    });
}

/**
 * 處理搜尋功能
 */
function handleSearch() {
    currentSearchTerm = searchInput.value.toLowerCase().trim();
    renderArticles();
    
    // 滾動到文章區塊
    document.getElementById('articles').scrollIntoView({
        behavior: 'smooth'
    });
}

/**
 * 處理分類篩選
 */
function handleFilter(e) {
    const button = e.target;
    const newFilter = button.getAttribute('data-filter');
    
    // 如果點擊的是當前已選中的分類，則不執行任何操作
    if (currentFilter === newFilter) return;
    
    // 添加載入狀態
    button.disabled = true;
    button.style.opacity = '0.7';
    
    // 獲取文章網格容器
    const articlesGrid = document.getElementById('articlesGrid');
    
    // 添加淡出效果
    if (articlesGrid) {
        articlesGrid.style.opacity = '0.5';
        articlesGrid.style.transition = 'opacity 0.3s ease';
    }
    
    // 使用 setTimeout 創建平滑的切換體驗
    setTimeout(() => {
        // 移除所有active類別
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // 添加active類別到當前按鈕
        button.classList.add('active');
        
        // 更新篩選狀態
        currentFilter = newFilter;
        
        // 更新 URL 參數
        updateURLParameter('category', currentFilter);
        
        // 重新渲染文章
        renderArticles();
        
        // 恢復按鈕狀態
        button.disabled = false;
        button.style.opacity = '1';
        
        // 恢復文章網格透明度
        if (articlesGrid) {
            articlesGrid.style.opacity = '1';
        }
        
        // 滾動到文章區塊以提供更好的用戶體驗
        document.getElementById('articles').scrollIntoView({
            behavior: 'smooth'
        });
        
        // 顯示切換成功的視覺反饋
        showFilterSwitchFeedback(newFilter);
        
    }, 150);
}

/**
 * 渲染文章列表
 */
function renderArticles() {
    let filteredArticles = articles;
    
    // 應用分類篩選
    if (currentFilter !== 'all') {
        filteredArticles = filteredArticles.filter(article => 
            article.category === currentFilter
        );
    }
    
    // 應用搜尋篩選
    if (currentSearchTerm) {
        filteredArticles = filteredArticles.filter(article =>
            article.title.toLowerCase().includes(currentSearchTerm) ||
            article.excerpt.toLowerCase().includes(currentSearchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(currentSearchTerm))
        );
    }
    
    // 清空文章網格
    articlesGrid.innerHTML = '';
    
    // 如果沒有找到文章
    if (filteredArticles.length === 0) {
        articlesGrid.innerHTML = `
            <div class="no-articles">
                <p>沒有找到符合條件的文章</p>
            </div>
        `;
        return;
    }
    
    // 渲染文章卡片
    filteredArticles.forEach(article => {
        const articleCard = createArticleCard(article);
        articlesGrid.appendChild(articleCard);
    });
}

/**
 * 生成SEO友好的URL slug
 * @param {string} title - 文章標題
 * @returns {string} - URL slug
 */
function generateUrlSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // 移除特殊字符
        .replace(/[\s_-]+/g, '-') // 將空格和下劃線轉換為連字號
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
 * @param {string} language - 語言代碼 (zh, en, cn, jp等)
 * @returns {string} - 新格式的URL
 */
function generateArticleUrl(article, language = 'zh') {
    const categorySlug = getCategorySlug(article.category);
    const titleSlug = generateUrlSlug(article.title);
    return `/${categorySlug}/${titleSlug}-${article.id}-${language}`;
}

/**
 * 創建文章卡片
 */
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';
    
    // 使用舊格式URL確保連結正常工作，文章頁面載入後會更新為新格式
    const articleUrl = `article.html?id=${article.id}&lang=${currentLanguage}`;
    
    card.innerHTML = `
        <div class="article-meta">
            <span class="article-category ${article.category}">${getCategoryName(article.category)}</span>
            <time class="article-date">${formatDate(article.date)}</time>
        </div>
        <h2 class="article-title">
            <a href="${articleUrl}" class="article-link">${article.title}</a>
        </h2>
        <p class="article-excerpt">${article.excerpt}</p>
        <div class="article-tags">
            ${article.tags ? article.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
        </div>
        <div class="article-actions">
            <a href="${articleUrl}" class="read-more-btn" data-zh="閱讀全文" data-en="Read More">
                ${currentLanguage === 'zh' ? '閱讀全文' : 'Read More'}
            </a>
            <button class="share-btn" onclick="shareArticle(${article.id})" data-zh="分享" data-en="Share">
                <i class="fas fa-share-alt"></i>
                ${currentLanguage === 'zh' ? '分享' : 'Share'}
            </button>
        </div>
    `;
    
    return card;
}

/**
 * 格式化日期
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    
    if (currentLanguage === 'zh') {
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
 * 打開文章詳情
 */
function openArticle(articleId) {
    const article = articles.find(a => a.id === parseInt(articleId));
    if (!article) return;
    
    // 導航到獨立的文章頁面
    window.location.href = `article.html?id=${articleId}`;
}

/**
 * 處理語言切換
 */
function handleLanguageSwitch(e) {
    const targetLang = e.target.getAttribute('data-lang');
    
    if (targetLang === currentLanguage) return;
    
    // 添加載入狀態
    const button = e.target;
    const originalText = button.textContent;
    button.disabled = true;
    button.style.opacity = '0.7';
    
    // 添加平滑過渡效果
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = '0.8';
        mainContent.style.transition = 'opacity 0.3s ease';
    }
    
    // 使用 setTimeout 來創建平滑的切換體驗
    setTimeout(() => {
        // 更新按鈕狀態
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // 更新當前語言
        currentLanguage = targetLang;
        
        // 保存語言偏好到 localStorage
        localStorage.setItem('preferredLanguage', currentLanguage);
        
        // 更新界面語言
        updateLanguage();
        
        // 重新渲染文章和分類
        renderArticles();
        renderCategories();
        
        // 恢復按鈕狀態
        button.disabled = false;
        button.style.opacity = '1';
        
        // 恢復內容透明度
        if (mainContent) {
            mainContent.style.opacity = '1';
        }
        
        // 顯示切換成功提示
        showLanguageSwitchFeedback(targetLang);
        
    }, 150);
}

/**
 * 顯示語言切換反饋
 */
function showLanguageSwitchFeedback(targetLang) {
    const feedback = document.createElement('div');
    feedback.className = 'language-switch-feedback';
    feedback.textContent = targetLang === 'zh' ? '已切換至中文' : 'Switched to English';
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
 * 顯示分類切換成功的通知
 */
function showFilterSwitchFeedback(filter) {
    const filterNames = {
        'all': '全部',
        'investment': '投資分析',
        'tech': '科技股',
        'ai': 'AI產業',
        'news': '財經新聞'
    };
    
    const filterName = filterNames[filter] || filter;
    const notification = document.createElement('div');
    notification.textContent = `已切換至「${filterName}」分類`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--secondary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 2秒後移除通知
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

/**
 * 更新 URL 參數
 */
function updateURLParameter(param, value) {
    const url = new URL(window.location);
    if (value === 'all') {
        url.searchParams.delete(param);
    } else {
        url.searchParams.set(param, value);
    }
    window.history.replaceState({}, '', url);
}

/**
 * 從 URL 參數獲取分類
 */
function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category') || 'all';
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
        renderArticles();
        renderCategories();
    }
}

/**
 * 更新界面語言
 */
function updateLanguage() {
    // 更新HTML lang屬性
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-TW' : 'en';
    
    // 更新所有帶有data-zh和data-en屬性的元素
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
        const zhText = element.getAttribute('data-zh');
        const enText = element.getAttribute('data-en');
        
        if (currentLanguage === 'zh') {
            element.textContent = zhText;
        } else {
            element.textContent = enText;
        }
    });
    
    // 更新搜尋框placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = translations[currentLanguage]['Search articles...'];
    }
    
    // 更新其他動態文字
    updateDynamicTexts();
}

/**
 * 更新動態文字內容
 */
function updateDynamicTexts() {
    // 更新標題
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.textContent = translations[currentLanguage]['Latest Articles'];
    }
    
    // 更新分類標題
    const categoriesTitle = document.querySelector('.categories h2');
    if (categoriesTitle) {
        categoriesTitle.textContent = translations[currentLanguage]['Categories'];
    }
    
    // 更新關於標題
    const aboutTitle = document.querySelector('.about h2');
    if (aboutTitle) {
        aboutTitle.textContent = translations[currentLanguage]['About Jason Blog'];
    }
}

/**
 * 獲取分類名稱
 */
function getCategoryName(category) {
    return translations[currentLanguage][category] || category;
}

/**
 * 關閉文章模態框
 */
function closeArticleModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentArticleId = null;
    
    // 清空評論輸入框
    commentText.value = '';
}

/**
 * 載入評論
 */
function loadComments(articleId) {
    const comments = commentsData[articleId] || [];
    
    commentsList.innerHTML = '';
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<p class="no-comments">目前還沒有評論，成為第一個留言的人吧！</p>';
        return;
    }
    
    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsList.appendChild(commentElement);
    });
}

/**
 * 創建評論元素
 */
function createCommentElement(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    
    commentDiv.innerHTML = `
        <div class="comment-author">
            匿名用戶
            <span class="comment-date">${formatDate(comment.date)}</span>
        </div>
        <div class="comment-text">${comment.text}</div>
    `;
    
    return commentDiv;
}

/**
 * 處理評論提交
 */
function handleCommentSubmit() {
    const text = commentText.value.trim();
    
    if (!text) {
        alert('請輸入評論內容');
        return;
    }
    
    if (!currentArticleId) {
        alert('無法提交評論');
        return;
    }
    
    // 創建新評論
    const newComment = {
        id: Date.now(),
        author: '匿名用戶',
        date: new Date().toISOString().split('T')[0],
        text: text
    };
    
    // 添加到評論資料庫
    if (!commentsData[currentArticleId]) {
        commentsData[currentArticleId] = [];
    }
    commentsData[currentArticleId].unshift(newComment);
    
    // 重新載入評論
    loadComments(currentArticleId);
    
    // 清空輸入框
    commentText.value = '';
    
    // 顯示成功訊息
    showNotification('評論已成功發表！');
}

/**
 * 顯示通知訊息
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 3秒後移除通知
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 添加通知動畫CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .no-articles {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        color: var(--text-light);
        font-size: 1.2rem;
    }
    
    .no-comments {
        text-align: center;
        color: var(--text-light);
        font-style: italic;
        padding: 2rem;
    }
`;
document.head.appendChild(notificationStyles);

// 當DOM載入完成時初始化應用程式
document.addEventListener('DOMContentLoaded', initApp);