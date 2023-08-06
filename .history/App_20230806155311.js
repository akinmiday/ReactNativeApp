import { View, Text } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text } = styles;

  return (
    <View style={container}>
      <Text style={text}>
        The Spokesperson of the state Fire Service, Hassan Hakeem Adekunle, who
        confirmed the incident in a statement said the deceased was mentally
        handicapped, adding that her corpse was recovered and handed over to her
        father.
      </Text>
    </View>
  );
}
