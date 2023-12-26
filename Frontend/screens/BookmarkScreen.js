import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    title: 'Sour Beach',
    subtitle: 'Cloud 59 - Public beach',
    price: '20$/individual',
    image: require('../assets/3azme.png'), 
  },
  {
    id: '2',
    title: 'Dream Park',
    subtitle: 'It is called funfair for a reason',
    price: '20$/individual',
    image: require('../assets/Baalbeck.webp'), 
  },
];

const BookmarkScreen = () => {

  const renderCard = ({ item }) => (
    <>
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
        </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={item => item.id}
      />
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, 
    shadowOpacity: 0.1, 
  },
  cardImage: {
    width: 115,
    height: '100%',
  },
  cardContent: {
    padding: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#A399DC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50
  },
  addButtonText: {
    color: 'white',
  },
  
});

export default BookmarkScreen;
