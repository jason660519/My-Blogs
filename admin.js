/**
 * Jason Blog 管理後台 JavaScript
 * 提供文章管理、新增、編輯和設定功能
 */

// 當前語言設定
let currentAdminLanguage = localStorage.getItem('adminLanguage') || 'tw';

// 管理後台翻譯對象
const adminTranslations = {
    tw: {
        articleManagement: '文章管理',
        addNewArticle: '新增文章',
        websiteSettings: '網站設定',
        chineseVersion: '中文版本',
        englishVersion: 'English Version',
        sharedSettings: '共用設定',
        articleTitle: '文章標題',
        articleExcerpt: '文章摘要',
        articleContent: '文章內容',
        category: '分類',
        tags: '標籤',
        preview: '預覽',
        clear: '清空',
        publish: '發布',
        edit: '編輯',
        delete: '刪除',
        save: '儲存',
        cancel: '取消'
    },
    en: {
        articleManagement: 'Article Management',
        addNewArticle: 'Add New Article',
        websiteSettings: 'Website Settings',
        chineseVersion: '中文版本',
        englishVersion: 'English Version',
        sharedSettings: 'Shared Settings',
        articleTitle: 'Article Title',
        articleExcerpt: 'Article Excerpt',
        articleContent: 'Article Content',
        category: 'Category',
        tags: 'Tags',
        preview: 'Preview',
        clear: 'Clear',
        publish: 'Publish',
        edit: 'Edit',
        delete: 'Delete',
        save: 'Save',
        cancel: 'Cancel'
    },
    cn: {
        articleManagement: '文章管理',
        addNewArticle: '新增文章',
        websiteSettings: '网站设定',
        chineseVersion: '中文版本',
        englishVersion: 'English Version',
        sharedSettings: '共用设定',
        articleTitle: '文章标题',
        articleExcerpt: '文章摘要',
        articleContent: '文章内容',
        category: '分类',
        tags: '标签',
        preview: '预览',
        clear: '清空',
        publish: '发布',
        edit: '编辑',
        delete: '删除',
        save: '保存',
        cancel: '取消'
    },
    jp: {
        articleManagement: '記事管理',
        addNewArticle: '記事を追加',
        websiteSettings: 'ウェブサイト設定',
        chineseVersion: '中国語版',
        englishVersion: 'English Version',
        sharedSettings: '共有設定',
        articleTitle: '記事タイトル',
        articleExcerpt: '記事の抜粋',
        articleContent: '記事内容',
        category: 'カテゴリー',
        tags: 'タグ',
        preview: 'プレビュー',
        clear: 'クリア',
        publish: '公開',
        edit: '編集',
        delete: '削除',
        save: '保存',
        cancel: 'キャンセル'
    }
};

// 從localStorage獲取文章資料，如果沒有則使用預設資料
let articlesData = JSON.parse(localStorage.getItem('blogArticles')) || [
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
            
            <h3>OpenAI的算盤：用「採購承諾」換取「近乎無本的千億美元橫財」</h3>
            <ul>
                <li>Open AI的付出：承諾在未來幾年向AMD採購數十億美元的晶片。(這些晶片本來就是OPEN AI要花錢買的。)</li>
                <li>OpenAI的財務收益：<strong>近乎無本的</strong>取得 972億美元</li>
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
    }
];

// 當前編輯的文章ID
let currentEditingId = null;

// DOM元素
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const articlesList = document.getElementById('articlesList');
const articleForm = document.getElementById('articleForm');
const previewBtn = document.getElementById('previewBtn');
const clearBtn = document.getElementById('clearBtn');
const previewSection = document.getElementById('previewSection');
const previewContent = document.getElementById('previewContent');
const saveSettingsBtn = document.getElementById('saveSettings');

/**
 * 初始化管理後台
 */
function initAdmin() {
    initializeAdminLanguage();
    setupEventListeners();
    renderArticlesList();
    loadSettings();
}

/**
 * 設置事件監聽器
 */
function setupEventListeners() {
    // 標籤頁切換
    tabBtns.forEach(btn => {
        btn.addEventListener('click', handleTabSwitch);
    });
    
    // 語言切換按鈕
    const adminLangBtns = document.querySelectorAll('.admin-lang-btn');
    adminLangBtns.forEach(btn => {
        btn.addEventListener('click', handleAdminLanguageSwitch);
    });
    
    // 文章表單提交
    articleForm.addEventListener('submit', handleArticleSubmit);
    
    // 預覽按鈕
    previewBtn.addEventListener('click', handlePreview);
    
    // 清空按鈕
    clearBtn.addEventListener('click', handleClear);
    
    // 儲存設定按鈕
    saveSettingsBtn.addEventListener('click', handleSaveSettings);
}

