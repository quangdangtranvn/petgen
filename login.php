<?php
session_start();
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

    $context  = stream_context_create($options);
    $result = file_get_contents($endpoint, false, $context);

    return json_decode($result, true);
}
// Step 1: Load PlayFab config data from remote endpoint
$json = file_get_contents("https://petgen.rf.gd/playfab_config.php");
$data = json_decode($json, true);

// Optional: Debug the data structure
 //print_r($data);

// Step 2: Safely extract required fields (adjust as needed)
$username = isset($data['username']) ? $data['username'] : '';
$userid   = isset($data['id']) ? $data['id'] : '';

// Step 3: Combine fields to create input string
$input = $username . $userid;

// Step 4: SHA-512 hashing
$hashed = hash("sha512", $input);

// Step 5: AES encryption setup
$key = openssl_random_pseudo_bytes(32); // Secure 256-bit key
$iv  = openssl_random_pseudo_bytes(16); // Secure 128-bit IV

$encrypted = openssl_encrypt($hashed, "AES-256-CBC", $key, 0, $iv);

// Step 6: Final encrypted output
$pass = $encrypted;





// Step 1: Hash the input with SHA-512
$hashed = hash("sha512", $input);
$json = file_get_contents("https://petgen.rf.gd/playfab_config.php");
$data = json_decode($json, true);
// Step 2: Define AES encryption parameters
$key = bin2hex(openssl_random_pseudo_bytes(32)); // Generates a 64-character hex key (256 bits)
$iv  = bin2hex(openssl_random_pseudo_bytes(16)); // Generates a 32-character hex IV (128 bits)


// Step 3: Encrypt the SHA-512 hash with AES
$encrypted = openssl_encrypt($hashed, "AES-256-CBC", $key, 0, $iv);

// Step 4: Parse to $pass
$pass = $encrypted;
$host = 'sql312.infinityfree.com'; // Your database host
$db = 'if0_39464941_petgen'; // Your database name
$user = 'if0_39464941'; // Your database username
$charset = 'utf8mb4';
// Dummy credentials for demonstration
$valid_username = "user";
$valid_password = "password";
loginToPlayFab($valid_username);
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate credentials
    if ($username === $valid_username && $password === $valid_password) {
        $_SESSION['user_logged_in'] = true;
        header("Location: nft_collection.php");
echo "AES-256 Key: " . $key . "\n";
echo "AES IV: " . $iv . "\n";
// Step 7: Output everything (for testing purposes only)
echo "Username: " . $username . "<br>";
echo "UserID: " . $userid . "<br>";
echo "Input: " . $input . "<br>";
echo "SHA-512 Hashed: " . $hashed . "<br>";
        exit;
    } else {
        $error = "Invalid username or password. Created Your Account Instead With Anonymos Functions";
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
