import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  const[fruit, setFruit] useState([
    {name: "Apple"},
    {name: "Paw"},
    {name: "Banana"},
    {name: "Orange"},
    {name: "Mango"}
  ])
  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
