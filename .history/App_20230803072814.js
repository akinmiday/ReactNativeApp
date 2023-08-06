import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Programming");
  const [person, setPerson] = useState({ name: "tony", age: 30 });

  const clickMe = () => {
    setName("Knowlegde");
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.button}>
        <Button title="change" onPress={clickMe} />
      </View>
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
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 19,
    margin: 20,
  },
});
