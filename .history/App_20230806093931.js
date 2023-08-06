import { View, Text, ScrollView, RefreshControl } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container } = styles;
  const [refresh, onRefresh] = useState(false);

  return (
    <View style={container}>
      <ScrollView refreshControl={<RefreshControl refreshing={refresh} />}>
        <Text>Pull refresh</Text>
      </ScrollView>
    </View>
  );
}
