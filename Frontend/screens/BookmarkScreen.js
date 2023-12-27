import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../components/common/NavigationBar';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



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
    id: '3',
    title: 'Dream Park',
    subtitle: 'It is called funfair for a reason',
    price: '20$/individual',
    image: require('../assets/Baalbeck.webp'), 
  },
  {
    id: '4',
    title: 'Dream Park',
    subtitle: 'It is called funfair for a reason',
    price: '20$/individual',
    image: require('../assets/Baalbeck.webp'), 
  },
  {
    id: '5',
    title: 'Dream Park',
    subtitle: 'It is called funfair for a reason',
    price: '20$/individual',
    image: require('../assets/Baalbeck.webp'), 
  },
  {
    id: '6',
    title: 'Dream Park',
    subtitle: 'It is called funfair for a reason',
    price: '20$/individual',
    image: require('../assets/Baalbeck.webp'), 
  },
];

const BookmarkScreen = () => {

  const renderRightActions = (progress, dragX) => {
    return (
      <View style={{ width: 170, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => console.log('Add Pressed')} style={styles.rightAction}>
          <Text style={styles.actionText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Delete Pressed')} style={[styles.rightAction, { backgroundColor: '#FF8556' }]}>
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCard = ({ item }) => (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={[styles.card, { height: 140 }]}>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </Swipeable>
  );

  return (
    <>
     <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.mainTitle}>Let’s Check What’s saved!</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <NavigationBar/>
      </GestureHandlerRootView>
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
    height: 150,
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
  rightAction: {
    height: 100,
    backgroundColor: '#A78BFA',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    top: 25
    
  
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
    padding: 20,
  },
});

export default BookmarkScreen;