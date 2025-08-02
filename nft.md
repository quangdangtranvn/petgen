Để triển khai quản lý phiên trong PHP nhằm hạn chế quyền truy cập vào bộ sưu tập NFT của bạn và ngăn người dùng trái phép chụp ảnh màn hình hoặc truy cập trang, bạn có thể làm theo các bước dưới đây. Ví dụ này sẽ bao gồm xử lý phiên, cơ chế đăng nhập và cách hạn chế quyền truy cập vào trang bộ sưu tập NFT.

### Bước 1: Tạo Hệ thống Đăng nhập

Trước tiên, hãy tạo một hệ thống đăng nhập đơn giản để quản lý phiên người dùng. Hệ thống này sẽ cho phép bạn xác thực người dùng trước khi họ có thể truy cập vào bộ sưu tập NFT.

#### `login.php`

```php
<?php
session_start();

// Thông tin đăng nhập giả để minh họa
$valid_username = "user";
$valid_password = "password";

// Kiểm tra xem biểu mẫu đã được gửi chưa
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$username = $_POST['username'];
$password = $_POST['password'];

 // Xác thực thông tin đăng nhập
if ($username === $valid_username && $password === $valid_password) {
$_SESSION['user_logged_in'] = true;
header("Location: nft_collection.php");
exit;
} else {
$error = "Tên người dùng hoặc mật khẩu không hợp lệ.";
}
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Đăng nhập</title>
</head>
<body>
<h2>Đăng nhập</h2>
<?php if (isset($error)) echo "<p style='color:red;'>$error</p>";  ?>
<form method="POST" action="">
<label for="username">Tên người dùng:</label>
<input type="text" name="username" required>
<br>
<label for="password">Mật khẩu:</label>
<input type="password" name="password" required>
<br>
<button type="submit">Đăng nhập</button>
</form>
</body>
</html>
```

### Bước 2: Tạo Trang Bộ sưu tập NFT

Tiếp theo, tạo trang bộ sưu tập NFT sẽ được bảo vệ bằng kiểm tra phiên.

#### `nft_collection.php`

```php
<?php
session_start();

// Kiểm tra xem người dùng đã được xác thực chưa
if (!isset($_SESSION['user_logged_in']) || $_SESSION['user_logged_in'] !== true) {
header("Location: login.php"); 
thoát;
}

// Dữ liệu NFT giả để minh họa
$nft_collection = [
[
'name' => 'PetGen Anim 1',
'image' => 'https://storage.googleapis.com/a1aa/image/25165c77-dd90-4c1a-b7dc-3851f40c1561.jpg',
'price' => '0.0015 ETH',
'rank' => '42',
'likes' => '128',
],
// Thêm NFT nếu cần
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Bộ sưu tập NFT</title>
<style>
body {
font-family: Arial, sans-serif;

 }
.nft-container {
display: flex;
flex-wrap: wrap;
gap: 20px;
}
.nft-item {
border: 1px solid #ccc;
padding: 10px;
border-radius: 5px;
width: 200px;
text-align: center;
}
.nft-item img {
max-width: 100%;
border-radius: 5px;
}
</style>
</head>
<body>
<h1>Bộ sưu tập NFT của bạn</h1>
<div class="nft-container">
<?php foreach ($nft_collection as $nft): ?>
<div class="nft-item">
<h2><?php echo $nft['name'];  ?></h2>
<img src="<?php echo $nft['image']; ?>" alt="<?php echo $nft['name']; ?>">
<p>Giá: <?php echo $nft['price']; ?></p>
<p>Thứ hạng: <?php echo $nft['rank']; ?></p>
<p>Lượt thích: <?php echo $nft['likes']; ?></p>
</div>
<?php endforeach; ?>
</div>
<a href="logout.php">Đăng xuất</a>
</body>
</html>
```

### Bước 3: Tạo tập lệnh Đăng xuất

Bạn cũng nên cung cấp cách để người dùng đăng xuất, cách này sẽ hủy phiên làm việc.

#### `logout.php`

```php
<?php
session_start();
session_destroy();
 header("Location: login.php");
exit;
```

### Bước 4: Ngăn chặn ảnh chụp màn hình

Mặc dù bạn không thể hoàn toàn ngăn chặn người dùng chụp ảnh màn hình, nhưng bạn có thể áp dụng một số kỹ thuật để ngăn chặn việc này:

