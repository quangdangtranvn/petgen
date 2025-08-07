import numpy as np

# Bộ số
xyz = np.array([10, 11, 22])

# Bảng chẵn/lẻ: 0 = chẵn, 1 = lẻ
even_odd_table = np.array([[1 if x % 2 == 0 else 0, 1 if x % 2 != 0 else 0] for x in xyz])

# Bảng cao/thấp: ngưỡng là 15
high_low_table = np.array([[1 if x < 15 else 0, 1 if x >= 15 else 0] for x in xyz])

print("Bảng chẵn/lẻ:\n", even_odd_table)
print("Bảng cao/thấp:\n", high_low_table)