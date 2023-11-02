import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CustomPrompt({ visible, onClose, onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add comment</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="Type your comment here"
          />
          <Button
            title="Submit"
            onPress={() => {
              onSubmit(inputValue);
              setInputValue(''); // Clear the input
            }}
          />
          <Button title="Cancel" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
