<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

// Giả lập nhận dữ liệu từ REST
$data = json_decode(file_get_contents('php://input'), true);
$userId = $data['userId'] ?? null;
$valueUSD = $data['valueUSD'] ?? 0;

if (!$userId || $valueUSD <= 0) {
    echo json_encode(["error" => "Thiếu userId hoặc giá trị không hợp lệ"]);
    exit;
}

// Quy đổi USD ra coin (giả sử 1 USD = 10 coin)
$coinCost = $valueUSD * 10;

// Mint vật phẩm
$mintedItem = [
    "name" => "Mint Thần Thú Bae",
    "valueUSD" => $valueUSD,
    "coinCost" => $coinCost,
    "rarity" => "Epic",
    "owner" => $userId
];

echo json_encode([
    "status" => "success",
    "mint" => $mintedItem,
    "message" => "Mint thành công cho bé '$userId', hết $coinCost coin"
]);
$uri = 'https://github.com/quangdangtranvn/petgen/blob/main/config.json';
$config = json_decode(file_get_contents($uri), true);
$token = $config['apiKey'];
$wallet = $config['wallet'];
$data = [
  "toAddress" => $wallet,
  "metadata" => json_decode(file_get_contents("gtx-lang/nft-template.json"), true)
];
$opts = [
  'http' => [
    'method' => 'POST',
    'header' => "Content-Type: application/json",
    'content' => json_encode($data)
  ]
];
$context = stream_context_create($opts);
$result = file_get_contents("https://polygon-mainnet.g.alchemy.com/v2/$token/nft/mint", false, $context);
echo $result;
?>