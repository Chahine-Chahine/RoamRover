// LocationCard.js
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const LocationCard = ({ title, subtitle, description, imageSource, estPrice, onCheckMap, onAdd }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={imageSource}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>Est. Price</Text>
        <Text style={styles.priceValue}>{estPrice}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonEqual]} onPress={onCheckMap}>
          <Text style={styles.buttonText}>Check on Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonEqual]} onPress={onAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
  },
  
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  image: {
    width: '85%',
    height: 200,
    borderRadius: 30,
    marginTop: 20,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 18,
    fontSize: 18,
    color: 'gray',
  },
  descriptionTitle:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: '#938E8E'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
},
priceValue: {
    fontSize: 16,
    color: '#938E8E'
},
buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#A399DC',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
  buttonEqual: {
    flex: 1, 
    marginHorizontal: 10, 
  },
});

export default LocationCard;