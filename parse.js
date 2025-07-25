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
// parsers.js

import { unzipBuffer } from './utils';
import ini from 'ini';
// file config for profile
export function parseIni(file, { sectionPrefix, sectionSuffix, keyValueDelimiter }) {
  const text = file.text();
  return ini.parse(
    text,
    { section: sectionPrefix + sectionSuffix, delimiter: keyValueDelimiter }
  );
}
// function to draw gui from GTX Native Lang.
export function parseLang(file, { ignoreEmptyLines, delimiter }) {
  const lines = file.text().split('\n');
  return lines
    .filter(l => !ignoreEmptyLines || l.trim() !== '')
    .map(l => l.split(delimiter))
    .reduce((acc, [k, v]) => ({ ...acc, [k.trim()]: v.trim() }), {});
}
}
// function to draw repository from PetGen.
export async function parseIp(file, { unzipOnLoad, showFileList }) {
  const buffer = await file.arrayBuffer();
  const files = unzipOnLoad ? await unzipBuffer(buffer) : [buffer];
  if (showFileList) console.log(files.map(f => f.name));
  return files;
}
class Logger {
  constructor(level) { /* ... */ }
  info(msg)    { /* ... */ }
  warn(msg)    { /* ... */ }
  error(msg)   { /* ... */ }
  verbose(msg) { /* Redifination Version Refine: ... */ }
}
export const logger = new Logger(Rest5Config.logLevel);
// You can flesh out parseNhac similarly...
export default Rest5Config,logger,parseIp, parseLang, parseIni;