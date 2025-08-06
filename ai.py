import os
import asyncio
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
from sub import connect, SubProcessor
from bot import ModelPredictor  
# Assuming you move ModelPredictor to bot.py from model.py

load_dotenv()
TOKEN = os.getenv("BOT_TOKEN")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Bot đã gắn config ngon lành rồi anh/chị em ơi ✅")

async def ask(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Cứ hỏi, PetGen Fusion AI sẵn sàng trả lời tới sáng 🌙")

async def run_ai():
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("ask", ask))

    print("🚀 Bắt đầu chương trình chính")
    result = connect()
    print(f"✅ Kết quả từ sub: {result}")
    processor = SubProcessor()
    processor.run()

    print("💬 Bot đang chạy...")
    await app.initialize()
    await app.start()
    await app.updater.start_polling()
    await app.idle()

async def run_prediction():
    predictor = ModelPredictor()
    predictor.predict()

async def main():
    await asyncio.gather(run_ai(), run_prediction())

if __name__ == '__main__':
    try:
        asyncio.run(main())
    except Exception as e:
        print("Lỗi khi khởi tạo bot và dự đoán:", e)
   # Fallback in case asyncio.run fails
        loop = asyncio.get_event_loop()
        loop.run_until_complete(main())