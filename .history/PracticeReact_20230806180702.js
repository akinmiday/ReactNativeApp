import { View, Text, SectionList } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text, title, item, header } = styles;
  const DATA = [
    {
      title: "Main Items",
      data: ["Pizza", "Burger"],
    },
    {
      title: "Sides",
      data: ["French fries", "Onion rings"],
    },
    {
      title: "Drinks",
      data: ["Coca Cola", "Sprite", "Water"],
    },
    {
      title: "Derserts",
      data: ["Ice Cream", "Cake"],
    },
  ];

  const Item = ({ title }) => (
    <View style={item}>
      <Text style={title}>{title}</Text>
    </View>
  );

  return (
    <View style={container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={header}>{title}</Text>
        )}
      />
    </View>
  );
}





// Pressable



import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, text } = styles;
  const [count, setCount] = useState(0);

  return (
    <View style={container}>
      <Text>{count}</Text>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "red" : "yellow",
          },
        ]}
        onPress={() => setCount(count + 1)}
      >
        {({ pressed }) => (
          <Text style={text}> {pressed ? "Pressed" : "Press Me"}</Text>
        )}
      </Pressable>
    </View>
  );
}



// collect device version and type


import { View, Text, Platform } from "react-native";
import styles from "./styles";
import { useState } from "react";

export default function App() {
  const { container, value } = styles;

  return (
    <View style={container}>
      <Text>OS</Text>
      <Text style={value}>{Platform.OS}</Text>

      <Text>OS Version</Text>
      <Text style={value}>{Platform.Version}</Text>

      <Text>IsTV</Text>
      <Text style={value}>{Platform.isTV.toString()}</Text>

      {Platform.OS === "ios" && (
        <>
          <Text>isPad</Text>
          <Text style={value}>{Platform.isPad.toString()}</Text>
        </>
      )}

      <Text>Constants</Text>
      <Text style={value}>{JSON.stringify(Platform.constants, null, 2)}</Text>
    </View>
  );
}

