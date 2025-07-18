const Rest5Config = {
    cloudScanEnabled: true,             // ✅ Bật quét file từ cloud
    supportedExtensions: ['lang', 'nhac', 'ip', 'ini'],
    autoProcess: true,                  // 📦 Tự động gọi hàm xử lý sau khi tải
    logLevel: 'verbose',               // 🪵 verbose | minimal | silent
    catalogStorage: 'memory',          // 🗂 memory | localStorage | remote
    iniParser: {
        sectionPrefix: '[',            // 🔧 Có thể tuỳ chỉnh dấu hiệu section
        sectionSuffix: ']',
        keyValueDelimiter: '='
    },
    nhacSettings: {
        previewLength: 100,            // 🎶 Phân tích preview đoạn đầu
        autoTagging: false             // 🏷️ Nếu cần gắn tag theo content
    },
    ipSettings: {
        unzipOnLoad: true,             // 📂 Giải nén sau khi tải
        showFileList: true
    },
    langSettings: {
        ignoreEmptyLines: true,
        delimiter: '='
    }
};

export default Rest5Config;