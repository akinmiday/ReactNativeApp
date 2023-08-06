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
    console.warn("DOM is updated", number);

    if(number>30)
  });

  return (
    <View style={container}>
      <Text style={label}>{number}</Text>
      <Button title="Update" onPress={() => setNumber(number + 1)} />
    </View>
  );
}
