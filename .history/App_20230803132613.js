import styles from "./styles";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const { container, item } = styles;

  const [people, setPeople] = useState([
    { name: "Olamide", key: "1" },
    { name: "Bisola", key: "2" },
    { name: "Lante", key: "3" },
    { name: "Tolu", key: "4" },
    { name: "Kayode", key: "5" },
  ]);

  const pressHandler = (name) => {
    console.log();
  };

  return (
    <View style={container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => pressHandler(item.name)}>
              <Text style={item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
