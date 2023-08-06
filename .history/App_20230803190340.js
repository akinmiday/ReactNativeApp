import { View, Text, Modal, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, input } = styles;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [age, setAge] = useState(0);

  return (
    <View style={container}>
      <TextInput style={input} />
      <Modal visible={false}>
        <View style={container}>
          <Text>Modal Screen</Text>
        </View>
      </Modal>
    </View>
  );
}
