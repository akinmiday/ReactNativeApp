import { View, Text, Modal } from "react-native";
import styles from "./styles";
import React from "react";

export default function App() {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>Main Screen</Text>
      <Modal>
        <View>
          <Text>Modal Screen</Text>
        </View>
      </Modal>
    </View>
  );
}
