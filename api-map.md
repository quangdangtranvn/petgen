# 🗺️ API Map · PetGen Cipher Web4 Launcher Flow

---
link zip kit:
https://drive.google.com/file/d/1-nGhdQDRp_rJUFj588IBrkYhUfETeDhz/view?usp=drivesdk

## 🔁 Dòng dữ liệu mint

1. Người dùng nhập prompt → `launchAI()` gọi session & log
2. Gửi dữ liệu JSON → `webhook/index.php`
3. Nếu lỗi → gọi `fallbackWebhook`
4. Log lưu file `mint-history.txt`
5. Session lưu bởi `re-session.js`

