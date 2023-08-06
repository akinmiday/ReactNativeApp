import { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";

const ImageDisplay = require("./assets/test-.jpeg");

export default function App() {
  const { container, image } = styles;

  return (
    <View style={container}>
      <View style={image}>
        <Image source={ImageDisplay} />
      </View>
    </View>
  );
}
