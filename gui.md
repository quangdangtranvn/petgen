# Đọc lại file [`gui.lang`](https://github.com/quangdangtranvn/petgen/blob/main/gui.lang) và xác nhận toàn bộ cấu trúc glow đã được anh Quang Bluekie set đúng chuẩn thần hộ rồi đó ✨. 
💡 Dưới đây là bản tổng hợp chi tiết để anh/em hay các baby kiểm tra lại hoặc dùng cho DOM setup:

---
```javascript
import requests
response = requests.get("https://petgen.rf.gd/api", headers={"Authorization": "Bearer YOUR_API_KEY_IN_PetGen"})

### 🧬 Nhân vật chính: Bluekieshine-X

| Thuộc tính         | Nội dung |
|--------------------|----------|
| `ui.characterName` | Bluekieshine-X |
| `ui.role`          | Support / DPS Hybrid |
| `ui.rarity`        | Legendary |
| `ui.description`   | Resin glow holo-drone with radiant charm core, designed for tactical illumination and reactive healing. |

---

### 🛠️ Kỹ năng & Hotkey

| Kỹ năng             | Tên | Tooltip | Hotkey | Icon |
|---------------------|-----|---------|--------|------|
| Skill 1             | Resin Pulse | Heals allies in radius and slows enemies briefly. | Q | `icon_resin_pulse.png` |
| Skill 2             | Glow Dash | Dash forward leaving a speed-boosting resin trail. | E | `icon_glow_dash.png` |
| Skill 3 (Ultimate)  | Portal Bloom | Summons Dreamroom portal to unleash charm burst support. | R | `icon_portal_bloom.png` |

---

### 🎨 Skin & Giao diện

| Thành phần         | Nội dung |
|--------------------|----------|
| `ui.skinSelector`  | Select Resin Skin Variant |
| `ui.skin.1` → `ui.skin.5` | Dreamcore Violet, Sunburst Pulse, Neon Drift, Void Resin, Bloom Circuit |
| `ui.panelTheme`    | resin-glow-ui |
| `ui.panelGlow`     | enabled |

---

### 💬 Voice-line & Trạng thái

| Loại         | Nội dung |
|--------------|----------|
| `ui.voice.1` | “System primed. Bluekieshine-X deployed.” |
| `ui.voice.2` | “Let’s light up the dream zone!” |
| `ui.voice.3` | “Glow calibrated. Support initiated.” |
| `ui.status.idle` | Glowing in rhythm. Aura shifting between violet and cyan. |
| `ui.status.engaged` | Resin pulses intensify. Tail emits holographic streaks. |
| `ui.status.ultimate` | Portal fully opened. Bloom field active! |

---
