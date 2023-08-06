import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Olamide");
  const [age, setAge] = useState(27);

  return (
    <View style={styles.container}>
      <Text>Enter your name: </Text>
      <TextInput style={styles.input} />
      <Text>
        My name is {name} and my age is {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBlockColor: "black",
  },
});
