import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useDispatch } from "react-redux";
import { fetchTripsByCategory } from "../../core/Redux/Actions/tripActions";

const Categories = ({ selectedCategory, onSelectCategory }) => {
    const dispatch = useDispatch();

    const categories = [
        { id: 1, name: "umbrella-beach", title: "Beach" },
        { id: 2, name: "hiking", title: "Hiking" },
        { id: 3, name: "utensils", title: "Restaurants" },
        { id: 4, name: "landmark", title: "Ruins" },
    ];

    const handleCategorySelect = (index) => {
        onSelectCategory(index);
        const categoryId = categories[index].id;
        dispatch(fetchTripsByCategory(categoryId));
    };

    return (
        <View style={styles.container}>
            {categories.map((category, index) => (
                <View key={category.id} style={styles.wrapper}>
                    <TouchableOpacity
                        style={selectedCategory === index ? styles.boxSpecial : styles.box}
                        onPress={() => handleCategorySelect(index)}
                    >
                        <Icon 
                            name={category.name} 
                            size={30} 
                            color={selectedCategory === index ? 'white' : 'black'} 
                        />
                    </TouchableOpacity>
                    <Text style={styles.categoryTitle}>{category.title}</Text>
                </View>
            ))}
        </View>
    );
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