import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Header from '../components/common/Header';
import Card from '../components/common/Card';
import NavigationBar from '../components/common/NavigationBar';
import Categories from '../components/common/Categories';
import LoadingScreen from './LoadingScreen';
import { fetchTrips } from '../core/Redux/Actions/tripActions';
import { updateRoom } from '../core/Redux/Actions/roomActions'; 
import { getRoomIdFromTrip } from '../core/helpers/getRoomId';
import { fetchAllUsers } from '../core/Redux/Actions/authActions';
import getRoomDetails from '../core/helpers/getRoomDetails';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { trips, loading} = useSelector(state => state.trips);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigation = useNavigation();
    const { user } = useSelector(state => state.auth); 
    const token = useSelector(state => state.auth.token);

    const handleJoinRoom = async (tripId) => {
        const roomId = await getRoomIdFromTrip(tripId, token); 
        
        if (roomId) {
          const currentRoom = await getRoomDetails(roomId); 
          console.log(currentRoom)
          const currentParticipants = currentRoom.participants || [];
          
          if (!currentParticipants.includes(user.id)) {
            const updatedParticipants = [...currentParticipants, user.id];
            const updatedData = { participants: updatedParticipants };
            dispatch(updateRoom(roomId, updatedData));
          } else {
            // Alert the user that they are already a participant
            Alert.alert("Join Trip", "You are already a participant in this trip.");
          }
        } else {
          console.log('Room ID not found for the given trip ID');
        }
      };
    

    useFocusEffect(
        React.useCallback(() => {
            dispatch(fetchTrips());
            dispatch(fetchAllUsers(token));
        }, [dispatch])
    );

    const navigateTripPage = (trip) => {
        navigation.navigate('TripDetailsScreen', { trip });
    };

    if (loading) return <LoadingScreen />; 

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollView}>
            <Categories 
    selectedCategory={selectedCategory} 
    onSelectCategory={setSelectedCategory} 
/>
                {trips && trips.map((trip) => (
                    <Card
                        key={trip.id.toString()}
                        onPress={() => navigateTripPage(trip)} 
                        title={trip.room?.room_name ?? 'Trip Room'}
                        description={`${trip.room?.room_description ?? 'Description'}`}
                        price={`$${trip.total_budget ?? ''} total`}
                        url={trip.locations[0].image}
                        label={'Join'}
                        onAddPress={() => handleJoinRoom(trip.room?.id)}
                        showBookmark={false}
                        onBookmarkPress={() => {}} 
                    />
                ))}
            </ScrollView>
            <NavigationBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    scrollView: {
        width: '100%',
    },
});

export default HomeScreen;
