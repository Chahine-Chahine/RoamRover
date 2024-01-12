import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import NavigationBar from '../components/common/NavigationBar';

const TripDetailScreen = () => {
  const coverImageUrl = require('../assets/Baalbeck.webp');

  return (
    <View style={styles.container}>
        <View style={styles.coverImageContainer}>
      <ImageBackground source={coverImageUrl} style={styles.coverImage}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Best Trip To Destination</Text>
          <Text style={styles.location}>Location</Text>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={25} color="white" />
            <FontAwesome name="star" size={25} color="white" />
            <FontAwesome name="star" size={25} color="white" />
            <FontAwesome name="star" size={25} color="white" />
            <FontAwesome name="star" size={25} color="white" />
          </View>
        </View>
      </ImageBackground>
      </View>
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
    <NavigationBar/>
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
coverImageContainer: {
height: 300, 
borderBottomLeftRadius: 20, 
borderBottomRightRadius: 20,
overflow: 'hidden',
},
coverImage: {
height: '100%', 
justifyContent: 'flex-end',
},
contentContainer: {
paddingHorizontal: 16,
paddingTop: 36,
paddingBottom: 20, 
borderBottomLeftRadius: 20, 
borderBottomRightRadius: 20, 
overflow: 'hidden', 
backgroundColor: 'rgba(0,0,0,0.3)', 
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
width: 155,
flexDirection: 'row',
marginBottom: 16,
justifyContent: 'space-evenly'
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
marginTop: 25
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
});

export default TripDetailScreen;