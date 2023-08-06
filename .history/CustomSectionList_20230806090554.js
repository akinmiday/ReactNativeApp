import React from "react";
import { View, Text, SectionList } from "react-native";
import styles from "./styles";

export default function CustomSectionList(props) {
  const { data } = props;

  const { item, header } = styles;
  const Item = ({ title }) => (
    <View style={item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <View>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={header}>{title}</Text>
        )}
      />
    </View>
  );
}
