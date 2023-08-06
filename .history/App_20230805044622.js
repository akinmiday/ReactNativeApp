import { View, Text, Button, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";
import Display from "./Display";

export default function App() {
  const { container, input } = styles;
  const [name, setName] = useState();

  return (
    <View style={container}>
      <TextInput
        style={input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />

      <Display name={name} />
      <Button title="Show" />
    </View>
  );
}
