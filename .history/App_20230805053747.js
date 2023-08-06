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
      <Text style={text}>Mic is {mic ? "On" : "Off"}</Text>
      <Switch
        trackColor={{ false: "red", true: "green" }}
        thumbColor={"black"}
        ios_backgroundColor={"red"}
        value={mic}
        onValueChange={() => setMic(!mic)}
      />
      <Text>Mic is {mic ? "On" : "Off"}</Text>
      <Switch
        trackColor={{ false: "red", true: "green" }}
        thumbColor={"black"}
        ios_backgroundColor={"red"}
        value={storage}
        onValueChange={() => setMic(!mic)}
      />
    </View>
  );
}
