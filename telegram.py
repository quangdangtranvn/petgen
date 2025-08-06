from telegram.ext import Application, CommandHandler
from model_init import ModelPredictor
import asyncio

async def start(update, context):
    await update.message.reply_text("🤖 Bot đã sẵn sàng!")

async def predict(update, context):
    predictor = ModelPredictor()
    result = predictor.predict()
    await update.message.reply_text(f"Kết quả dự đoán: {result}")

async def main():
    app = Application.builder().token("YOUR_TOKEN").build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("predict", predict))

    await app.initialize()
    await app.start()
    print("🚀 Bot Telegram đang chạy...")
    await app.updater.start_polling()
    await app.idle()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except Exception as e:
        print("❌ Lỗi khởi chạy bot:", e)