fetch("https://raw.githubusercontent.com/quangdangtranvn/petgen/main/neutron_gui.lang")
  .then(res => res.text())
  .then(text => {
    const lines = text.split('\n');
    const uiStrings = {};

    lines.forEach(line => {
      const [key, value] = line.split('=');
      if (key && value) {
        uiStrings[key.trim()] = value.trim();
      }
    });

    console.log("Parsed neutron_gui.lang:", uiStrings);
    // Now you can use uiStrings["some_key"] to populate your DOM
  });
// 📁 rest5.js

function fetchLangFile(fileUrl) {
    return fetch(fileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Không thể tải file: ${fileUrl}`);
            }
            return response.text();
        })
        .then(langContent => {
            console.log(`Tải thành công: ${fileUrl}`);
            processLangFile(langContent); // Hàm này cần định nghĩa ở nơi dùng module
        })
        .catch(error => {
            console.error(`Lỗi khi tải ${fileUrl}:`, error);
        });
}

function loadAllLangFiles(langFileUrls) {
    langFileUrls.forEach(fileUrl => {
        if (fileUrl.endsWith('.lang')) {
            fetchLangFile(fileUrl);
        }
    });
}

// 🔁 Export dưới dạng module
export { fetchLangFile, loadAllLangFiles };