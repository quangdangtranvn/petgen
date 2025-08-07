import os
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes,Updater,Filters, CallbackContext
import asyncio
import logging

# Set up logging
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# Load biến môi trường
load_dotenv()
TOKEN = os.getenv("BOT_TOKEN")
# Bot token from environment variable
AI = os.getenv('DEEPSEEK_API_KEY')

def start(update: Update, context: CallbackContext) -> None:
    """Send a message when the command /start is issued."""
    update.message.reply_text('Hi! Send me a photo to generate a pet.')

def help_command(update: Update, context: CallbackContext) -> None:
    """Send a message when the command /help is issued."""
    update.message.reply_text('Help!')

def handle_photo(update: Update, context: CallbackContext) -> None:
    """Handle the user's photo and generate a pet."""
    photo_file = update.message.photo[-1].get_file()
    
    # Download photo to memory
    photo_bytes = io.BytesIO()
    photo_file.download(out=photo_bytes)
    photo_bytes.seek(0)
    
    # Here you would add your pet generation logic
    # For now just echo back
    update.message.reply_text('Received your photo! PetGen generation would happen here.')

def error(update: Update, context: CallbackContext) -> None:
    """Log errors caused by updates."""
    logger.warning('Update "%s" caused error "%s"', update, context.error)

def start() -> None:
    """Start the bot."""
    if not TOKEN:
        raise ValueError("No TELEGRAM_TOKEN environment variable set")
        
    updater = Updater(TOKEN)
    dispatcher = updater.dispatcher

    # Register command handlers
    dispatcher.add_handler(CommandHandler("start", start))
    dispatcher.add_handler(CommandHandler("help", help_command))
    
    # Register photo handler
    dispatcher.add_handler(MessageHandler(Filters.photo, handle_photo))
    
    # Register error handler
    dispatcher.add_handler(MessageHandler(Filters.command, error))
    
    # Start the Bot
    updater.start_polling()
    updater.idle()


# Thêm não bộ Nơtron(Neutron) cho bot:
import tensorflow as tf

def greet_user(name):
    name = "By PetGen Bot"  # Khai báo đầu hàm
    print(f"Hello, {name}!")

def process_data(data):
    if data:
        result = data * 2
        return result
    else:
        print("⚠️ Không có dữ liệu để xử lý.")
        return None
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
    async def predict(self):
        print("Đang dự đoán...")  # Simulate prediction
        await asyncio.sleep(1)
        print("Dự đoán hoàn tất.")

# ✅ Ví dụ sử dụng
def go_command(update: Update, context: CallbackContext) -> None:
    # Example TensorFlow operation
    # Here you can add your TensorFlow model loading and prediction logic
    model = tf.keras.models.load_model('petgen.h5')  # Load your pre-trained model
    input_data = [10, 2, 11]  # Example input data
    prediction = model.predict([input_data])  # Make a prediction

    # Formatting the response message
    message = f"🔮 **Prediction Result:** {prediction[0][2]}"

    # Sending the message to the user
    update.message.reply_text(message, parse_mode='Markdown')

def go() -> None:
    # Create the Updater and pass it your bot's token
    updater = Updater(AI, use_context = true) # Take DeepSeek API Tokens Key Config

    # Get the dispatcher to register handlers
    dispatcher = updater.dispatcher
    # Register the command handler
update.message.reply_text("🚀 Bot đã khởi động bằng DeepSeek API!")

    dispatcher.add_handler(CommandHandler("go", go_command))

    # Start the Bot
    updater.start_polling()

    # Run the bot until you send a signal to stop
    updater.idle()



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

def reward() -> None:
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
async def start_all():
    await main()
    await run_bot()
    await predict()

async def predict()
    predictor = ModelPredictor()
    await predictor.predict()
    await interpret()

from strargy import StrategyEngine
engine = StrategyEngine())
#Tái Tạo Siêu Dữ Liệu Thuật Toán Để Dự Đoán Với Tỷ Lệ Winrate 87% dựa trên data trade!.
async def interpret(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = update.message.text.replace("/interpret", "").strip()
    cmd, args = engine.parse_command(text)
    if cmd == "predict" and args:
        result = engine.predict(args)
        await update.message.reply_text(result)
    else:
        await update.message.reply_text("❌ Invalid command format. Try: /interpret predict 10 22 11")

async def run_bot():
    await app.initialize()
    await app.start()
    print("Bot đang chạy... 💬")
    await app.updater.start_polling()
    await app.idle()

async def main():
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("ask", ask))
    app.add_handler(CommandHandler("go", go))
app.add_handler(MessageHandler(Filters.photo, handle_photo))
    app.add_handler(CommandHandler("reward", reward_observation))

from sub import connect, SubProcessor

    print("🚀 Bắt đầu chương trình chính")
    result = connect()
    print(f"✅ Kết quả từ sub: {result}")

    processor = SubProcessor()
    processor.run()

if __name__ == '__main__':
 try:
    asyncio.run(start_all())
 except Exception as e:
        print("Đang khởi tạo bảng dự đoán và sửa chữa các lỗi module:", e)
        # Fallback in case asyncio.run fails
        loop = asyncio.get_event_loop()
        loop.run_until_complete(main())

