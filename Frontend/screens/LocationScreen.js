import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const LocationDetailScreen = () => {

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
      </TouchableOpacity>
      <Image style={styles.image} source={require('../assets/qadisha-valley.jpg')}/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Cedars of God</Text>
        <Text style={styles.subtitle}>Kadisha Valley, Lebanon</Text>
        <Text style={styles.description}>
          UNESCO World Heritage Site and a living testament to the enduring beauty of Lebanon's cedar forests. These ancient trees, some dating over a thousand years
        </Text>
        <Text style={styles.price}>Est. Price</Text>
        <Text style={styles.priceValue}>20$/individual</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Check on Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', 
  },
  backButton: {
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: '85%',
    height: 200,
    borderRadius: 30, 
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  priceValue: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200EE', 
    padding: 15,
    borderRadius: 10,
   
  },
  buttonText: {
    color: 'white',
  },

});

export default LocationDetailScreen;
