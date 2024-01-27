import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NavigationBar from '../components/common/NavigationBar';
import { checkParticipant, updateChatRoom } from '../core/Redux/Actions/roomActions';

const TripDetailScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { trip } = route.params;
  const coverImageUrl = trip.locations[0]?.image ? { uri: trip.locations[0].image } : require('../assets/Baalbeck.webp');
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);
  const { participants } = useSelector(state => state.chatroom);
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    setIsJoined(participants.includes(user?.id));
  }, [participants, user]);

  const handleJoinRoom = async (roomId) => {
    dispatch(checkParticipant(roomId, token));

    try {
      if (isJoined) {
        const updatedParticipants = participants.filter(participantId => participantId !== user?.id);
        dispatch({ type: 'UPDATE_PARTICIPANTS', payload: updatedParticipants }); 
        await dispatch(updateChatRoom(roomId, updatedParticipants, token));
        setIsJoined(false);
        alert('You have successfully left the room.');
      } else {
        const updatedParticipants = [...participants, user?.id];
        dispatch({ type: 'UPDATE_PARTICIPANTS', payload: updatedParticipants }); 
        await dispatch(updateChatRoom(roomId, updatedParticipants, token));
        setIsJoined(true);
        alert('You have successfully joined the room.');
      }
    } catch (error) {
      console.error('handleJoinRoom error:', error);
      // Handle the error as needed
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.coverImageContainer}>
        <ImageBackground source={coverImageUrl} style={styles.coverImage}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{trip.room?.room_name ?? 'Best Trip To Destination'}</Text>
            <Text style={styles.location}>{trip.starting_location ?? 'Location'}</Text>
            <View style={styles.ratingContainer}></View>
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>{trip.room?.room_description ?? 'No description available.'}</Text>
          <Text style={styles.sectionTitle}>Gallery</Text>
          <View style={styles.galleryContainer}>
            {trip.locations.map((location, index) => (
              <ImageBackground
                key={index}
                source={{ uri: location.image }}
                style={styles.imagePlaceholder}
              />
            ))}
          </View>
        <TouchableOpacity
          style={[styles.joinButton, { backgroundColor: isJoined ? 'gray' : '#A78BFA' }]}
          onPress={() => handleJoinRoom(trip.room?.id)}
        >
          <Text style={styles.joinButtonText}>{isJoined ? 'Leave Room' : 'Join now'}</Text>
        </TouchableOpacity>
      </ScrollView>
      <NavigationBar />
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
color: '#fff',
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
marginBottom: 16,
marginTop: 25
},
imagePlaceholder: {
width: 64,
height: 64,
backgroundColor: '#e1e4e8',
marginLeft: 5,
},
joinButton: {
backgroundColor: '#A78BFA',
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