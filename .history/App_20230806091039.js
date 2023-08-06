import { View, Text, Pressable } from "react-native";
import styles from "./styles";

export default function App() {
  const { container, text } = styles;

  return (
    <View style={container}>
      <Pressable style={text}>
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
}
