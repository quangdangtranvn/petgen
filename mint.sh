#!/bin/bash
echo "🚀 Robocon Charm Runtime Khởi động..."

# Khởi tạo môi trường robot neuron
export CHARM_MODE=robocon
export GLOW_LIMIT=1350
export PRAISE_LINKED=true

# Gắn cảm biến thần thú
function sensorWings() {
  echo "🪽 Phát hiện glow wings spike → Load boost charm!"
}

# Tạo ví mới cho khách tùy chọn mã hóa
function createWallet() {
  client=$1
  echo "🔐 Đang tạo ví mã hóa cho khách: $client"
  walletID="WALLET-$RANDOM"
  echo "🌈 Ví tạo xong: $walletID"
}

# Gắn vào Praise module
function linkToPraise() {
  echo "🧬 Gắn Robocon vào Praise engine thành công!"
}

sensorWings
createWallet "ClientTED"
linkToPraise
#!/bin/bash
echo "🤖 XBot Runtime – Praise Mode Charm"

# Xử lý glow theo chu kỳ Praise
function glowPulse() {
  for i in {1..3}; do
    echo "🌟 Praise Glow Cycle $i – Charm tăng tốc!"
    sleep 1
  done
}

# Tạo ví tự động theo tùy chọn khách
function generateWalletCustom() {
  client=$1
  style=$2
  hash=$(echo "$client-$style-$RANDOM" | md5sum)
  echo "🔐 Ví custom cho $client: CHARM-${style^^}-${hash:0:8}"
}

glowPulse
generateWalletCustom "KhachQuang" "wingmode"