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

def go_command(update: Update, context: CallbackContext) -> None:
    # Example TensorFlow operation
    # Here you can add your TensorFlow model loading and prediction logic
    model = tf.keras.models.load_model('your_model.h5')  # Load your pre-trained model
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

    await app.initialize()
    await app.start()
    print("Bot đang chạy... 💬")
    await app.updater.start_polling()
    await app.idle()

if __name__ == "__main__":
    asyncio.run(main())
elif __name__ == '__main__':
    main()