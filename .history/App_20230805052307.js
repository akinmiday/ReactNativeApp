import { View, Switch } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, input } = styles;

  return (
    <View style={container}>
      <Switch />
    </View>
  );
}
