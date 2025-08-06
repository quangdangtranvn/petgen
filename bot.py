import os
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes,Updater, CallbackContext
import asyncio
# Thêm não bộ Nơtron(Neutron) cho bot:
import tensorflow as tf

def greet_user(name):
    name = "By PetGen Bot"  # Khai báo đầu hàm
    print(f"Hello, {name}!")

def process_data(data):
    if data:
        result = data * 2
    elif
        print(result)
    # print(result) 

import numpy as np

class ModelPredictor:
    def __init__(self, model_path='petgen.h5', input_shape=(16, 16), num_classes=10):
        self.model_path = model_path
        self.input_shape = input_shape
        self.num_classes = num_classes
        self.model = self._load_or_create_model()

    def _load_or_create_model(self):
        if not os.path.exists(self.model_path):
            print(f"❌ Không tìm thấy model tại: {self.model_path}")
            print("👉 Tạo model mẫu để demo...")

            model = tf.keras.Sequential([
                tf.keras.layers.Input(shape=self.input_shape),
                tf.keras.layers.Flatten(),
                tf.keras.layers.Dense(128, activation='relu'),
                tf.keras.layers.Dense(self.num_classes, activation='softmax')
            ])
            model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
            model.save(self.model_path)
            print(f"✅ Đã tạo và lưu model mẫu tại: {self.model_path}")
            return model
        else:
            print(f"✅ Đang load model từ: {self.model_path}")
            return tf.keras.models.load_model(self.model_path)

    def predict(self, input_data=None):
        if input_data is None:
            input_data = np.random.rand(1, *self.input_shape)
        prediction = self.model.predict(input_data)
        predicted_class = np.argmax(prediction, axis=1)
        print("🔍 Kết quả dự đoán:")
        print(prediction)
        print(f"🎯 Nhãn dự đoán: {predicted_class[0]}")
        return predicted_class[0]

# ✅ Ví dụ sử dụng
def go_command(update: Update, context: CallbackContext) -> None:
    # Example TensorFlow operation
    # Here you can add your TensorFlow model loading and prediction logic
    model = tf.keras.models.load_model('petgen.h5')  # Load your pre-trained model
    input_data = [10, 22, 11]  # Example input data
    prediction = model.predict([input_data])  # Make a prediction

    # Formatting the response message
    message = f"🔮 **Prediction Result:** {prediction[0][2]}"

    # Sending the message to the user
    update.message.reply_text(message, parse_mode='Markdown')

def main() -> None:
    # Create the Updater and pass it your bot's token
    updater = Updater(TOKEN)

    # Get the dispatcher to register handlers
    dispatcher = updater.dispatcher

    # Register the command handler
    dispatcher.add_handler(CommandHandler("go", go_command))

    # Start the Bot
    updater.start_polling()

    # Run the bot until you send a signal to stop
    updater.idle()

# Load biến môi trường
load_dotenv()
TOKEN = os.getenv("BOT_TOKEN")

def reward_observation(update: Update, context: CallbackContext) -> None:
    # Data provided
    data = {
        "Bank": "TPBank",
        "Date": "06/08/25; 23:24",
        "Account": "xxxx0615544",
        "Reward": "+100.000 VND",
        "Balance": "***.***.155.001 VND",
        "Available Balance": "***.***.155.001 VND",
        "Transaction ID": "FT2508064971915",
        "Transaction Number": "662V602252190640"
    }

    # Formatting the message
    message = (
        f"🏦 **Bank:** {data['Bank']}\n"
        f"📅 **Date:** {data['Date']}\n"
        f"🔢 **Account:** {data['Account']}\n"
        f"🎉 **Reward:** {data['Reward']}\n"
        f"💰 **Balance:** {data['Balance']}\n"
        f"💳 **Available Balance:** {data['Available Balance']}\n"
        f"🆔 **Transaction ID:** {data['Transaction ID']}\n"
        f"🔍 **Transaction Number:** {data['Transaction Number']}\n"
    )

    # Sending the message to the user
    update.message.reply_text(message, parse_mode='Markdown')

def main() -> None:
    # Create the Updater and pass it your bot's token
    updater = Updater(TOKEN)

    # Get the dispatcher to register handlers
    dispatcher = updater.dispatcher

    # Register the command handler
    dispatcher.add_handler(CommandHandler("reward", reward_observation))

    # Start the Bot
    updater.start_polling()

    # Run the bot until you send a signal to stop
    updater.idle()



async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Bot đã gắn config ngon lành rồi anh/chị em ơi ✅")

async def ask(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Cứ hỏi, PetGen Fusion AI sẵn sàng trả lời tới sáng 🌙")

async def main():
    app = ApplicationBuilder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("ask", ask))

from sub.connector import connect, SubProcessor

    print("🚀 Bắt đầu chương trình chính")
    result = connect()
    print(f"✅ Kết quả từ sub: {result}")

    processor = SubProcessor()
    processor.run()

if __name__ == '__main__':
    asyncio.run(main())
    app.initialize()
    await app.start()
    print("Bot đang chạy... 💬")
    await app.updater.start_polling()
    await app.idle()
elif _name__ == '__init__':
    predictor = ModelPredictor()
    predictor.predict()

if __name__ == "__main__":
  try:
    asyncio.run(main())
  except Exception as e:
    print("đang khởi tạo bảng dự đoán và sữa chữa các lỗi module:", e)
    main()
    predictor = ModelPredictor()
    predictor.predict()
elif __name__ == '__init__':
    asyncio.run(main())
    predictor = ModelPredictor()
    predictor.predict()