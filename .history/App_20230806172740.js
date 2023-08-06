import { View, Text, TextInput, Appearance } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, input } = styles;

  const colorScheme = Appearance.getColorScheme();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: colorScheme === "light" ? "white" : "gray",
      }}
    >
      <TextInput style={input} />
    </View>
  );
}
