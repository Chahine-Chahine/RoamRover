import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const ActionButton = ({ title, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: 350,
    alignItems: 'center', 
    position: 'absolute', 
    bottom: 65,
  },
  button: {
    backgroundColor: 'transparent', 
    backgroundColor: '#A78BFA', 
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 2,
    paddingHorizontal: 120,
    paddingVertical: 12,
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
  },
});

export default ActionButton;


