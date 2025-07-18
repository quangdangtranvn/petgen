const Rest5Config = {
    cloudScanEnabled: true,
    supportedExtensions: ['lang', 'nhac', 'ip', 'ini'],
    autoProcess: true,
    logLevel: 'verbose',
    catalogStorage: 'memory',

    // 🔧 Cấu hình phân tích file theo loại
    iniParser: {
        sectionPrefix: '[',
        sectionSuffix: ']',
        keyValueDelimiter: '='
    },
    nhacSettings: {
        previewLength: 100,
        autoTagging: false
    },
    ipSettings: {
        unzipOnLoad: true,
        showFileList: true
    },
    langSettings: {
        ignoreEmptyLines: true,
        delimiter: '='
    },

    // ⚡ Lệnh gọi cần thiết khi tải file xong
    neededCalls: {
        lang: 'processLangFile',
        nhac: 'processNhacFile',
        ip: 'processIpContent',
        ini: 'processIniFile'
    }
};

export default Rest5Config;