import { useEffect, useState } from "react";
import { View, Text, Modal } from "react-native";
import styles from "./styles";

export default function App() {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>Main Screen</Text>
      <Modal>
        <Text>Modal Screen</Text>
      </Modal>
    </View>
  );
}
