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
  const { container, input } = styles;
  const [age, setAge] = useState(0);
  return (
    <View style={container}>
      <TextInput style={input} />
      <TextInput style={input} />
    </View>
  );
}
