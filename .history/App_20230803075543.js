import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  const[fruit, setFruit] useState([
    {name: "Apple" , key:1},
    {name: "Paw", key:2},
    {name: "Banana", key:3},
    {name: "Orange", key:4},
    {name: "Mango", key:5}
  ])
  return (<View style={styles.container}>
    {fruit.map(()=>{
      return(
        <View>
          <Text></Text>
        </View>
      )
    })}
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
