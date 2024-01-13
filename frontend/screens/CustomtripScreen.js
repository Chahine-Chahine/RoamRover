import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../core/Redux/Actions/locationActions';
import { createBookmark, deleteBookmark, fetchBookmarks } from '../core/Redux/Actions/bookmarkActions';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/common/Card';
import NavigationBar from '../components/common/NavigationBar';
import LoadingScreen from './LoadingScreen';
import Categories from '../components/common/Categories';
import { useEffect } from 'react';
import ActionButton from '../components/ProfileScreen/ActionButton';

const CustomtripScreen = () => {
    const dispatch = useDispatch();
    const { locations, loading, error } = useSelector(state => state.locations);
    const { bookmarks } = useSelector(state => state.bookmark);
    const user = useSelector(state => state.auth.user); 
    const USER_ID = user ? user.id : null;

    useEffect(() => {
        dispatch(fetchLocations());
        dispatch(fetchBookmarks());
    }, [dispatch]);

    const navigation = useNavigation();

    const navigateLocationPage = (location) => {
        navigation.navigate('LocationDetailScreen', { location });
    };

    const handleBookmarkToggle = (location) => {
        const bookmark = bookmarks.find(bookmark => bookmark.location_id === location.id);

        if (bookmark) {
            dispatch(deleteBookmark(bookmark.id));
        } else {
            if (USER_ID) {
                dispatch(createBookmark({ userId: USER_ID, locationId: location.id }));
            }
        }
    };

    if (loading) return <LoadingScreen />;
    if (error) return <Text>Error: {error.message}</Text>;

    return (
        <>
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                <View style={styles.Categories}>
                <Categories/>
                </View>
                    {locations.map((location) => (
                        <Card
                            key={location.id}
                            onPress={() => navigateLocationPage(location)}
                            title={location.title}
                            description={location.description}
                            price={`$${location.estimated_price} per individual`} 
                            url={location.image}
                            label={'join'}
                            showBookmark={true}
                            onBookmarkPress={() => handleBookmarkToggle(location)}
                        />
                    ))}
                </ScrollView>
            </View>
            <ActionButton title={'Done'} style={styles.actionButton}/>
        <NavigationBar/>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
	},
    scrollView: {
        width: '100%',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        height: 140
    },
    outlinedButton:{
        width: 100,
        position: 'absolute',
        left: 15,
        top: 5
    },
    Categories:{
        marginTop: 20
    }

});
export default CustomtripScreen;

        