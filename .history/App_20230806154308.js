import { View, Text, InputAccessoryView, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container } = styles;
  const [info, setInfo] = useState("");
  const InputAccessoryView = "id";

  return (
    <View style={container}>
      <TextInput
        placeholder="Enter Information"
        onChangeText={(text) => setInfo(text)}
        value={info}
        style={input}
      />
    </View>
  );
}
