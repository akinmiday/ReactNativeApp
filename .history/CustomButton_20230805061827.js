import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function CustomButton(props) {
  const { button, text } = styles;
  const { name, click } = props;

  return (
    <TouchableOpacity onPress={() => click}>
      <View style={button}>
        <Text style={text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
