import { View, Switch, Text } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text } = styles;

  const [name, setName] = useState("");
  return (
    <View style={container}>
      <Text></Text>
    </View>
  );
}
