from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import numpy as np

app = FastAPI()

# Cho phép FE truy cập từ mọi nguồn (hoặc cấu hình cụ thể)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # FE có thể thay bằng ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/tensor-data")
def get_tensor_data(total_samples: int = 9999, threshold: int = 15, min_val: int = 1, max_val: int = 30):
    numbers = np.random.randint(min_val, max_val + 1, size=total_samples)
    data = []
    for i, number in enumerate(numbers, start=1):
        even_odd = "even" if number % 2 == 0 else "odd"
        high_low = "high" if number >= threshold else "low"
        class_0 = [1, 0] if even_odd == "even" else [0, 1]
        class_1 = [0, 1] if high_low == "high" else [1, 0]
        data.append({
            "match": i,
            "number": number,
            "even_odd_label": even_odd,
            "high_low_label": high_low,
            "class_0_tensor": class_0,
            "class_1_tensor": class_1
        })
    return {"data": data}