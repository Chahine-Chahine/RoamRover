import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from '../core/Redux/Actions/tripActions';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/common/Header';
import Card from '../components/common/Card';
import NavigationBar from '../components/common/NavigationBar';
import Categories from '../components/common/Categories';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { trips, loading, error } = useSelector(state => state.trips);
    const navigation = useNavigation();

    useEffect(() => {
        dispatch(fetchTrips());
    }, [dispatch]);

    const navigateTripPage = (trip) => {
        navigation.navigate('TripDetailsScreen', { trip });
    };

    if (loading) return <Text>Loading...</Text>; 
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollView}>
                <Categories />
                {trips.map((trip) => (
                    <Card
                        key={trip.id.toString()}
                        onPress={() => navigateTripPage(trip)} 
                        title={trip.room?.room_name ?? 'Trip Room'}
                        description={`${trip.room?.creator?.first_name ?? 'Description'} ${trip.room?.creator?.last_name ?? ''}`}
                        price={`$${trip.total_budget ?? ''} total`}
                        url={trip.locations[0]?.image ?? 'default_image_url'}
                        label={'Join'}
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
