<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
$uri = 'https://github.com/quangdangtranvn/petgen/blob/main/config.json';
$config = json_decode(file_get_contents($uri), true);
$token = $config['apiKey'];
$wallet = $config['wallet'];
// nhận dữ liệu từ REST GLOBAL
$userId = $_GLOBAL['userId'] ?? null;
$valueUSD = $_GLOBAL['valueUSD'] ?? 0;

if (!$userId || $valueUSD <= 0) {
    echo json_encode(["error" => "Thiếu userId hoặc giá trị không hợp lệ"]);
    exit;
}

// Quy đổi USD ra coin (giả sử 22 USD = 1 coin $BAE)
$coinCost = 22;

// Mint vật phẩm
$mintedItem = [
    "token" => $token,
    "name" => "Mint Coin Thần Thú $Bae",
    "contract" => $wallet,
    "valueUSD" => $valueUSD,
    "coinCost" => $coinCost,
    "rarity" => "Epic",
    "owner" => $userId
];

echo json_encode([
    "status" => "success",
    "mint" => $mintedItem,
    "message" => "Mint thành công cho tài khoản'$userId'"
]);

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