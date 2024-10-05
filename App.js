import React, { useState } from "react";
import { TextInput, Button, StyleSheet, View, Text, Alert } from "react-native";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState(null);

  const handleSolve = () => {
    const aNum = parseFloat(a); // Đổi sang parseFloat để nhận giá trị thập phân
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    // Kiểm tra nếu tất cả đều là NaN hoặc là chuỗi rỗng
    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      Alert.alert("Lỗi", "Vui lòng nhập các số hợp lệ cho a, b và c");
      return;
    }

    // Trường hợp phương trình có vô số nghiệm: a == 0, b == 0, c == 0
    if (aNum === 0 && bNum === 0 && cNum === 0) {
      setResult("Phương trình có vô số nghiệm");
      return;
    }

    // Trường hợp phương trình vô nghiệm: a == 0, b == 0, nhưng c != 0
    if (aNum === 0 && bNum === 0 && cNum !== 0) {
      setResult("Phương trình vô nghiệm");
      return;
    }

    // Trường hợp phương trình bậc nhất: a == 0, b != 0
    if (aNum === 0 && bNum !== 0) {
      const root = -cNum / bNum;
      setResult(`Phương trình có nghiệm bậc nhất: x = ${root}`);
      return;
    }

    // Trường hợp phương trình bậc 2: a != 0
    const delta = bNum * bNum - 4 * aNum * cNum;

    if (delta < 0) {
      setResult("Phương trình vô nghiệm");
    } else if (delta === 0) {
      const root = -bNum / (2 * aNum);
      setResult(`Phương trình có nghiệm kép: x = ${root}`);
    } else {
      const root1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
      const root2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);
      setResult(
        `Phương trình có hai nghiệm phân biệt: x1 = ${root1}, x2 = ${root2}`
      );
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nhập a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        placeholder="Nhập b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />
      <TextInput
        placeholder="Nhập c"
        keyboardType="numeric"
        value={c}
        onChangeText={setC}
      />
      <Button title="Giải phương trình" onPress={handleSolve} />
      {result && <Text>Kết quả: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF", // Nền trắng
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "600",
    color: "#333333", // Màu văn bản đậm
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC", // Màu đường viền nhạt
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    color: "#333333", // Màu chữ nhập liệu
    backgroundColor: "#F9F9F9", // Màu nền ô nhập liệu
  },
  result: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#007BFF", // Màu kết quả xanh lam
  },
});
