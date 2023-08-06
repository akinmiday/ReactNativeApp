import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
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
              <Text style={nname}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "pink",
  },
  nname: {
    fontSize: 22,
    backgroundColor: "yellow",
    marginTop: 30,
    padding: 20,
  },
});
