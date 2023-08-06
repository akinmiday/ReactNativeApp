import { View, Text } from "react-native";
import styles from "./styles";
import { useState } from "react";
import Greetings from "./Greetings";

export default function App() {
  const { container } = styles;

  return (
    <View style={container}>
      <Greetings />
    </View>
  );
}
