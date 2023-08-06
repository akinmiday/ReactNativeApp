import { View, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text, input } = styles;
  const [name, setName] = useState("");

  return (
    <View style={container}>
      <TextInput
        placeholder="Enter Your Name"
        onChangeText={(text) => setName(text)}
      />
    </View>
  );
}
