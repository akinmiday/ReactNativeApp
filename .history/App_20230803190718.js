import { View, Text, Modal, TextInput, Button } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, input } = styles;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [age, setAge] = useState(0);

  return (
    <View style={container}>
      <TextInput
        style={input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={input}
        placeholder="Age"
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <Button title="Click" onPress={() => setOpen(true)} />
      <Modal visible={false}>
        <View style={container}>
          <Text>Modal Screen</Text>
        </View>
      </Modal>
    </View>
  );
}
