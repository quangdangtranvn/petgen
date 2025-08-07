# Model loading debug
# Model creation confirmation
# Modeling...
if not os.path.exists(self.model_path):
    print(f"❌ Không tìm thấy model tại: {self.model_path}")
    print("👉 Tạo model mẫu để demo...")
else:
    print(f"✅ Đang load model từ: {self.model_path}")

# Model creation confirmation
print(f"✅ Đã tạo và lưu model mẫu tại: {self.model_path}")

# Prediction output
print("🔍 Kết quả dự đoán:")
print(prediction)
print(f"🎯 Nhãn dự đoán: {predicted_class[0]}")

# Subsystem connection
print("🚀 Bắt đầu chương trình chính")
print(f"✅ Kết quả từ sub: {result}")

# Exception handling
except Exception as e:
    print("đang khởi tạo bản dự đoán và sửa chữa các lỗi module:", e)

# Bot startup confirmation
print("Bot đang chạy... 💬")
# Exception handling
except Exception as e:
    print("đang khởi tạo bản dự đoán và sửa chữa các lỗi module:", e)