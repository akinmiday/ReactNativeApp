import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

export default function App() {
  const { container, label } = styles;

  return (
    <View style={container}>
      <View style={{ backgroundColor: "blue", flex: 1 }}></View>
      <View style={{ backgroundColor: "yellow", flex: 2 }}></View>
    </View>
  );
}
