import { View, Text, TextInput, Appearance } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, input } = styles;

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

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
          padding: 20,
          backgroundColor: colorScheme === "light" ? "gray" : "white",
          color: colorScheme === "light" ? "white" : "black",
        }}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: colorScheme === "light" ? "gray" : "white",
          color: colorScheme === "light" ? "white" : "black",
        }}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />

      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          color: colorScheme === "light" ? "white" : "black",
        }}
      >
        {name} {age}
      </Text>
    </View>
  );
}
