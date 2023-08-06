import { useState } from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import styles from "./styles";

export default function App() {
  const { container } = styles;

  const [name, setName] = useState("");

  return (
    <View style={container}>
      <Button />
    </View>
  );
}
