import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const AddItemScreen = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddItem = () => {
    if (title.trim() === '' || description.trim() === '') {
      console.log('Please fill in all fields');
      return;
    }
onSubmit({title,description})

setTitle('');
    setDescription('');

  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Title'
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder='Description'
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddItem}
      >
        <Text>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    borderRadius: 5
  }
});
