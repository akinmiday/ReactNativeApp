import { View, Text, Alert } from "react-native";
import React from "react";
import styles from "./styles";

export default function Display(props) {
  const { container, text } = styles;
  const { name, age } = props;

  if (age >= 18) {
    Alert.alert("Notice", "You can Drink");
  }

  return (
    <View style={container}>
      <Text style={text}>Hello {name}, welcome to our App</Text>
    </View>
  );
}
