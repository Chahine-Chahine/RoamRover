import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const GenerateTrip = () => {

  const navigation = useNavigation();
  const handleAIGeneratePress = () => {
    
  };

  const handleCreateCustomTripPress = () => {
   navigation.navigate('CustomtripScreen')
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topHalf} onPress={handleAIGeneratePress}>
        <Image
          source={require('../assets/AI-generate.png')} 
          style={styles.icon}
        />
        <Text style={styles.text}>AI Generate</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.bottomHalf} onPress={handleCreateCustomTripPress}>
        <Image
          source={require('../assets/Custom-trip.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>Create Custom Trip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  topHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000', 
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 150, 
    height: 150, 
    marginBottom: 40, 
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GenerateTrip;
