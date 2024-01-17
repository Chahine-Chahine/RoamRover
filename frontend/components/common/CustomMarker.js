import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const CustomMarker = ({ title, description, rating }) => {
  // Function to render stars based on rating
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Text key={i} style={styles.star}>
          {i < rating ? '★' : '☆'}
        </Text>
      );
    }
    return stars;
  };

  return (
    <View style={styles.customMarker}>
      <Text style={styles.markerTitle}>{title}</Text>
      <Text style={styles.markerDescription}>{description}</Text>
      <View style={styles.ratingContainer}>{renderStars()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  customMarker: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: '#6B46D9',
    borderWidth: 2,
    alignItems: 'center', 
  },
  markerTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  markerDescription: {
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    color: '#FFD700', 
  },
});

export default CustomMarker;
