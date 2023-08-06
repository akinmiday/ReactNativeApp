import { useState } from "react";
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
  const { container, input, button } = styles;

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const pressHandler = () => {
    Alert.alert("Details", "Are you sure you want to submit ?", [
      { text: "Yes", onPress: () => console.log(name, age, gender) },
      { text: "No", onPress: () => noHandler() },
    ]);
  };

  const noHandler = () => {
    setName("");
    setAge(0);
    setGender("");
  };

  return (
    <View style={container}>
      <Text></Text>
    </View>
  );
}
