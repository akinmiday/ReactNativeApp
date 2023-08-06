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
      <View style={{ backgroundColor: "yellow", flex: 1 }}></View>
      <View style={{ backgroundColor: "green", flex: 1 }}></View>
      <View style={{ backgroundColor: "orange", flex: 1 }}></View>
      <View style={{ backgroundColor: "black", flex: 1 }}></View>
      <View style={{ backgroundColor: "pink", flex: 1 }}></View>
    </View>
  );
}
