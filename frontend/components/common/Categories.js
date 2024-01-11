import { useState } from "react";
import { View, Text ,Image } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5';



const Categories = () => {
    const [activeCategory, setActiveCategory] = useState('Beach');

    const getBoxStyle = (category) => {
        return category === activeCategory ? styles.boxSpecial : styles.box;
    };

    return (
        <View style={styles.container}>
            {["Beach", "Hiking", "Restaurants", "Ruins"].map((category) => (
                <TouchableOpacity 
                    key={category}
                    style={styles.wrapper}
                    onPress={() => setActiveCategory(category)}
                >
                    <View style={getBoxStyle(category)}>
                        <Icon name={getIconName(category)} size={30} color={category === activeCategory ? 'white' : 'black'}/>
                    </View>
                    <Text style={styles.categoryTitle}>{category}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const getIconName = (category) => {
    switch (category) {
        case 'Beach': return 'umbrella-beach';
        case 'Hiking': return 'hiking';
        case 'Restaurants': return 'utensils';
        case 'Ruins': return 'landmark';
        default: return '';
    }
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: '3%',
        marginBottom: 10
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
        backgroundColor: '#f5f5f5',
        // elevation: 2
    },
    boxSpecial: {
        width: '22%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#A78BFA',
    },
    categoryTitle:{
        fontWeight: '500'
    }
})

export default Categories;