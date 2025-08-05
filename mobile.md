To set up Termux for your project, follow these steps to install necessary packages and configure your environment. This guide assumes you are starting from scratch.

### Step 1: Install Termux

1. **Download Termux**: Install Termux from the Google Play Store or F-Droid.

### Step 2: Update and Upgrade Packages

Open Termux and run the following commands to update and upgrade the package list:

```bash
pkg update && pkg upgrade
```

### Step 3: Install Required Packages

You will need Git and possibly other tools depending on your project. Install Git using:

```bash
pkg install git
```

If your project requires Node.js (for JavaScript projects), you can install it as follows:

```bash
pkg install nodejs
```

### Step 4: Clone the Target Repository

Clone the target repository using Git:

```bash
git clone https://github.com/quangdangtranvn/petgen.git
```

### Step 5: Navigate to the Cloned Directory

Change to the directory of the cloned repository:

```bash
cd petgen
```

### Step 6: Create a CSV File with Scanned Files

Use the following command to scan the files in the cloned repository and create a CSV file with the target URL:

```bash
find . -type f | sed 's|^|https://github.com/quangdangtranvn/petgen/|' > scanned_files.csv
```

### Step 7: Create a Project Info CSV File

Create a CSV file that contains the source and target paths:

```bash
echo "source,target" > project_info.csv
echo "/storage/emulated/0/Download/petgen-main/petgen,https://github.com/quangdangtranvn/petgen" >> project_info.csv
```

### Step 8: Verify the Created Files

You can check the contents of the created CSV files using `cat` or any text editor like `nano`:

```bash
cat scanned_files.csv
cat project_info.csv
```

### Summary of Commands

Here’s the complete set of commands to set up Termux and create the necessary files:

```bash
pkg update && pkg upgrade
pkg install git
pkg install nodejs  # Optional, only if your project requires Node.js
git clone https://github.com/quangdangtranvn/petgen.git
cd petgen
find . -type f | sed 's|^|https://github.com/quangdangtranvn/petgen/|' > scanned_files.csv
echo "source,target" > project_info.csv
echo "/storage/emulated/0/Download/petgen-main/petgen,https://github.com/quangdangtranvn/petgen" >> project_info.csv
cat scanned_files.csv
cat project_info.csv
```

### Additional Tips

- **Text Editor**: You can install a text editor like `nano` for easier file editing:
  ```bash
  pkg install nano
  ```

- **Permissions**: If you need to access files outside of Termux's home directory, you may need to grant storage permissions:
  ```bash
  termux-setup-storage
  ```

This setup will prepare your Termux environment for working with the PetGen project and allow you to manage files effectively.
___
Dùng `pyenv` là cách xịn để quản lý nhiều phiên bản Python và tránh xung đột thư viện — đặc biệt hữu ích khi cài autobot siêu AI hoặc deploy qua nhiều môi trường.

---

⚙️ Các bước dùng pyenv trên Termux hoặc Linux

1. Cài đặt pyenv
```bash
curl https://pyenv.run | bash
```

Sau đó thêm vào .bashrc, .zshrc, hoặc .profile tuỳ shell anh dùng:

```bash
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
```

Xong rồi reload lại:
```bash
source ~/.bashrc   # hoặc ~/.zshrc nếu xài zsh
```

---

2. Cài Python version ổn định
Dùng bản phù hợp với python-telegram-bot, ví dụ:

```bash
pyenv install 3.10.13
pyenv global 3.10.13
```

> Bản 3.10 chạy rất tốt với thư viện bot và ít lỗi package

---

3. Kiểm tra lại phiên bản Python
`bash
python --version
`
Kết quả nên là: Python 3.10.13 ✅

---

4. Tạo môi trường riêng cho bot
```bash
pyenv virtualenv 3.10.13 petgen-bot-env
pyenv activate petgen-bot-env
```

Giờ bạn có thể:
```bash
pip install -r requirements.txt
python bot.py
```

---

