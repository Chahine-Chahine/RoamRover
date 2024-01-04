import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ActionButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
    button: {
      backgroundColor: '#A78BFA',
      borderRadius: 25,
      alignItems: 'center',
      marginVertical: 12,
      marginHorizontal: 25,
      paddingVertical: 12,
      paddingHorizontal: 40,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
})


export default ActionButton;