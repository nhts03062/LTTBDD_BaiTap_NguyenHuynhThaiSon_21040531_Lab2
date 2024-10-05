import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [result, setResult] = useState("");

  const solveQuadratic = () => {
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      setResult("Phương trình vô nghiệm");
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      setResult(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setResult(`Phương trình có hai nghiệm: x1 = ${x1}, x2 = ${x2}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Giải phương trình bậc 2: ax² + bx + c = 0</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập a"
        keyboardType="numeric"
        onChangeText={(text) => setA(parseFloat(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập b"
        keyboardType="numeric"
        onChangeText={(text) => setB(parseFloat(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập c"
        keyboardType="numeric"
        onChangeText={(text) => setC(parseFloat(text))}
      />
      <Button title="Giải" onPress={solveQuadratic} />
      <Text style={styles.result}>Kết quả: {result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});
