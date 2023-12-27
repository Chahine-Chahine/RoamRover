import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../components/common/NavigationBar';


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
  {
    id: '2',
    title: 'Dream Park',
    subtitle: 'It is called funfair for a reason',
    price: '20$/individual',
    image: require('../assets/Baalbeck.webp'), 
  },
  {
    id: '2',
    title: 'Dream Park',
    subtitle: 'It is called funfair for a reason',
    price: '20$/individual',
    image: require('../assets/Baalbeck.webp'), 
  },
  {
    id: '2',
    title: 'Dream Park',
    subtitle: 'It is called funfair for a reason',
    price: '20$/individual',
    image: require('../assets/Baalbeck.webp'), 
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
    <View style={styles.buttonwrapper}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText} onPress={()=>{console.log("pressed")}}>Add</Text>
        </TouchableOpacity>
    </View>
        </>
  );

  return (
    <>
    <SafeAreaView style={styles.container}>
        <View >
            <Text style={styles.mainTitle}>Let’s Check What’s saved!</Text>
        </View>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    <NavigationBar/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 12,
    marginVertical: 20
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
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
  buttonwrapper: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  addButton: {
    borderWidth: 3,
    borderColor: '#A399DC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: 50,
    margin: 5
  },
  addButtonText: {
    color: '#A288DC',
  },
  
});

export default BookmarkScreen;
