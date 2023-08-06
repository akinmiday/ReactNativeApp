import React from "react";
import { View, Text, SectionList } from "react-native";
import styles from "./styles";

export default function CustomSectionList(props) {
  const { item, header } = styles;
  const Item = ({ title }) => (
    <View style={item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <View>
      <SectionList sections={data} />
    </View>
  );
}
