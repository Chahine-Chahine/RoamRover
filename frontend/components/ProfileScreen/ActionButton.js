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
  container:{
    backgroundColor: 'transparent',
  },
    button: {
      backgroundColor: '#A78BFA',
      borderRadius: 25,
      alignItems: 'center',
      marginVertical: 2,
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