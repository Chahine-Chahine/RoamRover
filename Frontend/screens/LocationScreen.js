import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import NavigationBar from '../components/common/NavigationBar';
import LocationCard from '../components/common/LocationCard';
import { TouchableOpacity } from 'react-native';

const LocationDetailScreen = () => {
  const route = useRoute();
  const { place } = route.params;
  return (
    <>
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.backButton}>
          {/* <Icon name= 'arrow'/> */}
        </TouchableOpacity>
        <LocationCard
           title={place.name}
           subtitle={place.subtitle}
           description={place.description}
           imageSource={place.image}
           estPrice={place.price}
           onCheckMap={() => {/* navigation logic for Check on Map */}}
           onAdd={() => {/* logic to handle Add action */}}
           />
      </ScrollView>
      <NavigationBar/>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
});

export default LocationDetailScreen;
