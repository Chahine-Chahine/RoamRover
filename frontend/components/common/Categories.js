import { View, Text } from "react-native";
import { StyleSheet } from "react-native";




const Categories = () => {


    return (
        <View style={styles.container}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
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
    box:{
        width: '22%',
        height: '80%',
        borderRadius: 15,
        backgroundColor: '#D9D9D9'
    }
})

export default Categories;