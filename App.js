import react, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback } from "react-native";
import Header from "./Header";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { Keyboard } from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", id: "1" },
    { text: "create an app", id: "2" },
    { text: "play on the switch", id: "3" },
  ]);

  const handleSubmit = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, id: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        { text: "Ok", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  const handlePress = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.id != id);
    });
  };
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard')
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* Todo form */}
        <AddTodo handleSubmit={handleSubmit} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} handlePress={handlePress} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
