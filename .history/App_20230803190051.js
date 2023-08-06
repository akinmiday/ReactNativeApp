import { View, Text, Modal, TextInput } from "react-native";
import styles from "./styles";
import React from "react";

export default function App() {
  const { container } = styles;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [age, setAge] = useState(0);

  return (
    <View style={container}>
      <Text>Main Screen</Text>
      <Modal visible={false}>
        <View style={container}>
          <Text>Modal Screen</Text>
        </View>
      </Modal>
    </View>
  );
}
