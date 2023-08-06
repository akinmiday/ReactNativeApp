import { View, Switch } from "react-native";
import React from "react";
import styles from "./styles";

export default function CustomSwitch() {
  return (
    <View>
      <Switch
        trackColor={{ fasle: "red", true: "green" }}
        thumbColor={"black"}
        ios_backgroundColor={"red"}
        onValueChange={props.toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
