import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const TripDetailScreen = () => {
    const coverImageUrl = '../assets/Baalbeck.webp';
    return (
        <View style={styles.container}>
            <ImageBackground source={require(coverImageUrl)} style={styles.coverImage}>
              <Text style={styles.title}>Best Trip To Destination</Text>
              <Text style={styles.location}>Location</Text>
              <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={16} color="white" />
                <FontAwesome name="star" size={16} color="white" />
                <FontAwesome name="star" size={16} color="white" />
                <FontAwesome name="star" size={16} color="white" />
                <FontAwesome name="star" size={16} color="white" />
              </View>
            </ImageBackground>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, elit, sed do eiusmod. Lorem ipsum dolor sit amet.
            </Text>
            <Text style={styles.sectionTitle}>Gallery</Text>
            <View style={styles.galleryContainer}>
              <View style={styles.imagePlaceholder} />
              <View style={styles.imagePlaceholder} />
              <View style={styles.imagePlaceholder} />
              <View style={styles.imagePlaceholder} />
              <View style={styles.imagePlaceholder} />
            </View>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join now</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.tabBar}>
            <AntDesign name="search1" size={24} color="black" />
            <AntDesign name="calendar" size={24} color="black" />
            <AntDesign name="staro" size={24} color="black" />
            <AntDesign name="user" size={24} color="black" />
          </View>
        </View>
      );
    };
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    margin: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 32,
  },
  coverImage: {
    height: 300, 
    justifyContent: 'center', 
    paddingHorizontal: 16, 
    paddingTop: 36, 
    borderRadius: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black', 
    marginBottom: 8,
  },
  location: {
    fontSize: 18,
    color: '#D9D9D9', 
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 16,
  },
  galleryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
},
imagePlaceholder: {
width: 64,
height: 64,
backgroundColor: '#e1e4e8',
},
joinButton: {
backgroundColor: 'red',
borderRadius: 25,
paddingVertical: 12,
alignItems: 'center',
justifyContent: 'center',
},
joinButtonText: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 20,
borderTopWidth: 1,
borderColor: '#e1e4e8',
},
});

export default TripDetailScreen;

