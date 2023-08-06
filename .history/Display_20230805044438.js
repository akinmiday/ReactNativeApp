import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function Display() {
  const { container, text } = styles;
  return (
    <View style={container}>
      <Text style={text}>Display</Text>
    </View>
  );
}
