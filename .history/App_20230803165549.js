import { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";

export default function App() {
  const { container, image } = styles;

  const [dice, setDice] = useState(1);

  const images = {
    pics: {
      0: require("./assets/dice-1.png"),
    },
  };

  return (
    <View style={container}>
      <View style={image}>
        <Image />
      </View>
    </View>
  );
}
