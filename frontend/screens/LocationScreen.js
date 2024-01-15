import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import NavigationBar from '../components/common/NavigationBar';
import LocationCard from '../components/common/LocationCard';


const LocationDetailScreen = () => {
  const route = useRoute();
  const { location } = route.params;
  const navigation = useNavigation();
  const navigateMap = () => {
  navigation.navigate('MapScreen')
  }
  return (
    <>
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <LocationCard
           title={location.title}
           subtitle={location.area}
           description={location.description}
           imageSource={location.image}
           estPrice={location.estimated_price}
           onCheckMap={navigateMap}
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
