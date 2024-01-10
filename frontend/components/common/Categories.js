import { View, Text ,Image } from "react-native";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';



const Categories = () => {


    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
            <View style={styles.box}>
                <Icon name= 'umbrella-beach' size={30}/>
            </View>
            <Text style={styles.categoryTitle}>Beach</Text>
         </View>
         <View style={styles.wrapper}>
            <View style={styles.box}></View>
            <Text style={styles.categoryTitle}>Beach</Text>
         </View>
         <View style={styles.wrapper}>
            <View style={styles.box}></View>
            <Text style={styles.categoryTitle}>Beach</Text>
         </View>
         <View style={styles.wrapper}>
            <View style={styles.box}></View>
            <Text style={styles.categoryTitle}>Beach</Text>
         </View>
    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '3%',
    },
    wrapper:{
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box:{
        width: '22%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 2
    },
    categoryTitle:{
        fontWeight: '500'
    }
})

export default Categories;