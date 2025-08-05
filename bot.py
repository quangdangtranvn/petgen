import os
from dotenv import load_dotenv
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
import asyncio

# Load biến môi trường
load_dotenv()
TOKEN = os.getenv("BOT_TOKEN")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Bot đã gắn config ngon lành rồi anh/chị em ơi ✅")

async def ask(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Cứ hỏi, PetGen Fusion AI sẵn sàng trả lời tới sáng 🌙")

async def main():
    app = ApplicationBuilder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("ask", ask))

    await app.initialize()
    await app.start()
    print("Bot đang chạy... 💬")
    await app.updater.start_polling()
    await app.idle()

if __name__ == "__main__":
    asyncio.run(main())