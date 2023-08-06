import { View, Text, TextInput, Appearance } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container } = styles;

  const colorScheme = Appearance.getColorScheme();

  return (
    <View style={container}>
      <Text>Hello</Text>
    </View>
  );
}
