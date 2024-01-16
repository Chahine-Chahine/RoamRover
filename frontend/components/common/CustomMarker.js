import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

const CustomMarker = ({ title, description }) => {
    return (
      <View style={styles.customMarker}>
        <Text style={styles.markerTitle}>{title}</Text>
        <Text style={styles.markerDescription}>{description}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    customMarker: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 10,
      borderColor: '#6B46D9',
      borderWidth: 2,
    },
    markerTitle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    markerDescription: {
      textAlign: 'center',
    },
  });
  

export default CustomMarker;