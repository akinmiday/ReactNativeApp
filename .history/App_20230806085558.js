import { View, Text } from "react-native";
import styles from "./styles";
import { useState } from "react";
import CustomSectionList from "./CustomSectionList";

export default function App() {
  const { container } = styles;
  const DATA = [
    {
      title: "Main Items",
      data: ["Pizza", "Burger"],
    },
    {
      title: "Sides",
      data: ["French fries", "Onion rings"],
    },
    {
      title: "Drinks",
      data: ["Coca Cola", "Sprite", "Water"],
    },
    {
      title: "Derserts",
      data: ["Ice Cream", "Cake", "Rolls"],
    },
  ];

  return (
    <View style={container}>
      <CustomSectionList data={DATA} />
    </View>
  );
}
