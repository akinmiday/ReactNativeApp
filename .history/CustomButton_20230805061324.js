import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function CustomButton(props) {
  const { button, text } = styles;
  const { name } = props;

  return (
    <View style={button}>
      <Text style={text}>{name}</Text>
    </View>
  );
}
