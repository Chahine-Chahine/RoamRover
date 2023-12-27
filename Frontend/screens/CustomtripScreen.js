import { useNavigation } from "@react-navigation/native";
import { ScrollView , StyleSheet , Text, View} from "react-native";
import Card from "../components/common/Card";
import NavigationBar from "../components/common/NavigationBar";
import Search from "../components/common/Search";
import ActionButton from "../components/ProfileScreen/ActionButton";


const CustomtripScreen = () => {
    const places = [
        {
            id: '1',
            name: '3azme Caffe',
            subtitle: 'Beirut Lebanon',
            description: 'Coffee shop in Beirut',
            price: '20$/individual',
            image: require('../assets/3azme.png'),
        },
        {
            id: '2',
            name: 'China City',
            subtitle: 'Ashrafieh Lebanon',
            description: 'New concept for studying in natural environment',
            price: '20$/individual',
            image: require('../assets/chinacity.png'),
        },
        {
          id: '3',
          name: 'Baalbeck Castle',
          subtitle: 'Baalbeck Lebanon',
          description: 'Discover Your history who you really are',
          price: '10$/individual',
          image: require('../assets/Baalbeck.webp'),
      },
      {
        id: '4',
        name: 'Lady of Harisa',
        subtitle: 'Harissa Lebanon',
        description: 'A great place for finding inner peice and relaxationA great place for finding inner peice and relaxationA great place for finding inner peice and relaxationA great place for finding inner peice and relaxationA great place for finding inner peice and relaxationA great place for finding inner peice and relaxation',
        price: 'Free',
        image: require('../assets/Harrisa.jpg'),
    },
    ];

    const navigation = useNavigation();

    const navigateLocationPage = (place) => {
        navigation.navigate('LocationDetailScreen', { place });
    };

    return(
        <>
            <View style={styles.container}>
                <Text style={styles.pagetitle}>Custom Trip</Text>
         
        <ScrollView  contentContainerStyle={styles.containerStyle}>
            <Search/>
            {places.map((place)=>(
            <Card
             key={place.id}
             onPress={() => navigateLocationPage(place)}
             title={place.name}
             description={place.description}
             price={place.price}
             uri={place.image}
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
    containerStyle:{
        alignItems: "center",
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