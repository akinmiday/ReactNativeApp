import { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";

export default function App() {
  const { container, image } = styles;

  return (
    <View style={container}>
      <View style={image}>
        <Image />
      </View>
    </View>
  );
}
