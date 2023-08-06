import { View, Switch, Text } from "react-native";
import styles from "./styles";
import { useState } from "react";
import CustomSwitch from "./CustomSwitch";

export default function App() {
  const { container, text } = styles;

  const [location, setLocation] = useState(false);
  const [mic, setMic] = useState(false);
  const [storage, setStorage] = useState(false);

  const toggleLocation = () => {
    setLocation((previousState) => !previousState);
  };

  const toggleMic = () => {
    setMic((previousState) => !previousState);
  };

  const toggleStorage = () => {
    setStorage((previousState) => !previousState);
  };

  return (
    <View style={container}>
      <Text style={text}>Location is {location ? "On" : "Off"}</Text>
      <CustomSwitch isEnabled={location} toggleSwitch={setLocation} />
    </View>
  );
}
