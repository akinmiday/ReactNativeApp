import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";

export default function App() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
});
