import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from '../components/common/Header';
import Search from '../components/common/Search';
import Card from '../components/common/Card';
import NavigationBar from '../components/common/NavigationBar';

const HomeScreen = () => {
  const places = [
    {
      id: '1',
      name: '3azme Caffe',
      description: 'Coffee shop in Beirut',
      price: '20$/individual',
      image: require('../assets/3azme.png'), 
    },
    {
      id: '2',
      name: 'China City',
      description: 'New concept for studying in natural environment',
      price: '20$/individual',
      image: require('../assets/chinacity.png'), 
    },
    {
      id: '3',
      name: 'China City',
      description: 'New concept for studying in natural environment',
      price: '20$/individual',
      image: require('../assets/chinacity.png'), 
    },
    {
      id: '4',
      name: 'China City',
      description: 'New concept for studying in natural environment',
      price: '20$/individual',
      image: require('../assets/chinacity.png'), 
    },
  ];

  const navigation = useNavigation();

  const navigateLocationPage = (placeId) => {
    navigation.navigate('LocationDetailScreen', { placeId });
  };


  return ( 
    <>
    <View style={styles.container}>
        <Header />
        <Search />

        <ScrollView style={styles.scrollView}>
          {places.map((place) => (
            <Card 
              key={place.id}
              onPress={() => navigateLocationPage(place.id)}
              title={place.name}
              description={place.description}
              price={place.price}
              uri={place.image}
            />
          ))}
        </ScrollView>
      </View>
      <NavigationBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: '#fff',
    alignItems: "center", // You can keep this if it's part of your design
  },
  scrollView: {
    width: '100%',
    height: '100%',
  }
});

export default HomeScreen;