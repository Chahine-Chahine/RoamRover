import { useNavigation } from "@react-navigation/native";
import { ScrollView , StyleSheet , Text, View} from "react-native";
import Card from "../components/common/Card";
import NavigationBar from "../components/common/NavigationBar";
import Search from "../components/common/Search";
import ActionButton from "../components/ProfileScreen/ActionButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../core/Redux/Actions/locationActions";
import LoadingScreen from "./LoadingScreen";
import Categories from "../components/common/Categories";


const CustomtripScreen = () => {
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

    return(
        <>
        <View style={styles.container}>
        {/* <Text style={styles.pagetitle}>Custom Trip</Text> */}
         
        <ScrollView >
            <View style={styles.searchContainer}>
            {/* <Search/> */}
            <Categories/>
            </View>
            {locations.map((location)=>(
            <Card
             key={location.id}
             onPress={() => navigateLocationPage(location)}
             title={location.title}
             description={location.description}
             price={`$${location.estimated_price} per individual`} 
             url={location.image}
             label={"Add"}
             showBookmark={false}
             style={styles.outlinedButton}
            />))}
        </ScrollView>
        <ActionButton title={'Done'} style={styles.actionButton}/>
        <NavigationBar/>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        alignItems: 'center'
    },
    pagetitle:{
        fontSize: 32,
        margin: 30,
        fontWeight: 'bold',
    },
    outlinedButton:{
        width: 100,
        position: 'absolute',
        left: 15,
        top: 5
    },
    
    
})

export default CustomtripScreen;