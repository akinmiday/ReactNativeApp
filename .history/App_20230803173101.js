import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";

export default function App() {
  const { container } = styles;

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  return (
    <View style={container}>
      <TextInput onChangeText={(text) => setName(text)} />
    </View>
  );
}
