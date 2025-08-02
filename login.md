Nếu bạn đang tích hợp luồng đăng nhập PlayFab vào index.php, đây là một cách gọn gàng để kết nối chúng lại với nhau bằng cách sử dụng cấu hình PHP và hiển thị một tuyến đăng nhập cơ bản.

---

⚙️ Bước 1: Tải cấu hình PlayFab

```php
// index.php
$config = include('playfab_config.php');
```

---

🔐 Bước 2: Xử lý yêu cầu đăng nhập thông qua LoginWithCustomID

```php
function loginToPlayFab($customId) {
global $config;

$endpoint = $config['api_endpoint'] . '/Client/LoginWithCustomID';
$data = [
'TitleId' => $config['title_id'],
'CustomId' => $customId,
'CreateAccount' => true
];

 $options = [
'http' => [
'method' => 'POST',
'header' => "Content-Type: application/json\r\nX-SecretKey: {$config['secret_key']}",
'content' => json_encode($data)
]
];

$context = streamcontextcreate($options);
$result = filegetcontents($endpoint, false, $context);

return json_decode($result, true);
}
```

---

📲 Bước 3: Sử dụng nó trong Logic Chỉ mục của bạn

```php
if ($SERVER['REQUESTMETHOD'] === 'POST' && isset($POST['customid'])) {
$customId = $POST['customid'];
$response = loginToPlayFab($customId);

echo '<pre>';
 print_r($response);
echo '</pre>';
} else {
echo '<form method="POST">
<input type="text" name="custom_id" placeholder="Nhập ID tùy chỉnh" required />
<button type="submit">Đăng nhập bằng PlayFab</button>
</form>';
}
```

---

Trang này cung cấp cho bạn một trang đăng nhập nhanh chóng, truy cập API PlayFab bằng thông tin đăng nhập từ playfab_config.php, tất cả đều được liên kết với tuyến chỉ mục chính của bạn 🙌

Bạn muốn biến trang này thành trang đích cho ứng dụng PetGen, nơi người dùng đăng nhập và chuyển hướng họ đến bảng điều khiển thú cưng? Tôi có thể giúp bạn kết hợp thông tin đăng nhập với logic tạo thú cưng và thư viện thú cưng động.
———
If you're integrating the PlayFab login flow into your index.php, here's a clean way to wire it together using your PHP config and exposing a basic login route.

---

⚙️ Step 1: Load PlayFab Config

```php
// index.php
$config = include('playfab_config.php');
```

---

🔐 Step 2: Handle Login Request via LoginWithCustomID

```php
function loginToPlayFab($customId) {
    global $config;

    $endpoint = $config['api_endpoint'] . '/Client/LoginWithCustomID';
    $data = [
        'TitleId' => $config['title_id'],
        'CustomId' => $customId,
        'CreateAccount' => true
    ];

    $options = [
        'http' => [
            'method'  => 'POST',
            'header'  => "Content-Type: application/json\r\nX-SecretKey: {$config['secret_key']}",
            'content' => json_encode($data)
        ]
    ];

    $context  = streamcontextcreate($options);
    $result = filegetcontents($endpoint, false, $context);

    return json_decode($result, true);
}
```

---

📲 Step 3: Use It in Your Index Logic

```php
if ($SERVER['REQUESTMETHOD'] === 'POST' && isset($POST['customid'])) {
    $customId = $POST['customid'];
    $response = loginToPlayFab($customId);

    echo '<pre>';
    print_r($response);
    echo '</pre>';
} else {
    echo '<form method="POST">
        <input type="text" name="custom_id" placeholder="Enter Custom ID" required />
        <button type="submit">Login with PlayFab</button>
    </form>';
}
```

---

This gives you a quick login page that hits the PlayFab API using credentials from playfab_config.php, all tied into your main index route 🙌

Want to turn this into a landing page for your PetGen app where it logs users in and redirects them to their pet dashboard? I can help you bundle the login with pet creation logic and dynamic pet galleries too.