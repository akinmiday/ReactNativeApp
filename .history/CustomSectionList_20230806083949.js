import React from "react";
import { View, Text, SectionList } from "react-native";
import styles from "./styles";

export default function CustomSectionList() {
  const { item, header, title } = styles;
  const Item = ({ title }) => (
    <View style={item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <View>
      <Text></Text>
    </View>
  );
}
