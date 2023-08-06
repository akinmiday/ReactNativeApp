import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const Greetings = () => {
  const { container } = styles;

  const [name, setName] = useState("");

  return (
    <View style={container}>
      <TextInput placeholder="Name" onChangeText={(text) => setName(text)} />
    </View>
  );
};

export default Greetings;
