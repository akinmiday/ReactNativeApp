import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text } = styles;
  const [count, setCount] = useState(0);

  return (
    <View style={container}>
      <Text>{count}</Text>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "red" : "yellow",
          },
        ]}
        onPress={() => setCount(count + 1)}
      >
        {({ pressed }) => (
          <Text style={text}> {pressed ? "Pressed" : "Press Me"}</Text>
        )}
      </Pressable>
    </View>
  );
}
