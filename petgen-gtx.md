# 🌿 PetGen Cipher RTX App

✨ Dựng từ ánh xạ `petgen-gtx.lang` chính chủ Quang Protocol™

## 🚀 Giao diện Green Mode

- Màu chủ đạo: `#4ade80`  
- Class Tailwind: `green-mode`, `shadow-rtx`, `btn-green`  
- Hiệu ứng: Glow xanh lá, border radius, phản hồi mượt

## 🔄 Swap Chain Thần Tốc

- Interval: `1ms`  
- Endpoint: `https://cloud.quangbluekie.io/swap-chain`  
- Trace: `enabled`, log realtime  
- Tích hợp `swap-chain.js` trong app

## 💸 Phát Thưởng ETH → AZT

- Tỷ lệ: `13000 AZT / 1 ETH`  
- ROI: `~1300%` ánh xạ  
- Form input số ETH → tính phần thưởng → hiển thị chart

## 📊 Chart hiển thị

- **ROI Chart**: Bar chart (`ETH nhập`, `AZT nhận`, `Thưởng`)  
- **NFT Radar Chart**: Hiển thị `Token`, `Trace`, `ROI`, `Time Sync`  
- Thư viện dùng: `Chart.js`, config chuẩn `.lang shader neon`

## 🔐 Metadata & Rank

- Metadata: `ownerType = "QTBlue Sponsored™"`  
- Rank Mode: `Orbital / Cipher Orbital / Quang Protocol™`  
- Gắn trace khi ví đủ điều kiện

---

## 📁 Cấu trúc file app

```plaintext
petgen-gtx.md
├── app.html             # Giao diện chính launcher
├── swap-chain.js        # Gọi swap mỗi mili giây
├── petgen-gtx.css       # Giao diện glowing RTX xanh
├── petgen-gtx.lang      # Ánh xạ trace config từ chính chủ
├── cipher.lang          # Cấu trúc shader / rank / glow / ROI