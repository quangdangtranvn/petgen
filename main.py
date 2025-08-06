# main.py
from telegram.ext import ApplicationBuilder, CommandHandler
from bot import start, ask, go_command, reward_observation
from dotenv import load_dotenv
import os, asyncio

load_dotenv()
TOKEN = os.getenv("BOT_TOKEN")

async def main():
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("ask", ask))
    app.add_handler(CommandHandler("go", go_command))
    app.add_handler(CommandHandler("reward", reward_observation))
    print("🚀 Bot đang chạy...")
    await app.run_polling()

if __name__ == "__main__":
    asyncio.run(main())