import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function App() {
  const [fruit, setFruit] = useState([
    { name: "Apple", key: "1" },
    { name: "Paw", key: "2" },
    { name: "Banana", key: "3" },
    { name: "Orange", key: "4" },
    { name: "Mango", key: "5" },
  ]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {fruit.map((fruits) => {
          return (
            <View key={fruits.key}>
              <Text style={styles.fruits}>{fruits.name}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  fruits: {
    fontSize: 23,
    backgroundColor: "yellow",
    marginTop: 20,
    padding: 20,
  },
});