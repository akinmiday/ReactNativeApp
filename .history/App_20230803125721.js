import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Olamide", key: "1" },
    { name: "Bisola", key: "2" },
    { name: "Lante", key: "3" },
    { name: "Tolu", key: "4" },
    { name: "Kayode", key: "5" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
});
