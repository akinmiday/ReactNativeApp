import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
  const[name, setName] = useState("Olamide")
  const [age, setAge] = useState(27)

  return (
    <View style={styles.container}>
<Text></Text>
  </View>;
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
