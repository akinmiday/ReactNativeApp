import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";

export default function App() {
  const [fruit, setFruit] = useState([
    { name: "Apple", key: "1" },
    { name: "Paw", key: "2" },
    { name: "Banana", key: "3" },
    { name: "Orange", key: "4" },
    { name: "watermelon", key: "5" },
    { name: "grape", key: "6" },
    { name: "guava", key: "7" },
    { name: "lemon", key: "8" },
    { name: "Pine-apple", key: "9" },
    { name: "Cherry", key: "10" },
    { name: "Tangerine", key: "11" },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={fruit}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.fruits}>{item.name}</Text>
          </View>
        )}
      />
      {/* <ScrollView>
        {fruit.map((fruits) => {
          return (
            <View key={fruits.key}>
              <Text style={styles.fruits}>{fruits.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
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
