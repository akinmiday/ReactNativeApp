import { View, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text, input } = styles;

  return (
    <View style={container}>
      <TextInput placeholder="Enter Your Name" on />
    </View>
  );
}
