import { View, Switch } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container } = styles;

  const [location, setLocation] = useState(false);
  const [mic, setMic] = useState(false);
  const [storage, setStorage] = useState(false);

  return (
    <View style={container}>
      <Switch />
    </View>
  );
}
