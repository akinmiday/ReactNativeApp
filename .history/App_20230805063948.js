import { View, TextInput, ActivityIndicator, Button } from "react-native";
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
      <ActivityIndicator size="large" color="red" animating={shown} />
      <Button title="Show" onPress={() => setShown(true)} />
    </View>
  );
}
