import { View, Text, Button, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container } = styles;
  const [name, setName] = useState();

  return (
    <View style={container}>
      <TextInput placeholder="Name" />
    </View>
  );
}
