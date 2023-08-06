import { View, Image } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container } = styles;

  return (
    <View style={container}>
      <Image
        source={require("./assets/lease-nest-1.png")}
        style={{ height: 100, width: 200 }}
        resizeMode="stretch"
      />
    </View>
  );
}
