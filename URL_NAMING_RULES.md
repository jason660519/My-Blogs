# URL 命名規則

## 專案目錄結構
```
Jason Blog/
├── content/
│   ├── tw/          # 繁體中文
│   ├── cn/          # 簡體中文  
│   ├── en/          # 英文
│   └── jp/          # 日文
├── index.html       # 首頁
├── article.html     # 文章頁面
├── script.js        # 主要邏輯
├── article.js       # 文章邏輯
└── server.py        # 伺服器

## 統一URL格式

### 目標格式 (新格式，逐步遷移中)
- **首頁**: `/` 或 `/home/[語言代碼]`
- **文章**: `/articles/[語言]/[分類]/[標題]/[ID]`

### 當前格式 (舊格式，保持向下相容)
- **首頁**: `/` 或 `/home/[語言代碼]`  
- **文章**: `/[分類]/[標題]-[ID]-[語言]`

### 漸進式升級策略
1. **階段一**: 保持舊格式運作，新增新格式支援
2. **階段二**: 前端優先使用新格式，保留舊格式重定向
3. **階段三**: 完全遷移至新格式（未來規劃）

## URL 格式規範

### 當前實作狀況
- **實際使用**: 舊格式 `/[分類]/[標題]-[ID]-[語言]`
- **目標格式**: 新格式 `/articles/[語言]/[分類]/[標題]/[ID]`
- **相容性**: 兩種格式並存，逐步遷移

### 格式對比範例
| 項目 | 舊格式 | 新格式 |
|------|--------|--------|
| 首頁 | `/home/tw` | `/home/tw` |
| 文章 | `/investment/fortune-god-beside-you-1-tw` | `/articles/tw/investment/fortune-god-beside-you/1` |

### 統一URL格式 (新版本)
```
http://localhost:8000/articles/[語言代碼]/[分類]/[英文標題slug]/[文章ID]
```

### 舊版URL格式 (向下相容)
```
http://localhost:8000/[分類]/[英文標題slug]-[文章ID]-[語言代碼]
```

### 語言代碼對應表
- `tw` - 正體中文 (Traditional Chinese)
- `cn` - 簡體中文 (Simplified Chinese) 
- `en` - 英文 (English)
- `jp` - 日文 (Japanese)

### URL範例

#### 文章頁面URL (新格式)
同一篇文章（ID: 1）在不同語言版本的URL：

- 英文版: `http://localhost:8000/articles/en/investment/fortune-god-beside-you/1`
- 正體中文版: `http://localhost:8000/articles/tw/investment/fortune-god-beside-you/1`
- 簡體中文版: `http://localhost:8000/articles/cn/investment/fortune-god-beside-you/1`
- 日文版: `http://localhost:8000/articles/jp/investment/fortune-god-beside-you/1`

#### 文章頁面URL (舊格式 - 向下相容)
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

### 檔案路徑和命名格式 (新版本 - 建議)
```
content/[語言代碼]/[分類]_[英文標題slug]_[文章ID].md
```

### 檔案路徑和命名格式 (舊版本 - 向下相容)
```
content/[語言代碼]/[分類]_[英文標題slug]_[文章ID]_[該語言標題].md
```

### 檔案命名範例 (新格式)
同一篇文章（ID: 1）在不同語言版本的檔案路徑：

- 英文版: `content/en/investment_fortune-god-beside-you_1.md`
- 正體中文版: `content/tw/investment_fortune-god-beside-you_1.md`
- 簡體中文版: `content/cn/investment_fortune-god-beside-you_1.md`
- 日文版: `content/jp/investment_fortune-god-beside-you_1.md`

### 檔案命名範例 (舊格式 - 向下相容)
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

### 1. URL生成 (新版本)
- 使用統一格式：`/articles/[語言代碼]/[分類]/[英文標題slug]/[文章ID]`
- 所有語言版本使用相同的英文標題slug
- 語言代碼放在URL前段，便於路由處理
- 確保SEO友好和國際化支援
- 支援舊格式URL的自動重定向

### 2. 檔案管理 (新版本)
- 建議使用簡化檔案名：`[分類]_[英文標題slug]_[文章ID].md`
- 移除檔案名中的語言標題部分，減少檔案名複雜度
- 透過資料夾結構區分語言版本
- 支援舊格式檔案的向下相容
- 便於檔案管理和自動化處理

### 3. 語言切換
- 首頁：用戶可以通過 `/home/[language]` 格式切換語言
- 文章頁：用戶可以通過更改URL中的語言代碼來切換語言
- 新格式：`/articles/tw/investment/fortune-god-beside-you/1` → `/articles/en/investment/fortune-god-beside-you/1`
- 保持相同的文章內容，只改變語言
- 提供一致的用戶體驗
- 支援瀏覽器前進/後退按鈕操作

### 4. 路由系統
- 後端支援 `/home/[language]` 路由重寫為 `/index.html?lang=[language]`
- 後端支援 `/articles/[language]/[category]/[slug]/[id]` 路由重寫
- 前端JavaScript自動處理URL格式轉換
- 支援舊格式URL的自動升級和重定向
- 維持SEO友好的URL結構
- 提供向下相容性確保現有連結正常運作

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

### URL格式轉換和向下相容性
- **新格式 (建議)**：`/articles/[語言代碼]/[分類]/[英文標題slug]/[文章ID]`
- **舊格式 (相容)**：`/[分類]/[英文標題slug]-[文章ID]-[語言代碼]`
- 系統應同時支援兩種格式，並自動將舊格式重定向到新格式
- 確保現有書籤和外部連結不會失效

### 格式分離原則
- **URL格式**：使用連字符 `-` 分隔，符合SEO最佳實務
- **檔案命名**：使用底線 `_` 分隔，便於檔案系統管理
- **新格式範例對照**：
  - URL：`/articles/tw/investment/fortune-god-beside-you/1`
  - 檔案：`content/tw/investment_fortune-god-beside-you_1.md`
- **舊格式範例對照**：
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

### 現有檔案遷移指南
#### 階段性遷移策略
1. **第一階段**：保持現有檔案不變，確保向下相容性
2. **第二階段**：逐步重新命名檔案，移除檔案名中的語言標題部分
3. **第三階段**：更新JavaScript路由邏輯以支援新URL格式

#### 具體遷移步驟
1. **檔案重新命名**：
   - 從：`investment_fortune-god-beside-you_1_財神爺就在你身邊.md`
   - 到：`investment_fortune-god-beside-you_1.md`

2. **URL路由更新**：
   - 更新 `generateArticleUrl` 函數以支援新格式
   - 更新 `parseArticleUrl` 函數以同時支援新舊格式
   - 新增URL重定向邏輯

3. **測試驗證**：
   - 確保舊URL仍能正常訪問
   - 驗證新URL格式正確運作
   - 測試語言切換功能