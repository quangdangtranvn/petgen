import asyncio
from bot import ModelPredictor, app


async def main():
    await app.initialize()
    await app.start()
    print("🤖 Bot đang chạy... 💬")
    await app.updater.start_polling()
    await app.idle()

if __name__ == "__main__":
    try:
        asyncio.run(main())
        predictor = ModelPredictor()
        predictor.predict()
    except Exception as e:
        print("⚠️ Đang khởi tạo bản dự đoán và sửa lỗi module:", e)
        # Thử lại nếu lỗi
        asyncio.run(main())
        predictor = ModelPredictor()
        predictor.predict()