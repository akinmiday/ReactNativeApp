import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

export default function App() {
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
