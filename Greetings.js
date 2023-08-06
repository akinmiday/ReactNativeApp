import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const Greetings = () => {
  const { container, input } = styles;

  const [name, setName] = useState("");

  return (
    <View style={container}>
      <TextInput
        style={input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <Button title="Greet" onPress={() => console.log(name)} />
    </View>
  );
};

export default Greetings;