1. **Gắn hình mờ**: Thêm hình mờ vào ảnh NFT của bạn để ngăn chặn việc sử dụng trái phép.
2. **Lớp phủ**: Sử dụng lớp phủ trong suốt trên ảnh, điều này có thể khiến việc chụp ảnh màn hình sạch trở nên khó khăn hơn.
3. **Tắt Nhấp chuột phải**: Bạn có thể tắt nhấp chuột phải trên trang để ngăn người dùng dễ dàng lưu ảnh.

Đây là ví dụ về cách tắt nhấp chuột phải:

```html
<script>
document.addEventListener('contextmenu', function(e) {

e.preventDefault();
});
</script>
```

### Tóm tắt

Thiết lập này cung cấp một hệ thống đăng nhập cơ bản, hạn chế quyền truy cập vào trang bộ sưu tập NFT.  Người dùng phải đăng nhập để xem NFT và bạn có thể áp dụng các biện pháp bổ sung để ngăn chặn việc chụp ảnh màn hình. Hãy nhớ rằng mặc dù bạn có thể làm cho việc chụp ảnh màn hình trở nên khó khăn hơn, nhưng không thể ngăn chặn hoàn toàn.
———
To implement session management in PHP that restricts access to your NFT collection and prevents unauthorized users from taking screenshots or accessing the page, you can follow the steps below. This example will include session handling, a login mechanism, and a way to restrict access to the NFT collection page.

### Step 1: Create a Login System

First, create a simple login system to manage user sessions. This will allow you to authenticate users before they can access the NFT collection.

#### `login.php`

```php
<?php
session_start();

// Dummy credentials for demonstration
$valid_username = "user";
$valid_password = "password";

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate credentials
    if ($username === $valid_username && $password === $valid_password) {
        $_SESSION['user_logged_in'] = true;
        header("Location: nft_collection.php");
        exit;
    } else {
        $error = "Invalid username or password.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <?php if (isset($error)) echo "<p style='color:red;'>$error</p>"; ?>
    <form method="POST" action="">
        <label for="username">Username:</label>
        <input type="text" name="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" name="password" required>
        <br>
        <button type="submit">Login</button>
    </form>
</body>
</html>
```

### Step 2: Create the NFT Collection Page

Next, create the NFT collection page that will be protected by the session check.

#### `nft_collection.php`

```php
<?php
session_start();

// Check if the user is authenticated
if (!isset($_SESSION['user_logged_in']) || $_SESSION['user_logged_in'] !== true) {
    header("Location: login.php");
    exit;
}

// Dummy NFT data for demonstration
$nft_collection = [
    [
        'name' => 'PetGen Anim 1',
        'image' => 'https://storage.googleapis.com/a1aa/image/25165c77-dd90-4c1a-b7dc-3851f40c1561.jpg',
        'price' => '0.0015 ETH',
        'rank' => '42',
        'likes' => '128',
    ],
    // Add more NFTs as needed
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NFT Collection</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .nft-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        .nft-item {
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 5px;
            width: 200px;
            text-align: center;
        }
        .nft-item img {
            max-width: 100%;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Your NFT Collection</h1>
    <div class="nft-container">
        <?php foreach ($nft_collection as $nft): ?>
            <div class="nft-item">
                <h2><?php echo $nft['name']; ?></h2>
                <img src="<?php echo $nft['image']; ?>" alt="<?php echo $nft['name']; ?>">
                <p>Price: <?php echo $nft['price']; ?></p>
                <p>Rank: <?php echo $nft['rank']; ?></p>
                <p>Likes: <?php echo $nft['likes']; ?></p>
            </div>
        <?php endforeach; ?>
    </div>
    <a href="logout.php">Logout</a>
</body>
</html>
```

### Step 3: Create a Logout Script

You should also provide a way for users to log out, which will destroy the session.

#### `logout.php`

```php
<?php
session_start();
session_destroy();
header("Location: login.php");
exit;
```

### Step 4: Prevent Screenshots

While you cannot completely prevent users from taking screenshots, you can implement some techniques to discourage it:

1. **Watermarking**: Add a watermark to your NFT images to deter unauthorized use.
2. **Overlay**: Use a transparent overlay on the images that can make it harder to take clean screenshots.
3. **Disable Right-Click**: You can disable right-click on the page to prevent users from easily saving images.

Here’s an example of how to disable right-click:

```html
<script>
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
</script>
```

### Summary

This setup provides a basic login system that restricts access to the NFT collection page. Users must log in to view the NFTs, and you can implement additional measures to discourage screenshots. Remember that while you can make it more difficult to take screenshots, you cannot completely prevent it.