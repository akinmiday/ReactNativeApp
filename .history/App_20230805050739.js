import { View, Text, Button, TextInput, Switch } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, input } = styles;

  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={container}>
      <Switch 
      trackColor={}
      />
    </View>
  );
}
