# PROMPT
請建立一個 index.html , 可將 wy課表_星期一.html wy課表_星期二.html jn課表_星期五.html st課表_星期四.html 各科段考考程表.html 整理成一個網頁首頁。 
此工具必須可以直接以本機 HTML 或 localhost 開啟使用。 

# 20260632
## 1.倒數計時現在位置偏右, 請調整到中間 ; 2.說明做那些更改。
## 🛠️ 做了哪些更改？
原本的位置偏右是因為 .timer-section 使用了 justify-content: space-around;，且三個子元件沒有設定固定或對稱的寬度。當「左側狀態文字」太長時，就會把中間的「倒數計時」硬生生往右推。

為了保證不論左邊、右邊字數如何變化，倒數計時都能精準鎖定在螢幕正中央，我做了以下調整：

結構拆分為三等份 (HTML 調整)：
在 .timer-section 內包覆了三個全新的獨立容器（timer-section-left、timer-section-center、timer-section-right），將狀態文字、倒數數字、現在時間分開。

啟用彈性等寬分配 (CSS flex: 1)：
為這三個新容器都加上了 flex: 1; 屬性。這樣一來，瀏覽器會強行將主看板的寬度完美對半平分成 3 個 33.3% 的區塊。

文字對齊定錨 (Text Alignment)：

左區塊： 設定 text-align: left;，讓狀態文字規矩地靠左對齊。

中區塊 (倒數計時)： 設定 text-align: center;。因為外層容器已經是絕對置中的 1/3 區塊，裡面的 #timer 就會永遠完美鎖定在網頁正中央。

右區塊： 設定 text-align: right;，讓現在時間漂亮地靠右貼齊。