/**
 * 處理標籤頁切換
 */
function handleTabSwitch(e) {
    const targetTab = e.target.getAttribute('data-tab');
    
    // 移除所有active類別
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // 添加active類別到當前標籤
    e.target.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
    
    // 如果切換到文章管理，重新渲染列表
    if (targetTab === 'articles') {
        renderArticlesList();
    }
}

/**
 * 渲染文章列表
 */
function renderArticlesList() {
    articlesList.innerHTML = '';
    
    if (articlesData.length === 0) {
        articlesList.innerHTML = `
            <div class="article-item">
                <div class="article-info">
                    <p>目前還沒有文章，請新增第一篇文章。</p>
                </div>
            </div>
        `;
        return;
    }
    
    // 按日期排序（最新的在前）
    const sortedArticles = [...articlesData].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedArticles.forEach(article => {
        const articleItem = createArticleItem(article);
        articlesList.appendChild(articleItem);
    });
}

/**
 * 創建文章項目
 */
function createArticleItem(article) {
    const item = document.createElement('div');
    item.className = 'article-item';
    
    const categoryNames = {
        'investment': '投資分析',
        'tech': '科技股',
        'ai': 'AI產業',
        'news': '財經新聞'
    };
    
    item.innerHTML = `
        <div class="article-info">
            <h3>${article.title}</h3>
            <div class="article-meta">
                分類：${categoryNames[article.category] || article.category} | 
                發布日期：${formatDate(article.date)} | 
                標籤：${article.tags ? article.tags.join(', ') : '無'}
            </div>
        </div>
        <div class="article-actions">
            <button class="btn btn-edit btn-small" onclick="editArticle(${article.id})">
                <i class="fas fa-edit"></i> 編輯
            </button>
            <button class="btn btn-delete btn-small" onclick="deleteArticle(${article.id})">
                <i class="fas fa-trash"></i> 刪除
            </button>
        </div>
    `;
    
    return item;
}

/**
 * 格式化日期
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * 編輯文章
 */
function editArticle(articleId) {
    const article = articlesData.find(a => a.id === articleId);
    if (!article) return;
    
    currentEditingId = articleId;
    
    // 填充表單
    document.getElementById('articleTitleZh').value = article.title;
    document.getElementById('articleTitleEn').value = article.titleEn || '';
    document.getElementById('articleCategory').value = article.category;
    document.getElementById('articleExcerptZh').value = article.excerpt;
    document.getElementById('articleExcerptEn').value = article.excerptEn || '';
    document.getElementById('articleTags').value = article.tags ? article.tags.join(', ') : '';
    document.getElementById('articleContentZh').value = article.content;
    document.getElementById('articleContentEn').value = article.contentEn || '';
    
    // 切換到新增文章標籤頁
    document.querySelector('[data-tab="new-article"]').click();
    
    // 更新表單標題和按鈕文字
    document.querySelector('#new-article h2').textContent = '編輯文章';
    document.querySelector('#articleForm button[type="submit"]').textContent = '更新文章';
    
    showNotification('文章已載入到編輯器中');
}

/**
 * 刪除文章
 */
function deleteArticle(articleId) {
    if (!confirm('確定要刪除這篇文章嗎？此操作無法復原。')) {
        return;
    }
    
    articlesData = articlesData.filter(article => article.id !== articleId);
    saveArticlesToStorage();
    renderArticlesList();
    showNotification('文章已成功刪除');
}

/**
 * 處理文章提交
 */
