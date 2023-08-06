import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

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
            <TouchableOpacity>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
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
  item: {
    fontSize: 22,
    backgroundColor: "yellow",
    marginTop: 30,
    padding: 20,
  },
});
