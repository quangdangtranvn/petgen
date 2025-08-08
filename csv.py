import csv
from openpyxl import Workbook

class PetGenTensorWriter:
    def __init__(self, total_matches=30, threshold=15):
        self.total_matches = total_matches
        self.threshold = threshold
        self.data = []

    def generate_data(self):
        for i in range(1, self.total_matches + 1):
            number = i
            even_odd = "even" if number % 2 == 0 else "odd"
            high_low = "high" if number >= self.threshold else "low"
            class_0 = "[1 0]" if even_odd == "even" else "[0 1]"
            class_1 = "[0 1]" if high_low == "high" else "[1 0]"
            self.data.append([i, number, even_odd, high_low, class_0, class_1])

    def write_csv(self, filename="petgen_tensor.csv"):
        with open(filename, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(["match", "number", "even_odd_label", "high_low_label", "class_0_tensor", "class_1_tensor"])
            writer.writerows(self.data)

    def write_excel(self, filename="petgen_tensor.xlsx"):
        wb = Workbook()
        ws = wb.active
        ws.title = "PetGenTensor"
        headers = ["match", "number", "even_odd_label", "high_low_label", "class_0_tensor", "class_1_tensor"]
        ws.append(headers)
        for row in self.data:
            ws.append(row)
        wb.save(filename)

# 🧪 Example usage
if __name__ == "__main__":
    writer = PetGenTensorWriter()
    writer.generate_data()
    writer.write_csv()
    writer.write_excel()