import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Click Me"
        color="red"
        onPress={() => alert("welcome to react native")}
        disabled={false}
      ></Button>
      <Button title="ok" color="blue" onPress={() => {}}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
