import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const AboutSection = ({ aboutText }) => (
  <View style={styles.aboutSection}>
    <Text style={styles.aboutTitle}>Bio</Text>
    <Text style={styles.aboutText}>{aboutText}</Text>
  </View>
);

 const styles = StyleSheet.create({
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
 })



export default AboutSection;