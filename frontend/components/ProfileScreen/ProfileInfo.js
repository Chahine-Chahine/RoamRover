import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileInfo = ({ name, username, trips, imageSource }) => {
  const navigation = useNavigation();

  const navigateRooms = () => {
    navigation.navigate('RoomListScreen');
  }

  return (
    <View style={styles.profileSection}>
      <Image style={styles.profileImage} source={imageSource} />
      <View style={styles.profileHeader}>
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profileUsername}>{username}</Text>
        <TouchableOpacity style={styles.tripButton} onPress={navigateRooms}>
          <Text style={styles.profileTrips}>{trips} Trips</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
   
      profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
      },
      profileHeader:{
        marginTop:15,
        marginLeft: 20,
        alignItems: 'right'
      },
      tripButton:{
       marginVertical: 2,
      },
      profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginLeft: 15,
      },
      profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
      },
      profileUsername: {
        fontSize: 18,
        color: 'grey',
    },
    profileTrips: {
        fontSize: 16,
        color: '#A78BFA',
        
    },
})


export default ProfileInfo;