![copilot_image_1753408720601.jpeg](https://github.com/user-attachments/assets/394335c7-cd04-4f20-95ca-5771fbcd64ea)
# Tổng hợp lại bảng route REST API theo repo PetGen, tích hợp luôn các thành phần từ coin.php, config.json, và logic pool ngôn ngữ để kiểm tra dễ dàng hơn nha 🚀📡

---

📊 Bảng Route REST API hệ thống petgen

Route  Method  Mô tả chức năng chính  Payload/Query  Trả về

/api/mint  POST  Mint NFT theo thông tin từ pool + ví xác thực  { wallet, token, amount }  { txHash, panelInfo }

/api/verify-wallet  GET  Kiểm tra ví (VD: 0923750968) có hợp lệ không  ?wallet=0923750968  { verified: true/false }

/api/pool-values  GET  Lấy giá USD của các token trong pool  Không cần query  Mảng token { usdValue, key }

/api/get-panels  GET  Trả danh sách các panel NFT (firewolf, icefox…)  Không cần query  panels[] với theme, glow

/api/reset-config  POST  “Rest lại repo” theo dữ liệu trong pool.lang  { confirm: true }  { status: "reset_done" }

/api/config  GET  Truy xuất toàn bộ config.json  Không cần query  JSON đầy đủ cấu hình

/api/network-check  GET  Kiểm tra RPC tại endpoint wallet.kesug.com  Không cần query  { rpcStatus, chainId }

/api/token-summary  GET  Tổng hợp token @azt, @bnb,… theo loại ConvertTo  Không cần query  { "AT": { tổng USD, số lượng } }

---

💡 Gợi ý mở rộng nếu muốn chuẩn hóa REST:

- Viết thêm /api/log-mint để lưu lịch sử giao dịch
- Thêm auth layer nhẹ nếu anh/chị em muốn verify qua token riêng
- Gắn network vào mỗi request để hệ thống auto chọn RPC phù hợp

---
