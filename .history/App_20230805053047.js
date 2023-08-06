import { View, Switch, Text } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text } = styles;

  const [location, setLocation] = useState(false);
  const [mic, setMic] = useState(false);
  const [storage, setStorage] = useState(false);

  return (
    <View style={container}>
      <Text style={text}>Location is {location ? "On" : "Off"}</Text>
      <Switch
        trackColor={{ false: "red", true: "green" }}
        thumbColor={"black"}
        ios_backgroundColor={"red"}
        onValueChange={() => setLocation(!location)}
        value={location}
      />
      <Switch />
      <Switch />
    </View>
  );
}
