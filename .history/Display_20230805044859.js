import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function Display(props) {
  const { container, text } = styles;
  const { name } = props;

  return (
    <View style={container}>
      <Text style={text}>Hello {name}, welcome to our App</Text>
    </View>
  );
}
