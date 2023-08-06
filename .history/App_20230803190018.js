import { View, Text, Modal } from "react-native";
import styles from "./styles";
import React from "react";

export default function App() {
  const { container } = styles;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState();

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
