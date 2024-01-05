import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const OutlinedButton = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress}>
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
    width: '85%',
    height: 30,
    marginTop: 15,
    position: 'absolute',
    bottom: -30,
    left: -20
  },
  buttonText: {
    color: "white",
    fontWeight: '600'
  },
});

export default OutlinedButton;
