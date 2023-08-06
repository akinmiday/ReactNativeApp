import { View, Image } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container } = styles;

  return (
    <View style={container}>
      <Image
        source={require("./assets/lease-nest-1.png")}
        style={{
          height: 200,
          width: 200,
          borderWidth: 20,
        }}
        resizeMode="contain"
      />
    </View>
  );
}
