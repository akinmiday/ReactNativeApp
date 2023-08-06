import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text } = styles;
  const [count, setCount] = useState(0);

  return (
    <View style={container}>
      <Text></Text>
    </View>
  );
}
