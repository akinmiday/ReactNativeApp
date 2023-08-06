import {
  View,
  TextInput,
  ActivityIndicator,
  Button,
  Alert,
} from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text, input } = styles;
  const [name, setName] = useState("");
  const [shown, setShown] = useState(false);

  const clickMe = () => {
    setShown(true);
    setTimeout(() => {
      setShown(false);
      Alert.alert("Welcome", "Welcome to our app");
    }, 3000);
  };

  return (
    <View style={container}>
      <TextInput
        style={input}
        placeholder="Enter Your Name"
        onChangeText={(text) => setName(text)}
      />
      <ActivityIndicator size="large" color="red" animating={shown} />
      <Button title="Show" onPress={() => clickMe()} />
    </View>
  );
}
