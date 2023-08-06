import { View, Text } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text } = styles;

  return (
    <View style={container}>
      <Text style={text}></Text>
    </View>
  );
}