function handleArticleSubmit(e) {
    e.preventDefault();
    
    // 獲取中文版本資料
    const title = document.getElementById('articleTitleZh').value.trim();
    const excerpt = document.getElementById('articleExcerptZh').value.trim();
    const content = document.getElementById('articleContentZh').value.trim();
    
    // 獲取英文版本資料
    const titleEn = document.getElementById('articleTitleEn').value.trim();
    const excerptEn = document.getElementById('articleExcerptEn').value.trim();
    const contentEn = document.getElementById('articleContentEn').value.trim();
    
    // 獲取共用資料
    const category = document.getElementById('articleCategory').value;
    const tags = document.getElementById('articleTags').value.trim();
    
    // 驗證必填欄位（中文版本）
    if (!title || !excerpt || !content || !category) {
        const errorMsg = currentAdminLanguage === 'tw' ? '請填寫所有中文版本的必填欄位' : 'Please fill in all required fields for Chinese version';
        showNotification(errorMsg, 'error');
        return;
    }
    
    // 驗證必填欄位（英文版本）
    if (!titleEn || !excerptEn || !contentEn) {
        const errorMsg = currentAdminLanguage === 'tw' ? '請填寫所有英文版本的必填欄位' : 'Please fill in all required fields for English version';
        showNotification(errorMsg, 'error');
        return;
    }
    
    // 處理標籤
    const tagsArray = tags ? tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
    
    const articleData = {
        title,
        excerpt,
        content,
        titleEn,
        excerptEn,
        contentEn,
        category,
        tags: tagsArray,
        date: new Date().toISOString().split('T')[0]
    };
    
    if (currentEditingId) {
        // 更新現有文章
        const articleIndex = articlesData.findIndex(a => a.id === currentEditingId);
        if (articleIndex !== -1) {
            articlesData[articleIndex] = {
                ...articlesData[articleIndex],
                ...articleData
            };
            const successMsg = currentAdminLanguage === 'tw' ? '文章已成功更新' : 'Article updated successfully';
            showNotification(successMsg);
        }
        currentEditingId = null;
    } else {
        // 新增文章
        const newArticle = {
            id: Date.now(),
            ...articleData
        };
        articlesData.unshift(newArticle);
        const successMsg = currentAdminLanguage === 'tw' ? '文章已成功發布' : 'Article published successfully';
        showNotification(successMsg);
    }
    
    // 儲存到localStorage
    saveArticlesToStorage();
    
    // 重置表單
    handleClear();
    
    // 切換到文章管理標籤頁
    document.querySelector('[data-tab="articles"]').click();
}

/**
 * 處理預覽
 */
function handlePreview() {
    const titleZh = document.getElementById('articleTitleZh').value.trim();
    const contentZh = document.getElementById('articleContentZh').value.trim();
    const titleEn = document.getElementById('articleTitleEn').value.trim();
    const contentEn = document.getElementById('articleContentEn').value.trim();
    
    if (!titleZh || !contentZh) {
        const message = currentAdminLanguage === 'tw' ? 
            '請至少填寫中文版本的標題和內容才能預覽' : 
            'Please fill in at least the Chinese title and content to preview';
        showNotification(message, 'error');
        return;
    }
    
    // 根據當前語言顯示對應版本
    const displayTitle = currentAdminLanguage === 'tw' ? titleZh : (titleEn || titleZh);
    const displayContent = currentAdminLanguage === 'tw' ? contentZh : (contentEn || contentZh);
    
    previewContent.innerHTML = `
        <h1>${displayTitle}</h1>
        ${displayContent}
    `;
    
    previewSection.style.display = 'block';
    previewSection.scrollIntoView({ behavior: 'smooth' });
}

/**
 * 處理清空表單
 */
function handleClear() {
    const confirmMsg = currentAdminLanguage === 'tw' ? '確定要清空所有內容嗎？' : 'Are you sure you want to clear all content?';
    if (confirm(confirmMsg)) {
        articleForm.reset();
        previewSection.style.display = 'none';
        currentEditingId = null;
        
        // 重置表單標題和按鈕文字
        const formTitle = document.querySelector('#new-article h2');
        const submitBtn = document.querySelector('#articleForm button[type="submit"]');
        
        if (currentAdminLanguage === 'tw') {
            formTitle.textContent = '新增文章';
            if (submitBtn) submitBtn.textContent = '發布文章';
        } else {
            formTitle.textContent = 'Add New Article';
            if (submitBtn) submitBtn.textContent = 'Publish Article';
        }
    }
}

/**
 * 處理儲存設定
 */
function handleSaveSettings() {
    const settings = {
        siteTitle: document.getElementById('siteTitle').value,
        siteDescription: document.getElementById('siteDescription').value,
        contactEmail: document.getElementById('contactEmail').value
    };
    
    localStorage.setItem('blogSettings', JSON.stringify(settings));
    showNotification('設定已成功儲存');
}

/**
 * 載入設定
 */
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('blogSettings')) || {};
    
    if (settings.siteTitle) {
        document.getElementById('siteTitle').value = settings.siteTitle;
    }
    if (settings.siteDescription) {
        document.getElementById('siteDescription').value = settings.siteDescription;
    }
    if (settings.contactEmail) {
        document.getElementById('contactEmail').value = settings.contactEmail;
    }
}

/**
 * 儲存文章到localStorage
 */
function saveArticlesToStorage() {
    localStorage.setItem('blogArticles', JSON.stringify(articlesData));
}

/**
 * 顯示通知訊息
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    const bgColor = type === 'error' ? '#e74c3c' : '#27ae60';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // 3秒後移除通知
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
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
`;
document.head.appendChild(notificationStyles);

/**
 * 初始化管理後台語言設定
 */
