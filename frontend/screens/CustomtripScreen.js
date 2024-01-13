import { View, Text, StyleSheet, ScrollView, Modal, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../core/Redux/Actions/locationActions';
import { createBookmark, deleteBookmark, fetchBookmarks } from '../core/Redux/Actions/bookmarkActions';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/common/Card';
import NavigationBar from '../components/common/NavigationBar';
import LoadingScreen from './LoadingScreen';
import Categories from '../components/common/Categories';
import Search from '../components/common/Search';
import { useEffect, useState } from 'react';
import ActionButton from '../components/ProfileScreen/ActionButton';
import { Button } from 'react-native';

const CustomtripScreen = () => {
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [roomName, setRoomName] = useState('');
    const [roomDescription, setRoomDescription] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

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
 
    const handleAddLocation = (locationId) => {
        setSelectedLocations(prevLocations => {
            const updatedLocations = [...prevLocations, locationId];
            console.log("Added location ID:", updatedLocations);
            return updatedLocations;
        });
    };

    const handleDonePress = () => {
        setIsModalVisible(true);
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

    <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
        }}>
        <View style={styles.modalView}>
        <Text style={styles.modalTitle}>Create a Room</Text>
        <TextInput
        placeholder="Room Name"
        onChangeText={setRoomName}
        value={roomName}
        style={styles.input}
        />
        <TextInput
        placeholder="Room Description"
        onChangeText={setRoomDescription}
        value={roomDescription}
        style={styles.input}
        />
        <Button
        title="Save"
        style={styles.button}
        onPress={() => {
            setIsModalVisible(!isModalVisible);
        }}
        />
        </View>
    </Modal>
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                <View style={styles.Search}>
                <Search/>
                </View>
                <View style={styles.Categories}>
                <Categories/>
                </View>
                    {locations.map((location) => (
                        <Card
                            key={location.id}
                            location_id={location.id}
                            onPress={() => navigateLocationPage(location)}
                            title={location.title}
                            description={location.description}
                            price={`$${location.estimated_price} per individual`} 
                            url={location.image}
                            label={'add'}
                            onAddPress={handleAddLocation}
                            showBookmark={true}
                            onBookmarkPress={() => handleBookmarkToggle(location)}
                        />
                    ))}
                </ScrollView>
            </View>
            <ActionButton title={'Done'} onPress={handleDonePress} style={styles.actionButton}/>
        <NavigationBar/>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
    },
    Search:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 50,
        marginVertical: 10
    },
    modalView: {
        justifyContent: 'center',
        marginTop: 70,
        marginHorizontal: 10,
        width: '95%',
        height: '70%',
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 5
    },
    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#A78BFA',
    },
    button: {
        backgroundColor: 'blue',
        padding: 0,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    

});
export default CustomtripScreen;

        