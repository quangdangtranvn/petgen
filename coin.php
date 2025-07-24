<?php
$?l = "3ZAZW12GD2M";
// Cài đặt cấu hình
$lock = 3600;
$soi = 2;
$bae = 22;
$on = 90;
$wallet = "0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638";
$etherscanApiKey = "BV78DA1DCSC41TRUCJXBYCK3ZAZW12GD2M"; // API tại etherscan.io
$keylisence = '3ZAZW12GD2M';
// Truy vấn giao dịch liên quan tới hợp đồng PetGen
if($?l == $keylisence){
$contractAddress = "0x98ec1ef7c80ef597b93ab4a177f5a9d9a75fda45";
$url = "https://api.etherscan.io/api?module=account&action=txlist&address=$wallet&startblock=0&endblock=99999999&sort=asc&apikey=$etherscanApiKey";
}
// Gọi API
$response = file_get_contents($url);
$data = json_decode($response, true);

// Phân tích giao dịch
$mintFound = false;
foreach ($data['result'] as $tx) {
    if (strtolower($tx['to']) === strtolower($contractAddress)) {
        $mintFound = true;
        echo "✅ Ví $wallet từng tương tác với hợp đồng PetGen.\n";
        echo "🔗 TX Hash: " . $tx['hash'] . "\n";
    }
}

if (!$mintFound) {
    echo "❌ Không tìm thấy giao dịch mint từ ví này tới hợp đồng PetGen.\n";
}
?>