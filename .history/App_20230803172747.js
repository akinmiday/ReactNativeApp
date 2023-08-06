import { useState } from "react";
import { View, Text, TextInput, Image, Button } from "react-native";
import styles from "./styles";

export default function App() {
  const { container, image } = styles;

  return (
    <View style={container}>
      <View style={image}>
        <Image source={images.pics[dice]} />
        <Button
          title="Roll"
          onPress={() => setDice(Math.floor(Math.random() * 6))}
        />
      </View>
    </View>
  );
}
