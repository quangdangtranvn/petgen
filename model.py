# model.py
class ModelPredictor:
    def __init__(self, model_path='petgen.h5', input_shape=(16, 16), num_classes=10):
        self.model_path = model_path
        self.input_shape = input_shape
        self.num_classes = num_classes
        self.model = self._load_or_create_model()

    def _load_or_create_model(self):
        if not os.path.exists(self.model_path):
            print("🔧 Tạo model mới...")
            model = tf.keras.Sequential([
                tf.keras.layers.Input(shape=self.input_shape),
                tf.keras.layers.Flatten(),
                tf.keras.layers.Dense(128, activation='relu'),
                tf.keras.layers.Dense(self.num_classes, activation='softmax')
            ])
            model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
            model.save(self.model_path)
            return model
        else:
            print("📦 Load model đã có...")
            return tf.keras.models.load_model(self.model_path)

    def predict(self, input_data=None):
        if input_data is None:
            input_data = np.random.rand(1, *self.input_shape)
        prediction = self.model.predict(input_data)
        return np.argmax(prediction, axis=1)[0]
    async def predict(self):
        print("Đang dự đoán...")  # Simulate prediction
        await asyncio.sleep(1)
        print("Dự đoán hoàn tất.")