import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

export default function App() {
  const { container, label } = styles;
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number > 30) {
      console.warn("DOM is updated", number);
    }
  });

  return (
    <View style={container}>
      <Text style={label}>{number}</Text>
      <Button title="Update" onPress={() => setNumber(number - 10)} />
    </View>
  );
}
