import { View, Text, ScrollView, Platform } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, value } = styles;

  return (
    <View style={container}>
      <Text>OS</Text>
      <Text style={value}>{Platform.OS}</Text>

      <Text>OS Version</Text>
      <Text>{Platform.Version}</Text>

      <Text>IsTV</Text>
      <Text style={value}>{Platform.isTV.toString()}</Text>

      {Platform.OS === "ios" && (
        <>
          <Text>isPad</Text>
          <Text>{Platform.isPad.toString()}</Text>
        </>
      )}
    </View>
  );
}
