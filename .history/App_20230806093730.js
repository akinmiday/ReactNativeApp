import { View, Text, ScrollView, RefreshControl } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container } = styles;

  return (
    <View style={container}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={false} />}
      ></ScrollView>
    </View>
  );
}
