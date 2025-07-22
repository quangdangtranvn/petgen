const payload = {
  wallet: "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638",
  contractType: "trader-glowing",
  filter: "highest_value"
};

Apax.post("https://wallet.kesug.com/go/bot", payload)
  .then((res) => {
    console.log("Gửi dữ liệu xong cho boss autobot PetGen Trader", res.status);
  })
  .catch((err) => {
    console.error("Bot hiện quá tải cần kiểm tra đúng message", err);
  });
  function loadLang(fileName) {
  fetch(`/gtx-lang/${fileName}`)
    .then(res => res.text())
    .then(content => {
      // Parse nội dung lang
      const lines = content.split('\n');
      lines.forEach(line => {
        if (line.startsWith('🧿')) {
          document.getElementById('lang-output').innerHTML += `<p>${line}</p>`;
        }
      });
    });
}
  loadLang("sibs-only.lang");
 const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 5005;

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

async function generateNhac(inputPath, voiceStyle) {
  const outputFile = `nhac-${Date.now()}.mp3`;
  const outputPath = path.join(__dirname, 'nhac_storage', outputFile);
  fs.copyFileSync(inputPath, outputPath);
  return outputFile;
}

app.post('/petgen/stream', upload.single('input'), async (req, res) => {
  const voiceStyle = req.body.voice || 'yosinaYouth';
  const nhacFile = await generateNhac(req.file.path, voiceStyle);
  res.json({ url: `/app?file=${nhacFile}` });
});

app.get('/app', (req, res) => {
  const filePath = path.join(__dirname, 'nhac_storage', req.query.file);
  if (fs.existsSync(filePath)) {
    res.set('Content-Type', 'audio/mpeg');
    res.sendFile(filePath);
  } else {
    res.status(404).send('KhÃ´ng tÃ¬m tháº¥y file .nhac');
  }
});

app.listen(PORT, () => {
  console.log(`ðŸš€ PetGen REST5 cháº¡y táº¡i http://localhost:${PORT}`);
});
//  rest5.js for .lang .nhac .ip
import {
    processLangFile,
    processNhacFile,
    processIpContent,
    processIniFile
} from './parse.js';

import Rest5Config from './rest5.config.js';

const defaultParsers = {
    processLangFile,
    processNhacFile,
    processIpContent,
    processIniFile
};

//  Gi lnh x lý úng theo uôi file
function callDefaultParser(fileType, fileData) {
    const methodName = Rest5Config.neededCalls[fileType];
    const parserFn = defaultParsers[methodName];
    
    if (typeof parserFn === 'function') {
        parserFn(fileData);
    } else {
        console.warn(` Không tìm thy hàm x lý cho loi ${fileType}`);
    }
}

import JSZip from 'jszip';

//  Hàm fetch và x lý file .lang
function fetchLangFile(fileUrl) {
    return fetch(fileUrl)
        .then(response => {
            if (!response.ok) throw new Error(`Không th ti: ${fileUrl}`);
            return response.text();
        })
        .then(langContent => {
            console.log(` Ti .lang: ${fileUrl}`);
            processLangFile(langContent); //  nh ngha riêng ti ni s dng
        })
        .catch(error => console.error(` Li: ${fileUrl}`, error));
}

//  Hàm scan và gi fetch cho .lang
function loadAllLangFiles(fileUrls) {
    fileUrls.forEach(url => {
        if (url.endsWith('.lang')) {
            fetchLangFile(url);
        }
    });
}

//  X lý file .nhac và .ip
function resolveAndCatalog(fileUrl) {
    const fileName = fileUrl.split('/').pop();
    const fileType = fileName.split('.').pop().toLowerCase();

    if (fileType === 'nhac') {
        return fetch(fileUrl)
            .then(res => res.text())
            .then(content => {
                console.log(` ã ti: ${fileName}`);
                catalogFile(fileName, 'nhac', content.length + ' ký t');
            });
    } else if (fileType === 'ip') {
        return fetch(fileUrl)
            .then(res => res.arrayBuffer())
            .then(data => JSZip.loadAsync(data))
            .then(zip => {
                const list = Object.keys(zip.files);
                console.log(` Gii nén: ${fileName}`);
                catalogFile(fileName, 'ip', list.join(', '));
            });
    } else {
        console.warn(` Không h tr: ${fileName}`);
    }
}

//  Gi x lý toàn b file trong cloud
function resolveAllCloudFiles(fileUrls) {
    fileUrls.forEach(url => {
        if (url.endsWith('.nhac') || url.endsWith('.ip')) {
            resolveAndCatalog(url);
        }
    });
}

//  Lu thông tin file v console hoc push ra UI
function catalogFile(name, type, detail) {
    const entry = {
        name,
        type,
        detail,
        timestamp: new Date().toISOString()
    };
    console.table(entry);
}

//  Export tt c
export {
	processLangFile,
    processNhacFile,
    processIpContent,
    processIniFile,
    fetchLangFile,
    loadAllLangFiles,
    resolveAndCatalog,
    resolveAllCloudFiles
};