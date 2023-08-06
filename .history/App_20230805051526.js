import { View, Switch } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, input } = styles;

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <View style={container}>
      <Switch
        trackColor={{ false: "red", true: "green" }}
        thumbColor={isEnabled ? "Yellow" : "pink"}
        onValueChange={toggleSwitch}
        ios_backgroundColor={"red"}
        value={isEnabled}
      />
    </View>
  );
}
