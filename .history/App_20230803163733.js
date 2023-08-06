import { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";

export default function App() {
  const { container, input } = styles;

  return (
    <View style={container}>
      <Image source={require("./assets/test-.jpeg")} />
    </View>
  );
}
