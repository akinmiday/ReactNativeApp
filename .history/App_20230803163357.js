import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";
import styles from "./styles";

export default function App() {
  const { container, input } = styles;

  const [age, setAge] = useState(0);

  const ageHandler = () => {
    if (age > 21) {
      Alert.alert("Yay!! you can have a drink");
    } else {
      Alert.alert("Oops! you are below the legal age limit");
    }
  };

  return (
    <View style={container}>
      <Image />
    </View>
  );
}
