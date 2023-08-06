import { useState } from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import styles from "./styles";

export default function App() {
  const { container, image } = styles;

  const [dice, setDice] = useState(1);

  const images = {
    pics: {
      0: require("./assets/dice-1.png"),
      1: require("./assets/dice-2.png"),
      2: require("./assets/dice-3.png"),
      3: require("./assets/dice-4.png"),
      4: require("./assets/dice-5.png"),
      5: require("./assets/dice-6.png"),
    },
  };

  return (
    <View style={container}>
      <View style={image}>
        <Image source={images.pics[dice]} />
        <Button
          title="Roll"
          onPress={() => setDice(Math.floor(Math.random()))}
        />
      </View>
    </View>
  );
}
