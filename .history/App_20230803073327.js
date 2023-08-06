import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Programming");
  const [person, setPerson] = useState({ name: "tony", age: 30 });

  const clickMe = () => {
    setName("Knowlegde");
    setPerson({ name: "Akinmiday", age: 28 });
  };

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
