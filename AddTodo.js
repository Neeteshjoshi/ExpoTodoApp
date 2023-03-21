import  { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function App({ handleSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo ..."
        onChangeText={handleChange}
      />
      <Button onPress={() => handleSubmit(text)} title='add todo' color='aqua' />
    </View>
  );
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})