import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const Greetings = () => {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>Greetings</Text>
    </View>
  );
};

export default Greetings;
