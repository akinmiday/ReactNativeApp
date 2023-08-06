import { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";

const ImageDisplay = require("./assets/test-.jpeg");

export default function App() {
  const { container, input } = styles;

  return (
    <View style={container}>
      <Image source={ImageDisplay} />
    </View>
  );
}
