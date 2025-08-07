1 | import random
 2 | import tensorflow as tf
 3 | from telegram import Update
 4 | from telegram.ext import (
 5 |     ApplicationBuilder, CommandHandler, ContextTypes
 6 | )
 7 |
 8 | # Model Predictor Class
 9 | class ModelAI:
10 |     def __init__(self):
11 |         self.model = self.load_model()
12 |
13 |     def load_model(self):
14 |         try:
15 |             model = tf.keras.models.load_model("petgen.h5")
16 |         except:
17 |             model = tf.keras.Sequential([
18 |                 tf.keras.layers.Flatten(input_shape=(16, 16)),
19 |                 tf.keras.layers.Dense(128, activation='relu'),
20 |                 tf.keras.layers.Dense(10, activation='softmax')
21 |             ])
22 |             model.compile(optimizer='adam',
23 |                           loss='sparse_categorical_crossentropy',
24 |                           metrics=['accuracy'])
25 |         return model
26 |
27 |     def predict(self, data=None):
28 |         if data is None:
29 |             data = [[random.randint(0, 255) for _ in range(16)] for _ in range(16)]
30 |         prediction = self.model.predict(tf.convert_to_tensor([data]))
31 |         return prediction[0]
32 |
33 | predictor = ModelAI()
34 |
35 | # Command: /go
36 | async def go(update: Update, context: ContextTypes.DEFAULT_TYPE):
37 |     data = [[10, 22, 11] + [0]*13 for _ in range(16)]  # padded to match (16, 16)
38 |     result = predictor.predict(data)
39 |     await update.message.reply_text(f"Prediction result: {result[2]}")
40 |
41 | # Command: /reward
42 | async def reward(update: Update, context: ContextTypes.DEFAULT_TYPE):
43 |     message = (
44 |         "🏦 *Bank Transaction Summary*\n"
45 |         "💰 You received: 1,000,000 VND\n"
46 |         "🧾 Description: Monthly reward\n"
47 |         "🎉 Status: Successful"
48 |     )
49 |     await update.message.reply_markdown(message)
50 |
51 | # Command: /start
52 | async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
53 |     await update.message.reply_text("Welcome to PetGen Bot! 🐾 Type /go to get started.")
54 |
55 | # Command: /ask
56 | async def ask(update: Update, context: ContextTypes.DEFAULT_TYPE):
57 |     await update.message.reply_text("Ask me anything! I'm here to help. 🤖")
58 |
59 | # Main function
60 | def main():
61 |     app = ApplicationBuilder().token("7627492584:AAE3wed1N4oiBrRMrdu6hJCdzOPgQ00iZ6Q").build()
62 |
63 |     app.add_handler(CommandHandler("start", start))
64 |     app.add_handler(CommandHandler("ask", ask))
65 |     app.add_handler(CommandHandler("go", go))
66 |     app.add_handler(CommandHandler("reward", reward))
67 |
68 |     app.run_polling()
69 |
70 | if __name__ == "__main__":
71 |     main()