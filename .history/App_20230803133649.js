import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

export default function App() {
  const { nname, container } = styles;

  const [people, setPeople] = useState([
    { name: "Olamide", key: "1" },
    { name: "Bisola", key: "2" },
    { name: "Lante", key: "3" },
    { name: "Tolu", key: "4" },
    { name: "Kayode", key: "5" },
  ]);

  const pressHandler = (name) => {
    console.log(name);
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
    backgroundColor: "yellow",
  },
  item: {
    fontSize: 22,
    backgroundColor: "yellow",
    marginTop: 30,
    padding: 20,
  },
});
