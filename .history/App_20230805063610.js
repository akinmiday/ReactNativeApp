import { View, TextInput, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text, input } = styles;
  const [name, setName] = useState("");
  const [shown, setShown] = useState(false);

  return (
    <View style={container}>
      <TextInput
        style={input}
        placeholder="Enter Your Name"
        onChangeText={(text) => setName(text)}
      />
    </View>
  );
}
