import { View, Text, Pressable } from "react-native";
import styles from "./styles";

export default function App() {
  const { container } = styles;

  return (
    <View style={container}>
      <Pressable>
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
}
