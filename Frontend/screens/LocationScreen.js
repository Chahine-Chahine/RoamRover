import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import LocationCard from '../components/common/LocationCard';
import NavigationBar from '../components/common/NavigationBar';

const LocationDetailScreen = () => {
  return (
    <>
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.backButton}>
          {/* <Icon name= 'arrow'/> */}
        </TouchableOpacity>
        <LocationCard
          title="Cedars of God"
          subtitle="Kadisha Valley, Lebanon"
          description="UNESCO World Heritage Site and a living testament to the enduring beauty of Lebanon's cedar forests. These ancient trees, some dating over a thousand years."
          imageSource={require('../assets/qadisha-valley.jpg')}
          estPrice="20$/individual"
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
    // alignItems: 'center',
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
