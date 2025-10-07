/**
 * Jason Blog - 主要JavaScript功能
 * 包含導航、搜尋、篩選、模態框和評論系統
 */

// 全域變數
let currentLanguage = 'tw';



// 更新當前URL為新的多語言格式
function updateCurrentUrlToNewFormat() {
    const currentPath = window.location.pathname;
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    // 如果是首頁且有語言參數，更新為新格式
    if ((currentPath === '/' || currentPath === '/index.html') && langParam) {
        const newUrl = `/home/${langParam}`;
        // 使用 replaceState 避免在瀏覽器歷史中創建新條目
        window.history.replaceState({}, '', newUrl);
    }
}

// 更新語言按鈕狀態
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}



/**
 * 從 URL 參數初始化語言設定
 */
function initializeLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get('lang');
    
    // 優先順序：URL 參數 > localStorage > 瀏覽器語言 > 預設繁體中文
    if (langFromUrl && ['tw', 'en', 'cn', 'jp'].includes(langFromUrl)) {
        currentLanguage = langFromUrl;
    } else {
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage && ['tw', 'en', 'cn', 'jp'].includes(savedLanguage)) {
            currentLanguage = savedLanguage;
        } else {
            // 瀏覽器語言檢測
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.startsWith('zh-CN') || browserLang.startsWith('zh-Hans')) {
                currentLanguage = 'cn';
            } else if (browserLang.startsWith('en')) {
                currentLanguage = 'en';
            } else if (browserLang.startsWith('ja')) {
                currentLanguage = 'jp';
            } else {
                currentLanguage = 'tw'; // 預設繁體中文
            }
        }
    }
    
    // 更新 URL 以反映當前語言設定
    updateLanguageUrl(currentLanguage);
    
    // 保存語言偏好
    localStorage.setItem('preferredLanguage', currentLanguage);
    
    // 更新按鈕狀態
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// 更新語言URL
function updateLanguageUrl(language) {
    // 檢查當前是否在首頁
    const currentPath = window.location.pathname;
    const isHomePage = currentPath === '/' || currentPath === '/index.html' || currentPath.includes('index.html');
    
    if (isHomePage) {
        // 如果在首頁，更新URL為新的語言格式
        const newUrl = `/home/${language}`;
        
        // 使用history API更新URL而不重新載入頁面
        history.pushState(null, '', newUrl);
    } else {
        // 如果不在首頁，只更新查詢參數
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('lang', language);
        
        const newUrl = `${currentPath}?${urlParams.toString()}`;
        history.pushState(null, '', newUrl);
    }
}

