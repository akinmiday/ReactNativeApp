import { View, Text, Button, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";
import Display from "./Display";

export default function App() {
  const { container, input } = styles;
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <View style={container}>
      <TextInput
        style={input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={input}
        placeholder="Age"
        onChangeText={(text) => setAge(text)}
      />
      <Display name={name} age={age} />
    </View>
  );
}
