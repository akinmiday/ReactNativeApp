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

  const DATA2 = [
    {
      title: "OS",
      data: ["Android", "IOS"],
    },
    {
      title: "Computer",
      data: ["Windows", "Linux", "Mac"],
    },
  ];

  return (
    <View style={container}>
      <CustomSectionList data={DATA} />
      <CustomSectionList data={DATA} />
    </View>
  );
}
