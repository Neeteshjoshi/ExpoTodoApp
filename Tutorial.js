import react, { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  // const [name, setName] = useState("John Doe");
  // const [age, setAge] = useState("20");

  const[people, setPeople] = useState([
    { name: "Buggy", id: "1" },
    { name: "luffy", id: "2" },
    { name: "Shanks", id: "3" },
    { name: "Roger", id: "4" },
    { name: "Ussop", id: "5" },
    { name: "Franky", id: "6" },
    { name: "Robin", id: "7" },
  ]);

  const handlePress = (id) => {
    setPeople((people) => {
      return people.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      {/* Text Input */}
      {/* <View>
      <Text>Enter Name</Text>
      <TextInput placeholder="e.g John Doe" onChangeText={(val) => setName(val)} style={styles.input}/>
      <Text>Enter Age</Text>
      <TextInput placeholder="e.g 20" onChangeText={(val) => setAge(val)} style={styles.input} keyboardType='number-pad' />
      </View>
      <View style={styles.output}>
        <Text>
          Welcome {name}, {age} years old
        </Text>
      </View> */}

      {/* List and Scroll View using MAP */}
      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}

      {/* List and Scrol View using FLATLIST */}
      <FlatList
        data={people} //name of the array
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )} //JSX to render the list
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    height: 30,
    width: 200,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: "red",
  },
  item: {
    backgroundColor: "aqua",
    padding: 20,
    margin: 20,
    fontSize: 20,
  },
});
