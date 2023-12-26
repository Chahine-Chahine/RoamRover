import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import NavigationBar from '../components/common/NavigationBar';

const ProfileScreen = () => {
  return (
    <>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Back Icon */}
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={require('../assets/dodo.jpeg')} 
        />
        <View style={styles.profileHeader}>
        <Text style={styles.profileName}>Chahine Chahine</Text>
        <Text style={styles.profileAge}>23 years old</Text>
        <TouchableOpacity style={styles.tripButton}>
        <Text style={styles.profileTrips}>12 Trips</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text style={styles.aboutText}>
        I am fueled by an insatiable passion for extraordinary adventures. Embarking on a journey is not just a routine for me; it is a thrilling and invigorating experience that ignites my spirit. The anticipation of waking up to a new day and the prospect of setting out on a trip exhilarate me, as I embrace the unknown with an adventurous zeal. Each expedition becomes a canvas for me to paint vibrant memories and indulge in the joy of exploration.
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Bookmarks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </ScrollView>
    <NavigationBar/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  profileHeader:{
    marginTop:15,
    marginLeft: 20,
    alignItems: 'center'
  },
  tripButton:{
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#A78BFA',
    marginVertical: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 30,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileAge: {
    fontSize: 18,
    color: 'grey',
  },
  profileTrips: {
    fontSize: 16,
    color: '#A78BFA',
    
  },
  aboutSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  aboutText: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5,
    marginBottom:10,
    
  },
  button: {
    backgroundColor: '#A78BFA',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ProfileScreen;
