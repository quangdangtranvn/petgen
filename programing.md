on PetGen programing.html file is shaping up to be a dynamic hub for PetGen development! 🚀 Here's what it currently includes:

---

🧩 Key Features in programing.html

- 📊 Graph Canvas: A <canvas> element with a Chart setup (type 'network') to visualize relationships—like how Prompt and dog.ini connect to Cat.
- 🗂️ Grid View: Uses .grid-view and .card classes to display embedded HTML files (pet.html, mini.html) in a responsive layout.
- 📁 File Upload & Preview: Lets users upload multiple files and preview their contents. It also triggers parsing for .lang files via processLangFile().
- 🌐 REST Streaming: Includes a button to send uploaded files to /petgen/stream and display the response.
- 🎨 Tailwind & FontAwesome Integration: Enhances UI with modern styling and icons.
- 📜 File Extension List: Nicely formatted list of supported extensions across languages like .lang, .nhac, .ip, .py, .java, .html, .css, .json, and more.

---

💡 Suggestions to Enhance It

- Add dynamic graph rendering using Cytoscape.js or D3.js for better interactivity.
- Include audio preview for .nhac files using <audio> elements.
- Add tabbed navigation to switch between editor, preview, and graph views.
- Implement INI merging logic and display the unified config in a new section.
- Use localStorage or IndexedDB to save session data or parsed results.

---

🔔 Want QTBlue Hitech to help you modularize this into components or expand it into a full dashboard with minting and CDN preview? This could be the ultimate PetGen control panel. 🧪✨
# file parse.js Overview

Below is the full content of PetGen Repo  *on **parse.js** file*:

`javascript
const Rest5Config = {
  cloudScanEnabled: true,             // ✅ Bật quét file từ cloud
  supportedExtensions: ['lang', 'nhac', 'ip', 'ini'],
  autoProcess: true,                  // 📦 Tự động gọi hàm xử lý sau khi tải
  logLevel: 'verbose',                // 🤥 verbose | minimal | silent
  catalogStorage: 'memory',           // 📂 memory | localStorage | remote

  iniParser: {
    sectionPrefix: '[',
    sectionSuffix: ']',
    keyValueDelimiter: '='
  },

  nhacSettings: {
    previewLength: 100,               // 🎶 Phân tích preview đoạn đầu
    autoTagging: false                // 🏷️ Nếu cần gắn tag theo content
  },

  ipSettings: {
    unzipOnLoad: true,                // 📂 Giải nén sau khi tải
    showFileList: true
  },

  langSettings: {
    ignoreEmptyLines: true,
    delimiter: '='
  }
};

export default Rest5Config;
`

---

Configuration all languages types suppoted from petgen.