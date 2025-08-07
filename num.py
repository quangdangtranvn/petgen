import numpy as np

  class PetGenAnalyzer:
    """Phân tích dữ liệu trận đấu cho PetGen."""

    def __init__(self, matches):
        self.matches = matches

    def get_even_odd(self):
        """Trả về bảng chẵn/lẻ cho các trận."""
        return [[1, 0] if x % 2 == 0 else [0, 1] for x in self.matches]

    def get_high_low(self, threshold=15):
        """Trả về bảng cao/thấp dựa trên ngưỡng."""
        return [[1, 0] if x < threshold else [0, 1] for x in self.matches]

# Bộ số
xyz = np.array([10, 11, 22])

# Bảng chẵn/lẻ: 0 = chẵn, 1 = lẻ
even_odd_table = np.array([[1 if x % 2 == 0 else 0, 1 if x % 2 != 0 else 0] for x in xyz])

# Bảng cao/thấp: ngưỡng là 15
high_low_table = np.array([[1 if x < 15 else 0, 1 if x >= 15 else 0] for x in xyz])

print("Bảng chẵn/lẻ:\n", even_odd_table)
print("Bảng cao/thấp:\n", high_low_table)


# Dữ liệu 30 trận: số từ 1 đến 30
matches = np.arange(1, 31)

# Class 0: Chẵn / Lẻ
# [1, 0] nếu chẵn; [0, 1] nếu lẻ
even_odd = np.array([[1, 0] if x % 2 == 0 else [0, 1] for x in matches])

# Class 1: Cao / Thấp (ngưỡng = 15)
# [1, 0] nếu thấp (<15); [0, 1] nếu cao (>=15)
high_low = np.array([[1, 0] if x < 15 else [0, 1] for x in matches])

# Kết hợp thành tensor 3D: (30 trận, 2 class, 2 giá trị)
tensor_3d = np.stack([even_odd, high_low], axis=1)

# In ra kết quả
print("Tensor 3D (shape):", tensor_3d.shape)
print("Tensor mẫu trận đầu tiên:\n", tensor_3d[0])