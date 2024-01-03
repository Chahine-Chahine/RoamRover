import React, { useEffect } from 'react';
import { View,Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../core/Redux/Actions/locationActions';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/common/Header';
import Search from '../components/common/Search';
import Card from '../components/common/Card';
import NavigationBar from '../components/common/NavigationBar';
import LoadingScreen from './LoadingScreen';

const HomeScreen = () => {

    const dispatch = useDispatch();
    const { locations, loading, error } = useSelector(state => state.locations);

    useEffect(() => {
        dispatch(fetchLocations());
    }, [dispatch]);


    const navigation = useNavigation();

    const navigateLocationPage = (location) => {
        navigation.navigate('LocationDetailScreen', { location });
    };

    if (loading) return <LoadingScreen />;
    if (error) return <Text>Error: {error.message}</Text>;
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                <Header />
                <Search />
                </View>
                <ScrollView style={styles.scrollView}>
                    {locations.map((location) => (
                       <View key={location.id} style={styles.cardContainer}>
                       <Card
                           onPress={() => navigateLocationPage(location)}
                           title={location.title}
                           description={location.description}
                           price={location.estimatedPrice} 
                           uri={location.image}
                           label={"add to list"}
                           showBookmark={true}
                       />
                   </View>
                    ))}
                </ScrollView>
            </View>
            <NavigationBar />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
    },
    scrollView: {
        width: '100%',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        height: 200
    
    },
    // cardContainer: {
    //     marginHorizontal: 20,
    //     marginVertical: 10,
    //     borderRadius: 20,
    //     borderColor: '#524077',
    //     width: "90%",
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#FFFF',
    //   },
    
});

export default HomeScreen;
