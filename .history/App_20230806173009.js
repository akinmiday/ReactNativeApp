import { View, Text, TextInput, Appearance } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, input } = styles;

  const [name, setName] = useState(0);

  const colorScheme = Appearance.getColorScheme();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: colorScheme === "light" ? "white" : "gray",
      }}
    >
      <TextInput
        style={{
          marginTop: 20,
          backgroundColor: colorScheme === "light" ? "gray" : "white",
          color: colorScheme === "light" ? "white" : "black",
        }}
      />
    </View>
  );
}