// 從localStorage載入文章資料，如果沒有則使用預設資料
let articles = JSON.parse(localStorage.getItem('blogArticles')) || [
    {
        id: 1,
        category: "investment",
        date: "2024-01-15",
        multilingual: {
            tw: {
                title: "財神爺就在你身邊",
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
                        <li>她的付出：將公司10%的所有權（1.62億股） nearly free地送給OpenAI。</li>
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
            en: {
                title: "Fortune God Beside You",
                excerpt: "In the next two years, AMD's stock price will soar and liquidity will dry up. The same procurement demand, when it reaches the alien minds, becomes so simple and brutal...",
                content: `
                    <h1>Fortune God Beside You</h1>
                    
                    <p><strong>Conclusion and Insights:</strong> In the next two years, AMD's stock price will soar and liquidity will dry up. The same procurement demand, when it reaches the alien minds, becomes so simple and brutal. They will create $100 billion and $600 billion out of thin air on Earth. For both parties and global investors, this is just a matter of time, and it's as simple as pulling a leg.</p>
                    
                    <h2>Background</h2>
                    <p>On 2025/10/07, OpenAI and AMD reached a strategic partnership, causing AMD's stock price to surge 25%. Partnership details: OpenAI will acquire up to 160 million AMD shares through "performance warrants" at only $0.01 per share (far below the market price of about $165), equivalent to nearly 10% of AMD's equity.</p>
                    
                    <p>Currently (2025/10/07), AMD has 1.62 billion outstanding shares, stock price is $210, total market cap is $340.2 billion. If AMD's total shares remain at 1.62 billion unchanged and the stock price reaches $600, the total market cap will reach $972 billion. What are the calculations of Lisa Su and <strong>Sam Altman</strong>?</p>
                    
                    <h3>AMD (Lisa Su)'s Calculation: Trading "Future Ownership" for "Current Market Cap Surge"</h3>
                    <p>Your understanding is very precise.</p>
                    <ul>
                        <li>Her sacrifice: Give away 10% of company ownership (162 million shares) nearly free to OpenAI.</li>
                        <li>Her target return: Secure OpenAI's long-term large-scale order commitment, which becomes a "super catalyst" that ignites market confidence, pushing the company's market cap from $340 billion to $972 billion.</li>
                    </ul>
                    
                    <h4>The Deep Logic Behind:</h4>
                    <ol>
                        <li><strong>Extremely High Leverage Effect:</strong> She gave away 10% equity but gained nearly 3x value growth for the remaining 90% equity. This is an extremely profitable deal for existing shareholders (including herself).</li>
                        <li><strong>Establishing AI Market Position:</strong> This is not just financial operation, but strategic decision. Locking in OpenAI as a benchmark client is equivalent to announcing to the world: "AMD is Nvidia's top alternative in the AI chip market." This can attract more customers, developers, and investors, forming a virtuous cycle.</li>
                        <li><strong>Dilution Cost vs. Growth Benefits:</strong> Although existing shareholders' equity is diluted by 10%, the total value of their holdings has increased significantly. This is a typical strategy of "making the pie bigger, even if the proportion becomes smaller, the actual size received multiplies."</li>
                    </ol>
                    
                    <p><strong>Conclusion:</strong> Lisa Su's calculation is "sacrifice small pie, make big pie," using 10% equity as bait to leverage a nearly trillion-dollar market cap empire, making all shareholders (including herself) much wealthier.</p>
                    
                    <h3>OpenAI's Calculation: Trading "Procurement Commitment" for "Almost Cost-Free Hundred Billion Dollar Windfall"</h3>
                    <ul>
                        <li>OpenAI's sacrifice: Promise to purchase billions of dollars worth of chips from AMD in the coming years. (These chips are what OpenAI would have to buy anyway.)</li>
                        <li>OpenAI's financial gain: <strong>Almost cost-free</strong> acquisition of $97.2 billion</li>
                    </ul>
                    
                    <h2>What I See Is Not Just News, But "Exchange Vouchers"</h2>
                    
                    <h3>Just 13 AMD Shares, Let AMD+OpenAI Pay for You Within 2 Years!</h3>
                    <p>10-year top-tier PC + 10-year AI subscription, total value over $5,400, now pre-orderable with $2,730 principal.</p>
                    
                    <p>While everyone is still discussing the hundred billion dollar partnership between AMD and OpenAI, I've already calculated how to make this alliance pay for me directly.</p>
                    
                    <h4>Elementary School Math:</h4>
                    <ul>
                        <li>My goal: A $3,000 top-spec AMD PC + 10-year $2,400 OpenAI subscription.</li>
                        <li>My method: Buy 13 AMD shares at $210 stock price.</li>
                        <li>My plan: Sell when stock price reaches $600.</li>
                        <li>My profit: $5,070 net profit, directly covering my entire wish list.</li>
                    </ul>
                    
                    <p><strong>Why within 2 years?</strong><br>
                    Because AI development speed is measured in months. OpenAI's massive orders and AMD Instinct GPU's continued volume will ignite revenue and stock price in the coming quarters. The market doesn't believe in miracles, only in performance, and AMD's performance is on the way.</p>
                    
                    <p>My risk management method is not fear, but discipline:</p>
                    <ol>
                        <li>This $2,730 USD is money I "can afford to lose" without affecting my life.</li>
                        <li>I will sell in stages: sell some at $400 to lock in profits, sell more at $600. Never be greedy.</li>
                        <li>I give it 2 years, but I'm also prepared to hold longer because I'm bullish on the 10-year AI mega-trend.</li>
                    </ol>
                    
                    <p>This is not gambling. This is a "personal financial tip" based on business logic. Giants are laying out their empires, and we retail investors, tech geeks, can cleverly hoist a sail in their wake.</p>
                    
                    <p>I just boarded to pre-order my AMD computer and OpenAI's 10-year subscription. How about you?</p>
                    
                    <h4>Sources:</h4>
                    <p><a href="https://www.youtube.com/watch?v=xPdAcoGyZ98" target="_blank">YouTube Video 1</a><br>
                    <a href="https://www.youtube.com/watch?v=U0mYqcXd8Nc" target="_blank">YouTube Video 2</a></p>
                `,
                tags: ["AMD", "OpenAI", "Investment", "AI", "Stock Analysis"]
            },
            cn: {
                title: "财神爷就在你身边",
                excerpt: "未来两年，AMD 的股价会飙升且流动性会枯竭，同样的采购需求，到了外星人的脑袋。却是如此的简单粗暴...",
                content: `
                    <h1>财神爷就在你身边</h1>
                    
                    <p><strong>先下结论与心得:</strong> 未来两年，AMD 的股价会飙升且流动性会枯竭，同样的采购需求，到了外星人的脑袋。却是如此的简单粗暴，祂们在地球上又将凭空创造出了1000亿与6000亿美金，对双方与全球投资人言，这也只是早晚，且是脚拉拉的简单事而已。</p>
                    
                    <h2>前情提要</h2>
                    <p>2025/10/07 OpenAI 与 AMD 达成战略合作，导致 AMD 股价飙升 25%。合作细节： OpenAI 将通过「绩效认股权证」获得最多 1.6 亿股 AMD 股票，每股价格仅 0.01 美元（远低于市价约 165 美元），这相当于获得 AMD 近 10% 的股权。</p>
                    
                    <p>目前 (2025/10/07 )AMD的总股数是 16.2亿 股，股价是210，总市值是3402亿美金。如果到时候AMD的总股数仍是16.2亿股不变，股价达600美金，总市值就会达到9720亿美元，苏妈与<strong>Sam Altman</strong>双方打的算盘是?</p>
                    
                    <h3>AMD（苏妈）的算盘：用「未来所有权」换取「当下市值暴涨」</h3>
                    <p>您的理解非常精准。</p>
                    <ul>
                        <li>她的付出：将公司10%的所有权（1.62亿股） nearly free地送给OpenAI。</li>
                        <li>她的目标回报：换取OpenAI的长期大规模订单承诺，这个承诺成为一个「超级催化剂」，点燃市场信心，将公司市值从3400亿推高至9720亿美元。</li>
                    </ul>
                    
                    <h4>背后的深层逻辑：</h4>
                    <ol>
                        <li><strong>杠杆效应极高：</strong>她送出了10% 的股权，但换来了公司其余90% 股权价值增长近3倍。这是一笔对现有股东（包括她自己）极为划算的交易。</li>
                        <li><strong>确立AI市场地位：</strong>这不仅是财务操作，更是战略决策。锁定OpenAI这个标杆客户，等于向全世界宣布：「AMD在AI芯片市场是Nvidia的头号替代者」。这能吸引更多客户、开发者和投资人，形成良性循环。</li>
                        <li><strong>稀释的代价 vs. 增长的收益：</strong>虽然现有股东的股权被稀释了10%，但他们手中股票的总价值却大幅增加了。这是一个典型的「把饼做大，即使分到的比例变小，但分到的实际大小却翻了好几倍」的策略。</li>
                    </ol>
                    
                    <p><strong>结论：</strong>苏妈的算盘是「舍小饼，做大饼」，用10%的股权作为诱饵，撬动一个接近兆美元的市值帝国，让所有股东（包括她自己）的身价暴涨。</p>
                    
                    <h3>OpenAI的算盘：用「采购承诺」换取「几乎无本的千亿美元横财」</h3>
                    <ul>
                        <li>Open AI的付出：承诺在未来几年向AMD采购数十亿美元的芯片。(这些芯片本来就是OPEN AI要花钱买的。)</li>
                        <li>OpenAI的财务收益：<strong>几乎无本的</strong>取得 972亿美元</li>
                    </ul>
                    
                    <h2>我看到的不只是新闻，是「兑换券」</h2>
                    
                    <h3>只要13股AMD，2年内免费让AMD+OPEN AI帮你买单！</h3>
                    <p>10年顶级PC + 10年AI订阅，总价超过$5400美元的未来，现在用$2730本金就能预订。</p>
                    
                    <p>当所有人还在讨论AMD与OpenAI的千亿美元合作时，我已经算好了如何让这场结盟，直接替我付费。</p>
                    
                    <h4>小学生都会算的数学：</h4>
                    <ul>
                        <li>我的目标：一台$3000的顶规AMD PC + 10年$2400的OpenAI订阅。</li>
                        <li>我的方法：在股价$210时，买入13股AMD。</li>
                        <li>我的计划：在股价达到$600时卖出。</li>
                        <li>我的获利：$5070净利润，直接覆盖我的全部梦想清单。</li>
                    </ul>
                    
                    <p><strong>为什么是2年内？</strong><br>
                    因为AI的发展速度是以月计算。OpenAI的巨额订单、AMD Instinct GPU的持续放量，将在未来几个季度点燃营收与股价。市场从不相信奇迹，只相信实绩，而AMD的实绩正在路上。</p>
                    
                    <p>我管理风险的方法，不是害怕，而是纪律：</p>
                    <ol>
                        <li>这$2730 USD，是我「亏得起」的钱，不影响生活。</li>
                        <li>我会分段卖出：$400卖一部分锁定利润，$600再卖一部分。绝不贪心。</li>
                        <li>我给它2年时间，但也准备好持有更久，因为我看好的是AI的十年大趋势。</li>
                    </ol>
                    
                    <p>这不是赌博。这是一场基于商业逻辑的「个人财务小撇步」。巨头们在布局他们的帝国，而我们散户、电脑宅男、宅女可以巧妙地在他们的航道上，为自己扬起一面帆。</p>
                    
                    <p>我刚刚上车预订了我的AMD电脑与Open AI的10年订阅。你呢？</p>
                    
                    <h4>资料来源:</h4>
                    <p><a href="https://www.youtube.com/watch?v=xPdAcoGyZ98" target="_blank">YouTube影片1</a><br>
                    <a href="https://www.youtube.com/watch?v=U0mYqcXd8Nc" target="_blank">YouTube影片2</a></p>
                `,
                tags: ["AMD", "OpenAI", "投资", "AI", "股票分析"]
            },
            jp: {
                title: "財神様があなたのそばに",
                excerpt: "今後2年間で、AMDの株価は急騰し、流動性は枯渇するでしょう。同じ調達需要が、エイリアンの頭脳に到達すると、こんなにもシンプルで粗暴になります...",
                content: `
                    <h1>財神様があなたのそばに</h1>
                    
                    <p><strong>結論と感想:</strong> 今後2年間で、AMDの株価は急騰し、流動性は枯渇するでしょう。同じ調達需要が、エイリアンの頭脳に到達すると、こんなにもシンプルで粗暴になります。彼らは地球上で1000億ドルと6000億ドルを無から創造するでしょう。双方と世界の投資家にとって、これは時間の問題であり、足を引っ張るほど簡単なことです。</p>
                    
                    <h2>背景</h2>
                    <p>2025年10月7日、OpenAIとAMDが戦略的パートナーシップを締結し、AMDの株価が25%急騰しました。パートナーシップの詳細：OpenAIは「パフォーマンス・ワラント」を通じて最大1億6000万株のAMD株式を1株わずか0.01ドル（市場価格約165ドルを大幅に下回る）で取得し、これはAMDの約10%の株式に相当します。</p>
                    
                    <p>現在（2025年10月7日）AMDの発行済み株式数は16.2億株、株価は210ドル、時価総額は3402億ドルです。AMDの総株式数が16.2億株のまま変わらず、株価が600ドルに達した場合、時価総額は9720億ドルに達します。リサ・スーと<strong>サム・アルトマン</strong>の計算は何でしょうか？</p>
                    
                    <h3>AMD（リサ・スー）の計算：「将来の所有権」を「現在の時価総額急騰」と交換</h3>
                    <p>あなたの理解は非常に正確です。</p>
                    <ul>
                        <li>彼女の犠牲：会社の10%の所有権（1億6200万株）をほぼ無料でOpenAIに譲渡。</li>
                        <li>彼女の目標リターン：OpenAIの長期大規模注文コミットメントを確保し、これが「スーパー触媒」となって市場の信頼を点火し、会社の時価総額を3400億ドルから9720億ドルに押し上げる。</li>
                    </ul>
                    
                    <h4>背後の深い論理：</h4>
                    <ol>
                        <li><strong>極めて高いレバレッジ効果：</strong>彼女は10%の株式を譲渡しましたが、残りの90%の株式価値が約3倍に成長しました。これは既存株主（彼女自身を含む）にとって極めて有利な取引です。</li>
                        <li><strong>AI市場での地位確立：</strong>これは単なる財務操作ではなく、戦略的決定です。OpenAIというベンチマーククライアントを確保することは、世界に向けて「AMDはAIチップ市場でNvidiaの最有力代替者である」と宣言することに等しい。これにより、より多くの顧客、開発者、投資家を引き付け、好循環を形成できます。</li>
                        <li><strong>希薄化のコスト vs. 成長の利益：</strong>既存株主の株式は10%希薄化されましたが、保有株式の総価値は大幅に増加しました。これは典型的な「パイを大きくする、比率は小さくなっても、実際に受け取るサイズは何倍にもなる」戦略です。</li>
                    </ol>
                    
                    <p><strong>結論：</strong>リサ・スーの計算は「小さなパイを犠牲にして、大きなパイを作る」ことで、10%の株式を餌として使い、ほぼ1兆ドルの時価総額帝国を動かし、すべての株主（彼女自身を含む）をはるかに裕福にすることです。</p>
                    
                    <h3>OpenAIの計算：「調達コミットメント」を「ほぼコストゼロの千億ドル棚ぼた」と交換</h3>
                    <ul>
                        <li>OpenAIの犠牲：今後数年間でAMDから数十億ドル相当のチップを購入することを約束。（これらのチップはOpenAIがいずれにせよ購入しなければならないものです。）</li>
                        <li>OpenAIの財務利益：<strong>ほぼコストゼロで</strong>972億ドルを取得</li>
                    </ul>
                    
                    <h2>私が見ているのはニュースだけでなく、「交換券」です</h2>
                    
                    <h3>わずか13株のAMDで、2年以内にAMD+OpenAIにあなたの代金を支払わせましょう！</h3>
                    <p>10年間のハイエンドPC + 10年間のAIサブスクリプション、総額5400ドル以上の未来を、今なら2730ドルの元本で予約できます。</p>
                    
                    <p>みんながまだAMDとOpenAIの千億ドルパートナーシップについて議論している間に、私はすでにこの提携に直接私の代金を支払わせる方法を計算しました。</p>
                    
                    <h4>小学生でもできる計算：</h4>
                    <ul>
                        <li>私の目標：3000ドルのハイスペックAMD PC + 10年間2400ドルのOpenAIサブスクリプション。</li>
                        <li>私の方法：株価210ドルでAMD株を13株購入。</li>
                        <li>私の計画：株価が600ドルに達したら売却。</li>
                        <li>私の利益：5070ドルの純利益で、私の全ての願いリストを直接カバー。</li>
                    </ul>
                    
                    <p><strong>なぜ2年以内なのか？</strong><br>
                    AIの発展速度は月単位で測定されるからです。OpenAIの巨額注文、AMD Instinct GPUの継続的な出荷量が、今後数四半期で収益と株価を点火するでしょう。市場は奇跡を信じず、実績のみを信じます。そしてAMDの実績は進行中です。</p>
                    
                    <p>私のリスク管理方法は恐怖ではなく、規律です：</p>
                    <ol>
                        <li>この2730ドルは、私が「失っても大丈夫」なお金で、生活に影響しません。</li>
                        <li>段階的に売却します：400ドルで一部を売って利益を確定し、600ドルでさらに一部を売ります。決して欲張りません。</li>
                        <li>2年間の時間を与えますが、AIの10年メガトレンドを信じているので、より長く保有する準備もできています。</li>
                    </ol>
                    
                    <p>これはギャンブルではありません。これはビジネスロジックに基づいた「個人的な財務のコツ」です。巨人たちが帝国を築いている間、私たち個人投資家、テクノロジーオタクは、彼らの航跡で巧妙に帆を上げることができます。</p>
                    
                    <p>私は今、AMDコンピューターとOpenAIの10年サブスクリプションを予約するために乗車しました。あなたはどうですか？</p>
                    
                    <h4>情報源：</h4>
                    <p><a href="https://www.youtube.com/watch?v=xPdAcoGyZ98" target="_blank">YouTube動画1</a><br>
                    <a href="https://www.youtube.com/watch?v=U0mYqcXd8Nc" target="_blank">YouTube動画2</a></p>
                `,
                tags: ["AMD", "OpenAI", "投資", "AI", "株式分析"]
            }
        }
    },
    {
        id: 2,
        category: "ai",
        date: "2024-01-10",
        multilingual: {
            tw: {
                title: "AI產業投資趨勢分析",
                excerpt: "深入分析人工智慧產業的投資機會與風險，探討未來發展趨勢...",
                content: `
                    <h1>AI產業投資趨勢分析</h1>
                    <p>人工智慧產業正在經歷前所未有的發展階段，投資機會與挑戰並存...</p>
                    <h2>市場現況</h2>
                    <p>目前AI市場規模已達到數千億美元，預計未來五年將持續高速成長...</p>
                `,
                tags: ["AI", "投資", "趨勢分析", "科技"]
            },
            en: {
                title: "AI Industry Investment Trend Analysis",
                excerpt: "In-depth analysis of investment opportunities and risks in the artificial intelligence industry, exploring future development trends...",
                content: `
                    <h1>AI Industry Investment Trend Analysis</h1>
                    <p>The artificial intelligence industry is experiencing unprecedented development, with investment opportunities and challenges coexisting...</p>
                    <h2>Market Status</h2>
                    <p>The current AI market size has reached hundreds of billions of dollars, and is expected to continue high-speed growth in the next five years...</p>
                `,
                tags: ["AI", "Investment", "Trend Analysis", "Technology"]
            },
            cn: {
                title: "AI产业投资趋势分析",
                excerpt: "深入分析人工智能产业的投资机会与风险，探讨未来发展趋势...",
                content: `
                    <h1>AI产业投资趋势分析</h1>
                    <p>人工智能产业正在经历前所未有的发展阶段，投资机会与挑战并存...</p>
                    <h2>市场现状</h2>
                    <p>目前AI市场规模已达到数千亿美元，预计未来五年将持续高速成长...</p>
                `,
                tags: ["AI", "投资", "趋势分析", "科技"]
            },
            jp: {
                title: "AI産業投資トレンド分析",
                excerpt: "人工知能産業の投資機会とリスクを詳細に分析し、将来の発展トレンドを探る...",
                content: `
                    <h1>AI産業投資トレンド分析</h1>
                    <p>人工知能産業は前例のない発展段階を経験しており、投資機会と課題が共存しています...</p>
                    <h2>市場現状</h2>
                    <p>現在のAI市場規模は数千億ドルに達し、今後5年間で高速成長が続くと予想されています...</p>
                `,
                tags: ["AI", "投資", "トレンド分析", "テクノロジー"]
            }
        }
    },
    {
        id: 3,
        category: "tech",
        date: "2024-01-05",
        multilingual: {
            tw: {
                title: "科技股投資策略",
                excerpt: "分析當前科技股市場環境，提供實用的投資策略建議...",
                content: `
                    <h1>科技股投資策略</h1>
                    <p>科技股一直是投資者關注的焦點，但如何在波動的市場中找到機會...</p>
                    <h2>選股原則</h2>
                    <p>選擇科技股時需要考慮多個因素，包括技術創新能力、市場地位等...</p>
                `,
                tags: ["科技股", "投資策略", "選股"]
            },
            en: {
                title: "Tech Stock Investment Strategy",
                excerpt: "Analyzing the current tech stock market environment and providing practical investment strategy recommendations...",
                content: `
                    <h1>Tech Stock Investment Strategy</h1>
                    <p>Tech stocks have always been the focus of investors, but how to find opportunities in a volatile market...</p>
                    <h2>Stock Selection Principles</h2>
                    <p>When choosing tech stocks, multiple factors need to be considered, including technological innovation capabilities, market position, etc...</p>
                `,
                tags: ["Tech Stocks", "Investment Strategy", "Stock Selection"]
            },
            cn: {
                title: "科技股投资策略",
                excerpt: "分析当前科技股市场环境，提供实用的投资策略建议...",
                content: `
                    <h1>科技股投资策略</h1>
                    <p>科技股一直是投资者关注的焦点，但如何在波动的市场中找到机会...</p>
                    <h2>选股原则</h2>
                    <p>选择科技股时需要考虑多个因素，包括技术创新能力、市场地位等...</p>
                `,
                tags: ["科技股", "投资策略", "选股"]
            },
            jp: {
                title: "テック株投資戦略",
                excerpt: "現在のテック株市場環境を分析し、実用的な投資戦略の提案を提供...",
                content: `
                    <h1>テック株投資戦略</h1>
                    <p>テック株は常に投資家の注目の的でしたが、変動の激しい市場でどのように機会を見つけるか...</p>
                    <h2>銘柄選択の原則</h2>
                    <p>テック株を選択する際は、技術革新能力、市場地位など複数の要因を考慮する必要があります...</p>
                `,
                tags: ["テック株", "投資戦略", "銘柄選択"]
            }
        }
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

// DOM 元素變數宣告
let hamburger, navMenu, navLinks, searchInput, searchBtn, articlesGrid, filterBtns, modal, closeModal, articleContent, commentText, submitComment, commentsList;

// 當前狀態
let currentFilter = 'all';
let currentSearchTerm = '';
let currentArticleId = null;

// 語言包
const translations = {
    tw: {
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
        'Share': '分享',
        'No articles found': '沒有找到符合條件的文章',
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
        'Share': 'Share',
        'No articles found': 'No articles found',
        'investment': 'Investment Analysis',
        'tech': 'Technology Stocks',
        'ai': 'AI Industry',
        'news': 'Financial News'
    },
    cn: {
        'Investment Analysis × AI Insights': '投资分析 × AI洞察',
        'Home': '首页',
        'Articles': '文章',
        'About': '关于',
        'Admin': '管理',
        'Search articles...': '搜索文章...',
        'All': '全部',
        'Investment': '投资分析',
        'Tech': '科技股',
        'AI': 'AI产业',
        'News': '财经新闻',
        'Latest Articles': '最新文章',
        'Categories': '文章分类',
        'About Jason Blog': '关于 Jason Blog',
        'Read More': '阅读更多',
        'Share': '分享',
        'No articles found': '没有找到符合条件的文章',
        'investment': '投资分析',
        'tech': '科技股',
        'ai': 'AI产业',
        'news': '财经新闻'
    },
    jp: {
        'Investment Analysis × AI Insights': '投資分析 × AI洞察',
        'Home': 'ホーム',
        'Articles': '記事',
        'About': 'について',
        'Admin': '管理',
        'Search articles...': '記事を検索...',
        'All': 'すべて',
        'Investment': '投資分析',
        'Tech': 'テクノロジー',
        'AI': 'AI産業',
        'News': '金融ニュース',
        'Latest Articles': '最新記事',
        'Categories': 'カテゴリー',
        'About Jason Blog': 'Jason Blogについて',
        'Read More': '続きを読む',
        'Share': '共有',
        'No articles found': '条件に一致する記事が見つかりません',
        'investment': '投資分析',
        'tech': 'テクノロジー株',
        'ai': 'AI産業',
        'news': '金融ニュース'
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
    // 初始化 DOM 元素選取
    hamburger = document.querySelector('.hamburger');
    navMenu = document.querySelector('.nav-menu');
    navLinks = document.querySelectorAll('.nav-menu a');
    searchInput = document.getElementById('searchInput');
    searchBtn = document.getElementById('searchBtn');
    articlesGrid = document.getElementById('articlesGrid');
    filterBtns = document.querySelectorAll('.filter-btn');
    modal = document.getElementById('articleModal');
    closeModal = document.querySelector('.close');
    articleContent = document.getElementById('articleContent');
    commentText = document.getElementById('commentText');
    submitComment = document.getElementById('submitComment');
    commentsList = document.getElementById('commentsList');
    
    loadArticles();
    setupEventListeners();
    initializeLanguage(); // 初始化語言設置（包含URL參數檢測）
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
    // 檢查articlesGrid是否存在（只在index.html中存在）
    if (!articlesGrid) {
        return;
    }
    
    let filteredArticles = articles;
    
    // 應用分類篩選
    if (currentFilter !== 'all') {
        filteredArticles = filteredArticles.filter(article => 
            article.category === currentFilter
        );
    }
    
    // 應用搜尋篩選
    if (currentSearchTerm) {
        filteredArticles = filteredArticles.filter(article => {
            // 獲取當前語言的文章內容
            const currentLangContent = article.multilingual && article.multilingual[currentLanguage] 
                ? article.multilingual[currentLanguage] 
                : article.multilingual.tw; // 預設使用繁體中文
            
            const title = currentLangContent.title || '';
            const excerpt = currentLangContent.excerpt || '';
            const tags = currentLangContent.tags || [];
            
            return title.toLowerCase().includes(currentSearchTerm) ||
                   excerpt.toLowerCase().includes(currentSearchTerm) ||
                   tags.some(tag => tag.toLowerCase().includes(currentSearchTerm));
        });
    }
    
    // 清空文章網格
    articlesGrid.innerHTML = '';
    
    // 如果沒有找到文章
    if (filteredArticles.length === 0) {
        const noArticlesText = translations[currentLanguage]['No articles found'] || '沒有找到符合條件的文章';
        articlesGrid.innerHTML = `
            <div class="no-articles">
                <p>${noArticlesText}</p>
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
 * 生成URL slug（使用底線作為分隔符）
 * @param {string} title - 文章標題
 * @returns {string} - URL slug
 */
function generateUrlSlug(title) {
    return title.toLowerCase()
        .replace(/[^\w\s-]/g, '') // 移除特殊字符
        .replace(/[\s_-]+/g, '_') // 將空格、底線、連字號統一替換為底線
        .replace(/^_+|_+$/g, ''); // 移除開頭和結尾的底線
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
    const englishTitles = {
        1: "fortune-god-beside-you",
        2: "ai-industry-investment-trends", 
        3: "tech-stock-investment-strategy"
    };
    const englishSlug = englishTitles[article.id] || generateUrlSlug(article.title);
    
    return `/${categorySlug}/${englishSlug}-${article.id}-${language}`;
}

/**
 * 創建文章卡片
 */
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'article-card';
    
    // 獲取當前語言的文章內容
    const currentLangContent = article.multilingual && article.multilingual[currentLanguage] 
        ? article.multilingual[currentLanguage] 
        : article.multilingual.tw; // 預設使用繁體中文
    
    const title = currentLangContent.title || '';
    const excerpt = currentLangContent.excerpt || '';
    const tags = currentLangContent.tags || [];
    
    // 使用舊格式URL確保連結正常工作，文章頁面載入後會更新為新格式
    const articleUrl = `article.html?id=${article.id}&lang=${currentLanguage}`;
    
    // 獲取翻譯文字
    const readMoreText = translations[currentLanguage]['Read More'] || '閱讀更多';
    const shareText = translations[currentLanguage]['Share'] || '分享';
    
    card.innerHTML = `
        <div class="article-meta">
            <span class="article-category ${article.category}">${getCategoryName(article.category)}</span>
            <time class="article-date">${formatDate(article.date)}</time>
        </div>
        <h2 class="article-title">
            <a href="${articleUrl}" class="article-link">${title}</a>
        </h2>
        <p class="article-excerpt">${excerpt}</p>
        <div class="article-tags">
            ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="article-actions">
            <a href="${articleUrl}" class="read-more-btn">
                ${readMoreText}
            </a>
            <button class="share-btn" onclick="shareArticle(${article.id})">
                <i class="fas fa-share-alt"></i>
                ${shareText}
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
    
    // 添加載入狀態到所有語言按鈕
    const allLangButtons = document.querySelectorAll('.lang-btn');
    allLangButtons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.7';
        // 添加載入動畫
        if (btn === e.target) {
            btn.innerHTML = '<span class="loading-spinner">⟳</span>';
        }
    });
    
    // 添加平滑過渡效果
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = '0.8';
        mainContent.style.transition = 'opacity 0.3s ease';
    }
    
    // 使用 setTimeout 來創建平滑的切換體驗
    setTimeout(() => {
        // 更新按鈕狀態
        allLangButtons.forEach(btn => {
            btn.classList.remove('active');
            // 恢復按鈕原始文本
            const lang = btn.getAttribute('data-lang');
            const langTexts = {
                'tw': '繁',
                'cn': '简',
                'en': 'EN',
                'jp': '日'
            };
            btn.innerHTML = langTexts[lang] || lang.toUpperCase();
        });
        e.target.classList.add('active');
        
        // 更新當前語言
        currentLanguage = targetLang;
        
        // 保存語言偏好到 localStorage
        localStorage.setItem('preferredLanguage', currentLanguage);
        
        // 更新URL以反映語言變更 - 使用新的多語言格式
        const newUrl = `/home/${currentLanguage}`;
        window.history.pushState({}, '', newUrl);
        
        // 更新界面語言
        updateLanguage();
        
        // 重新渲染文章和分類
        renderArticles();
        renderCategories();
        
        // 恢復所有按鈕狀態
        allLangButtons.forEach(btn => {
            btn.disabled = false;
            btn.style.opacity = '1';
        });
        
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
    
    // 支援所有四種語言的反饋訊息
    const feedbackMessages = {
        'tw': '已切換至繁體中文',
        'cn': '已切换至简体中文',
        'en': 'Switched to English',
        'jp': '日本語に切り替えました'
    };
    
    feedback.textContent = feedbackMessages[targetLang] || `Switched to ${targetLang.toUpperCase()}`;
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