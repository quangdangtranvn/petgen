import asyncio
import discord
from discord.ext import commands
from model_init import ModelPredictor

intents = discord.Intents.default()
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"✅ Bot đã đăng nhập với tên: {bot.user}")
    predictor = ModelPredictor()
    result = predictor.predict()
    print("📊 Kết quả dự đoán:", result)

@bot.command()
async def predict(ctx):
    predictor = ModelPredictor()
    result = predictor.predict()
    await ctx.send(f"Kết quả dự đoán: {result}")

def main():
    try:
        bot.run("YOUR_TOKEN")
    except Exception as e:
        print("❌ Lỗi khi chạy bot:", e)

if __name__ == "__main__":
    main()