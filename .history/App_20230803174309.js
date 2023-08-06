import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import styles from "./styles";

export default function App() {
  const { container, input } = styles;

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const pressHandler = () =>{
    Alert.alert('Details', 'Are you sure you want to submit')
    {text: 'Yes', onPress:}
  }

  return (
    <View style={container}>
      <TextInput
        onChangeText={(text) => setName(text)}
        placeholder="Enter name"
        style={input}
      />
      <TextInput
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
        placeholder="Enter Age"
        style={input}
      />
      <TextInput
        onChange={(text) => setGender(text)}
        placeholder="Enter gender"
        style={input}
      />

      <Button title="submit" onPress={() => pressHandler()} />

      <Text>
        {name} {age} {gender}
      </Text>
    </View>
  );
}
