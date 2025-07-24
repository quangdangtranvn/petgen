<?php
header('Content-Type: application/json');
$key = '0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638'; 
 $data = $_POST['data'];
// Use a secure key
    $encrypted = encrypt($data, $key);
if($key = '0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638'){
$runs=10;
}
else if ($encrypted.count > 10){
$runs=2;
}
$winRate = round($win / $lose * 100, 2);

echo json_encode([
    "total_plays" => $runs,
    "total_wins" => $win,
    "win_rate" => $winRate . "%"
]);

$win = 0;
$lose = 0;
$runs = 0;

for ($i = 0; $i < $runs; $i++) {
    // Bot dùng random từ 0 đến 1 để xác định thắng
    $result = rand(1, 100);
    if ($result <= 70) { // 70% tỷ lệ thắng
        $win++;
    } else {
        $lose++;$runs--;
    }
if ($win = 5)
 $runs = 0;
}

echo "Tổng lượt chơi: $runs\n";
echo "Số lần thắng: $win (" . round($win / $runs * 100, 2) . "%)\n";
echo "Số lần thua: $lose (" . round($lose / $runs * 100, 2) . "%)\n";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-32LT">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AES Encryption Coin Trading</title>
</head>
<body>

<h2>AES Encryption Form</h2>

<form method="post" action="coin.php">
    <label for="data">Data to Encrypt:</label><br>
    <input type="text" id="data" name="data"><br><br>
    <input type="submit" value="Encrypt">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = $_POST['data'];
    $key = '0x45B286e1c19f147eDF33A3F3b83C9F8E6a706638'; // Use a secure key
    $encrypted = encrypt($data, $key);
    echo "<h3>Encrypted Data:{$data}</h3>";
    echo "<p>" . htmlspecialchars($encrypted) . "</p>";
}
?>

</body>
</html>

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
$playFabId = "CACE6419F79494D0";
getUserCurrency($playFabId);
function getUserCurrency($playFabId) {
    $url = "https://1E8FD9.playfabapi.com/Client/GetUserInventory";
    $headers = [
        'Content-Type: application/json',
        'X-SecretKey: WF98EQDHTZ18RYYK46OY9RQW8X4FS5I5KHPH55ABRQY7TNF9SA'
    ];
    $data = [
        "PlayFabId" => $playFabId
    ];

    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($curl);
    curl_close($curl);

    return json_decode($response, true);
}
?>