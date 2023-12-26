import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const OutlinedButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
    width: '70%',
    height: 30,
    marginTop: 15
  },
  buttonText: {
    color: "black",
  },
});

export default OutlinedButton;
