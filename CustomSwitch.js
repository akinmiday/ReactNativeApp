import { View, Switch } from "react-native";
import React from "react";

export default function CustomSwitch(props) {
  const { toggleSwitch, isEnabled } = props;
  return (
    <View>
      <Switch
        trackColor={{ false: "red", true: "green" }}
        thumbColor={"black"}
        ios_backgroundColor={"red"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
