import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  const pressHandler = (name) => {
    console.log();
  };

  return (
    <View style={container}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "pink",
  },
  nname: {
    fontSize: 22,
    backgroundColor: "yellow",
    marginTop: 30,
    padding: 20,
  },
});
