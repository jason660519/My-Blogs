# Jason Blog - URL 和檔案命名規則

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
同一篇文章（ID: 1）在不同語言版本的URL：

- 英文版: `http://localhost:8000/investment/fortune-god-is-right-beside-you-1-en`
- 正體中文版: `http://localhost:8000/investment/fortune-god-is-right-beside-you-1-tw`
- 簡體中文版: `http://localhost:8000/investment/fortune-god-is-right-beside-you-1-cn`
- 日文版: `http://localhost:8000/investment/fortune-god-is-right-beside-you-1-jp`

## MD檔案命名規範

### 檔案命名格式
```
[分類]-[英文標題slug]-[文章ID]-[語言代碼]-[該語言標題].md
```

### 檔案命名範例
同一篇文章（ID: 1）在不同語言版本的檔案名：

- 英文版: `investment-fortune-god-is-right-beside-you-1-en-Fortune God is Right Beside You.md`
- 正體中文版: `investment-fortune-god-is-right-beside-you-1-tw-財神爺就在你身邊.md`
- 簡體中文版: `investment-fortune-god-is-right-beside-you-1-cn-财神爷就在你身边.md`
- 日文版: `investment-fortune-god-is-right-beside-you-1-jp-幸運の神はあなたのそばに.md`

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
- 用戶可以通過更改URL中的語言代碼來切換語言
- 保持相同的文章內容，只改變語言
- 提供一致的用戶體驗

## 首頁多語言 URL 規範

### 首頁 URL 格式
```
/home/[language]
```

### 支援的首頁語言版本
- **英文版首頁**: `/home/en`
- **正體中文版首頁**: `/home/tw`
- **簡體中文版首頁**: `/home/cn`
- **日文版首頁**: `/home/jp`

### 語言自動檢測規則
1. 系統自動檢測用戶瀏覽器的語言設置
2. 根據檢測結果導向對應的語言版本首頁
3. 若瀏覽器語言未匹配任何支援語言，預設使用英文版首頁
4. 支援的瀏覽器語言映射：
   - `zh-TW`, `zh-Hant` → `/home/tw`
   - `zh-CN`, `zh-Hans` → `/home/cn`
   - `ja`, `ja-JP` → `/home/jp`
   - 其他語言 → `/home/en`

## 重要注意事項

### Slug 生成規則
- 只允許英文字母、數字、空格和連字符
- 自動轉換為小寫
- 空格替換為連字符
- 移除特殊字符和表情符號

### 語言代碼一致性
- 所有系統組件必須使用相同的語言代碼
- 確保 JavaScript、HTML 和後端代碼的一致性

### 向後兼容性
- 保持對舊 URL 格式的支援
- 實現適當的重定向機制