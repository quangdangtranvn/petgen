Nội dung file `bot.py` trong repo PetGen. Dưới đây là phần mô tả tính năng chi tiết của bot và bảng báo giá triển khai.

---

📄 Mô tả tính năng Bot PetGen (bot.py)

Bot này được xây dựng bằng Python, sử dụng thư viện telebot để tương tác với người dùng qua Telegram. Dưới đây là các tính năng chính:
___
| Tính năng | Mô tả |
|-----------|------|
| 🎯 Gợi ý giống thú cưng | Dựa trên thông tin người dùng nhập (giới tính, độ tuổi, tính cách, môi trường sống…), bot sẽ gợi ý giống chó/mèo phù hợp |
| 🗣️ Tương tác qua Telegram | Bot hoạt động trên nền tảng Telegram, nhận và phản hồi tin nhắn người dùng |
| 📋 Quy trình hỏi đáp tuần tự | Bot hỏi từng câu để thu thập thông tin, sau đó xử lý và đưa ra kết quả |
| 🧠 Xử lý logic đơn giản | Dựa trên điều kiện if/else, không dùng AI hoặc machine learning |
| 🚫 Không lưu dữ liệu người dùng | Mỗi phiên tương tác là độc lập, chưa có hệ thống lưu trữ hoặc phân tích lịch sử |

---

💰 Bảng báo giá triển khai Bot PetGen

| Hạng mục | Chi tiết | Thời gian | Chi phí dự kiến (VNĐ) |
|----------|----------|-----------|------------------------|
| ✅ Hoàn thiện logic gợi ý | Tối ưu thuật toán gợi ý giống thú cưng, thêm nhiều lựa chọn | 2 ngày | 1.500.000 |
| 🌐 Tích hợp giao diện Web | Tạo giao diện web đơn giản để người dùng không cần Telegram | 3 ngày | 3.000.000 |
| ☁️ Triển khai lên VPS | Cài đặt bot chạy 24/7 trên server | 1 ngày | 1.000.000 |
| 📦 Lưu dữ liệu người dùng | Tích hợp lưu lịch sử tương tác (MongoDB hoặc SQLite) | 2 ngày | 2.000.000 |
| 🔧 Bảo trì & cập nhật | Sửa lỗi, thêm giống mới, cải tiến trải nghiệm | Hàng tháng | 1.000.000/tháng |

> 📌 Tổng chi phí triển khai ban đầu: khoảng 7.500.000 VNĐ  
> (Chưa bao gồm chi phí thuê VPS hoặc domain)

---
# Option 2
---

📄 BẢNG 1 – TÍNH NĂNG BOT PETGEN (bot.py)

| Tính năng | Mô tả |
|-----------|------|
| 🎯 Gợi ý giống thú cưng | Dựa trên thông tin người dùng nhập (giới tính, độ tuổi, môi trường sống…), bot gợi ý giống chó/mèo phù hợp |
| 🗣️ Tương tác qua Telegram | Bot hoạt động trên nền tảng Telegram, nhận và phản hồi tin nhắn người dùng |
| 📋 Quy trình hỏi đáp tuần tự | Bot hỏi từng câu để thu thập thông tin, sau đó xử lý và đưa ra kết quả |
| 🧠 Logic đơn giản | Dựa trên điều kiện if/else, chưa dùng AI hoặc machine learning |
| 🚫 Không lưu dữ liệu người dùng | Mỗi phiên tương tác là độc lập, chưa có hệ thống lưu trữ hoặc phân tích lịch sử |

---

🧠 BẢNG 2 – GIÁ DEEPSEEK API

| Mô hình | Giờ cao điểm (UTC 00:30–16:30) | Giờ thấp điểm (UTC 16:30–00:30) |
|--------|-------------------------------|-------------------------------|
| DeepSeek-V3 | Input: $0.07 (cache hit), $0.27 (miss) / triệu token<br>Output: $1.10 / triệu token | Input: $0.035 / $0.135<br>Output: $0.55 / triệu token |
| DeepSeek-R1 | Input: $0.14 / $0.55<br>Output: $2.19 / triệu token | Tương tự V3 |

> 📌 Ước lượng chi phí mỗi lượt tư vấn: $1.34 – $2.68/lượt tùy mô hình và thời điểm

---

💰 BẢNG 3 – BÁO GIÁ TRIỂN KHAI BOT PETGEN + DEEPSEEK

| Hạng mục | Chi tiết | Thời gian | Chi phí dự kiến (VNĐ) |
|----------|----------|-----------|------------------------|
| 🔧 Nâng cấp bot dùng DeepSeek | Tích hợp API, xử lý hội thoại thông minh | 3 ngày | 3.000.000 |
| 🧠 Tối ưu logic gợi ý | Kết hợp AI + điều kiện logic | 2 ngày | 1.500.000 |
| 🌐 Giao diện Web | Cho người dùng không dùng Telegram | 3 ngày | 3.000.000 |
| ☁️ Triển khai VPS | Cài đặt bot chạy 24/7 | 1 ngày | 1.000.000 |
| 🔄 Bảo trì & cập nhật | Sửa lỗi, thêm giống mới, tối ưu AI | Hàng tháng | 1.000.000/tháng |

> 📌 Tổng chi phí triển khai ban đầu: khoảng 8.500.000 VNĐ  
> (Chưa bao gồm chi phí token DeepSeek, VPS, hoặc domain)
---