import React from "react";
import { View, Text, SectionList } from "react-native";
import styles from "./styles";

export default function CustomSectionList() {
  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  return (
    <View>
      <Text></Text>
    </View>
  );
}
