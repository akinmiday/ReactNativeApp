import { View, Switch, Text, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";
import CustomButton from "./CustomButton";

export default function App() {
  const { container, text, input } = styles;

  const [name, setName] = useState("");
  const clickMe = () => {
    console.log(name);
  };

  return (
    <View style={container}>
      <TextInput
        style={input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <CustomButton name="Push" click={clickMe} />
    </View>
  );
}
