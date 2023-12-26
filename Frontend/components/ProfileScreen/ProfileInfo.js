import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const ProfileInfo = ({ name, age, trips, imageSource }) => (
  <View style={styles.profileSection}>
    <Image style={styles.profileImage} source={imageSource} />
    <View style={styles.profileHeader}>
      <Text style={styles.profileName}>{name}</Text>
      <Text style={styles.profileAge}>{age}</Text>
      <TouchableOpacity style={styles.tripButton}>
        <Text style={styles.profileTrips}>{trips} Trips</Text>
      </TouchableOpacity>
    </View>
  </View>
);


const styles = StyleSheet.create({
   
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
})


export default ProfileInfo;