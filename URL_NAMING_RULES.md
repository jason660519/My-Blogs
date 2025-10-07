# Jason Blog - URL 和檔案命名規則

## 專案目錄結構

### 內容檔案組織
```
Jason Blog/
├── content/
│   ├── en/          # 英文內容
│   ├── tw/          # 正體中文內容
│   ├── cn/          # 簡體中文內容
│   └── jp/          # 日文內容
├── admin.html
├── index.html
└── ...其他檔案
```

## URL 格式規範

### 統一URL格式
```
http://localhost:8000/[分類]/[英文標題slug]-[文章ID]-[語言代碼]
```

### 語言代碼對應表
- `tw` - 正體中文 (Traditional Chinese)
- `cn` - 簡體中文 (Simplified Chinese) 
- `en` - 英文 (English)
- `jp` - 日文 (Japanese)

### URL範例

#### 文章頁面URL
同一篇文章（ID: 1）在不同語言版本的URL：

- 英文版: `http://localhost:8000/investment/fortune-god-beside-you-1-en`
- 正體中文版: `http://localhost:8000/investment/fortune-god-beside-you-1-tw`
- 簡體中文版: `http://localhost:8000/investment/fortune-god-beside-you-1-cn`
- 日文版: `http://localhost:8000/investment/fortune-god-beside-you-1-jp`

#### 首頁URL
不同語言版本的首頁URL：

- 英文版首頁: `http://localhost:8000/home/en`
- 正體中文版首頁: `http://localhost:8000/home/tw`
- 簡體中文版首頁: `http://localhost:8000/home/cn`
- 日文版首頁: `http://localhost:8000/home/jp`
- 自動檢測首頁: `http://localhost:8000/` (重定向到對應語言版本)

## MD檔案命名規範

### 檔案路徑和命名格式
```
content/[語言代碼]/[分類]_[英文標題slug]_[文章ID]_[該語言標題].md
```

### 檔案命名範例
同一篇文章（ID: 1）在不同語言版本的檔案路徑：

- 英文版: `content/en/investment_fortune-god-beside-you_1_Fortune God Beside You.md`
- 正體中文版: `content/tw/investment_fortune-god-beside-you_1_財神爺就在你身邊.md`
- 簡體中文版: `content/cn/investment_fortune-god-beside-you_1_财神爷就在你身边.md`
- 日文版: `content/jp/investment_fortune-god-beside-you_1_幸運の神はあなたのそばに.md`

## 分類對應表

### 英文分類slug
- `investment` - 投資理財
- `ai` - 人工智慧
- `tech` - 科技趨勢
- `marketing` - 數位行銷

## 實作規則

### 1. URL生成
- 所有語言版本使用相同的英文標題slug
- 只有語言代碼不同
- 確保SEO友好和國際化支援

### 2. 檔案管理
- MD檔案包含該語言的完整標題
- 便於檔案管理和識別
- 支援多語言內容管理

### 3. 語言切換
- 首頁：用戶可以通過 `/home/[language]` 格式切換語言
- 文章頁：用戶可以通過更改URL中的語言代碼來切換語言
- 保持相同的文章內容，只改變語言
- 提供一致的用戶體驗
- 支援瀏覽器前進/後退按鈕操作

### 4. 路由系統
- 後端支援 `/home/[language]` 路由重寫為 `/index.html?lang=[language]`
- 前端JavaScript自動處理URL格式轉換
- 支援舊格式URL的自動升級
- 維持SEO友好的URL結構

## 首頁多語言 URL 規範

### 首頁 URL 格式
```
/home/[language_code]
```

### 支援的首頁語言版本
- **英文版首頁**: `http://localhost:8000/home/en`
- **正體中文版首頁**: `http://localhost:8000/home/tw`
- **簡體中文版首頁**: `http://localhost:8000/home/cn`
- **日文版首頁**: `http://localhost:8000/home/jp`
- **預設首頁**: `/` (自動檢測語言並重定向)

### 語言自動檢測規則
1. 訪問根路徑 `/` 時，系統自動檢測用戶瀏覽器的 `Accept-Language` 標頭
2. 根據檢測結果重寫為 `/index.html?lang=[detected_language]` 格式
3. 若瀏覽器語言未匹配任何支援語言，預設使用正體中文版 (tw)
4. 支援的瀏覽器語言映射：
   - `zh-tw`, `zh-hk`, `zh-mo`, `zh` → `tw` (正體中文)
   - `zh-cn`, `zh-sg` → `cn` (簡體中文)
   - `ja`, `ja-jp` → `jp` (日文)
   - `en`, `en-us`, `en-gb` → `en` (英文)
   - 其他語言 → `tw` (預設正體中文)

### 路由重寫機制
- `/home/[language]` → `/index.html?lang=[language]`
- 支援的語言：`tw`, `en`, `cn`, `jp`
- 不支援的語言會重定向到預設語言 (tw)

## 重要注意事項

### 格式分離原則
- **URL格式**：使用連字符 `-` 分隔，符合SEO最佳實務
- **檔案命名**：使用底線 `_` 分隔，便於檔案系統管理
- **範例對照**：
  - URL：`/investment/fortune-god-beside-you-1-tw`
  - 檔案：`content/tw/investment_fortune-god-beside-you_1_財神爺就在你身邊.md`

### Slug 生成規則
- 只允許英文字母、數字和連字符
- 自動轉換為小寫
- 空格替換為連字符
- 移除特殊字符和表情符號
- URL中使用連字符 `-` 作為分隔符
- 檔案名稱使用底線 `_` 作為分隔符

### 檔案管理規則
- 所有 Markdown 檔案必須放在 `content/[語言代碼]/` 目錄下
- 檔案名使用底線 `_` 分隔各個部分
- 保持檔案名與 URL 的一致性
- 支援中文檔案名，但建議英文 slug 保持英文

### 語言代碼一致性
- 所有系統組件必須使用相同的語言代碼
- 確保 JavaScript、HTML 和後端代碼的一致性
- URL 參數、檔案路徑、內容目錄都使用相同的語言代碼

### 現有檔案遷移
- 將現有的 Markdown 檔案移動到對應的 `content/[語言代碼]/` 目錄
- 重新命名檔案以符合新的命名規範
- 更新相關的 JavaScript 路由和連結