import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export default function App() {
  const [age, setAge] = useState(0);
  return (
    <View>
      <TextInput />
      <TextInput />
    </View>
  );
}