function initializeAdminLanguage() {
    updateAdminLanguageButtons();
    updateAdminLanguage();
}

/**
 * 處理管理後台語言切換
 */
function handleAdminLanguageSwitch(e) {
    const newLanguage = e.target.getAttribute('data-lang');
    if (newLanguage && newLanguage !== currentAdminLanguage) {
        // 添加載入狀態
        e.target.style.opacity = '0.7';
        e.target.textContent = currentAdminLanguage === 'tw' ? '切換中...' : 'Switching...';
        
        setTimeout(() => {
            currentAdminLanguage = newLanguage;
            localStorage.setItem('adminLanguage', newLanguage);
            
            updateAdminLanguageButtons();
            updateAdminLanguage();
            
            // 顯示切換成功訊息
            const message = newLanguage === 'tw' ? '已切換至中文' : 'Switched to English';
            showNotification(message);
        }, 300);
    }
}

/**
 * 更新管理後台語言按鈕狀態
 */
function updateAdminLanguageButtons() {
    const adminLangBtns = document.querySelectorAll('.admin-lang-btn');
    adminLangBtns.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        btn.classList.toggle('active', btnLang === currentAdminLanguage);
        
        // 重置按鈕文字
        if (btnLang === 'tw') {
            btn.textContent = '中文';
        } else if (btnLang === 'en') {
            btn.textContent = 'English';
        }
        btn.style.opacity = '1';
    });
}

/**
 * 更新管理後台語言
 */
function updateAdminLanguage() {
    // 更新具有語言屬性的元素
    const elementsWithLangData = document.querySelectorAll('[data-zh], [data-en], [data-cn], [data-jp]');
    elementsWithLangData.forEach(element => {
        let text = '';
        
        // 根據當前語言選擇對應的屬性
        switch (currentAdminLanguage) {
            case 'tw':
                text = element.getAttribute('data-zh');
                break;
            case 'en':
                text = element.getAttribute('data-en');
                break;
            case 'cn':
                text = element.getAttribute('data-cn');
                break;
            case 'jp':
                text = element.getAttribute('data-jp');
                break;
        }
        
        // 如果找不到對應語言的文字，使用繁體中文作為備用
        if (!text) {
            text = element.getAttribute('data-zh');
        }
        
        if (text) {
            element.textContent = text;
        }
    });
    
    // 更新表單標籤的 placeholder
    updateAdminFormPlaceholders();
    
    // 更新按鈕文字
    updateAdminButtonTexts();
}

/**
 * 更新管理後台表單 placeholder
 */
function updateAdminFormPlaceholders() {
    const placeholders = {
        tw: {
            articleTitle: '請輸入文章標題',
            articleTitleEn: '請輸入英文標題',
            articleExcerpt: '請輸入文章摘要，建議100-200字',
            articleExcerptEn: '請輸入英文摘要，建議100-200字',
            articleContent: '請輸入文章內容，支援HTML格式',
            articleContentEn: '請輸入英文內容，支援HTML格式',
            articleTags: '請用逗號分隔標籤，例如：投資,AMD,AI'
        },
        en: {
            articleTitle: 'Enter article title',
            articleTitleEn: 'Enter English title',
            articleExcerpt: 'Enter article excerpt, recommended 100-200 words',
            articleExcerptEn: 'Enter English excerpt, recommended 100-200 words',
            articleContent: 'Enter article content, HTML format supported',
            articleContentEn: 'Enter English content, HTML format supported',
            articleTags: 'Separate tags with commas, e.g.: investment,AMD,AI'
        }
    };
    
    Object.keys(placeholders[currentAdminLanguage]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.placeholder = placeholders[currentAdminLanguage][id];
        }
    });
}

/**
 * 更新管理後台按鈕文字
 */
function updateAdminButtonTexts() {
    const buttons = {
        previewBtn: currentAdminLanguage === 'tw' ? '預覽' : 'Preview',
        clearBtn: currentAdminLanguage === 'tw' ? '清空' : 'Clear',
        publishBtn: currentAdminLanguage === 'tw' ? '發布' : 'Publish',
        saveSettings: currentAdminLanguage === 'tw' ? '儲存設定' : 'Save Settings'
    };
    
    Object.keys(buttons).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = buttons[id];
        }
    });
}

// 當DOM載入完成時初始化管理後台
document.addEventListener('DOMContentLoaded', initAdmin);

// 將函數暴露到全域範圍，供HTML中的onclick使用
window.editArticle = editArticle;
window.deleteArticle = deleteArticle;