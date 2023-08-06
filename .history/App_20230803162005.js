import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import styles from "./styles";

export default function App() {
  const [age, setAge] = useState(0);
  return (
    <View style={styles.container}>
      <TextInput />
    </View>
  );
}
