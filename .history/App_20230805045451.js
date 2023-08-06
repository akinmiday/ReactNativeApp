import { View, Text, Button, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, input } = styles;
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <View style={container}>
      <TextInput placeholder="Name" onChangeText={(text) => setName(text)} />
      <TextInput placeholder="Name" onChangeText={(text) => setAge(text)} />
    </View>
  );
}
