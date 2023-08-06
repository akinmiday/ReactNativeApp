import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function CustomButton(props) {
  const { name } = props;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
