import { View, Text, SectionList } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text, title } = styles;
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
      data: ["Ice Cream", "Cake"],
    },
  ];

  const Item = ({ title }) => (
    <View>
      <Text style={title}>{title}</Text>
    </View>
  );

  return (
    <View style={container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
      />
    </View>
  );
}
