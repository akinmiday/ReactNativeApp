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
  ];

  return (
    <View style={container}>
      <CustomSectionList data={DATA} />
    </View>
  );
}
