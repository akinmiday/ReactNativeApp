import { View, Text, Platform } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, value } = styles;

  return (
    <View style={container}>
      <Text>Hello</Text>
    </View>
  );
}
