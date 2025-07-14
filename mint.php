<?php
$config = json_decode(file_get_contents('config.json'), true);
$token = $config['apiKey'];
$wallet = $_POST['wallet'];
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