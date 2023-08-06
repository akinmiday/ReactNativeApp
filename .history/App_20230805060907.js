import { View, Switch, Text, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text } = styles;

  const [name, setName] = useState("");
  return (
    <View style={container}>
      <TextInput placeholder="Name" onChangeText={(text) => setName(text)} />
    </View>
  );
}
