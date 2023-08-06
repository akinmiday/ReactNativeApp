import {
  View,
  Text,
  InputAccessoryView,
  TextInput,
  Button,
} from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, input } = styles;
  const [info, setInfo] = useState("");
  const inputAccessoryViewId = "id";

  return (
    <View style={container}>
      <TextInput
        placeholder="Enter Information"
        onChangeText={(text) => setInfo(text)}
        value={info}
        style={input}
        inputAccessoryViewID={inputAccessoryViewId}
      />
      <InputAccessoryView nativeID={inputAccessoryViewId}>
        <Button title="Clear Text" onPress={() => setInfo("")} />
      </InputAccessoryView>
    </View>
  );
}
