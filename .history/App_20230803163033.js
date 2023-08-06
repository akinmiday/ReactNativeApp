import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import styles from "./styles";

export default function App() {
  const { container, input } = styles;

  const [age, setAge] = useState(0);

  const ageHandler = () => {
    if (age > 21) {
      Alert.alert("Yay!! you can have a drink");
    } else {
      Alert.alert("Oops! you are below the age limit");
    }
  };

  return (
    <View style={container}>
      <TextInput style={input} />
      <TextInput style={input} onChangeText={(text) => setAge(text)} />
      <Button title="Can i Drink" onPress={() => ageHandler()} />
    </View>
  );
}
