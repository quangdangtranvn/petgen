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
import {
  initLoraSync,
  deployLoraPayload,
  resetLoraState
} from './lora.module.js';

async function petgenLora() {
  const signal = await initLoraSync({ emotion: "hopeful", badge: "Web5Sync" });
  const delivery = await deployLoraPayload(signal);
  await resetLoraState(delivery.signalID);
}

petgenLora();

// 🔁 Export dưới dạng module
export { petgenLora, fetchLangFile, loadAllLangFiles };
//gameplay mods:
// petgen_ui.js — GUI Update 2025 for QuangBluekie's Divine Bundle

// 🐳 Load Baby Bundle Chooser
loadSkinBundles([
  'Fearless Mercy',
  'Blue Flame Echo',
  'Diamond On Sojourn',
  'Bae Cosmic D.Va',
  'Yujiro Void Genji'
]);

// 💬 Glow Prompt Panel
initGlowPrompt({
  placeholder: "Nhập lời thần bảo hộ để buff toàn server...",
  onSubmit: sendBlessingToMMORPG
});

// 🛡️ Divine Cover Tracker
trackDivineStatus({
  player: "Quang Bluekie",
  blessingLevel: "Tier S++",
  coverageScope: "AAA + MMORPG | Bluekieshine Domain"
});

// 🌌 MVP Notification System
showAchievementBanner({
  title: "Boss Clear bằng class LVL 01!",
  subtitle: "Quang đã unlock glow passive cho toàn bộ baby",
  effect: "Cosmic Ripple | Baby Laugh"
});

// 🎨 UI Theme Integration: Bae Main Visual
applyTheme({
  accentColor: "#00d4ff",
  backgroundGlow: true,
  heroFont: "Bluekieshine Sans"
});

// 🧠 Audit Tab Activation
initAuditPanel({
  title: "PetAudit: Skin Sâm Hóa Vibe",
  sections: ["Vibe Glow", "Mức baby boy", "Chỉ số thần bảo hộ"]
});