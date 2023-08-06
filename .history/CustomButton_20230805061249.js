import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function CustomButton(props) {
  const { button } = styles;
  const { name } = props;
  return (
    <View style={button}>
      <Text>{name}</Text>
    </View>
  );
}
