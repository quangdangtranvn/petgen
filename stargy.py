# strargy.py

import numpy as np
import tensorflow as tf

class StrategyEngine:
    def __init__(self, model_path='petgen.h5', input_shape=(16, 16)):
        self.model_path = model_path
        self.input_shape = input_shape
        self.model = self._load_model()

    def _load_model(self):
        try:
            model = tf.keras.models.load_model(self.model_path)
            print(f"✅ StrategyEngine loaded model from {self.model_path}")
        except Exception as e:
            print(f"❌ Failed to load model: {e}")
            model = None
        return model

    def generate_input(self, seed=None):
        if seed:
            np.random.seed(seed)
        return np.random.rand(1, *self.input_shape)

    def predict_label(self, input_data=None):
        if input_data is None:
            input_data = self.generate_input()
        prediction = self.model.predict(input_data)
        label = np.argmax(prediction, axis=1)[0]
        print(f"🎯 StrategyEngine predicted label: {label}")
        return label

    def evaluate_confidence(self, input_data):
        prediction = self.model.predict(input_data)
        confidence = np.max(prediction)
        print(f"📊 Prediction confidence: {confidence:.2f}")
        return confidence
# strargy.py

from pyparsing import Word, alphas, nums, Group

class StrategyParser:
    def __init__(self):
        self.grammar = self._build_grammar()

    def _build_grammar(self):
        # Example PEG-style grammar: "command arg1 arg2"
        command = Word(alphas)
        arg = Word(nums)
        return Group(command + arg + arg)

    def parse(self, text):
        try:
            result = self.grammar.parse_string(text)
            print(f"✅ Parsed result: {result}")
            return result
        except Exception as e:
            print(f"❌ Parse error: {e}")
            return None