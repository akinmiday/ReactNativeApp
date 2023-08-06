import { View, Text } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>Home</Text>
    </View>
  );
}
