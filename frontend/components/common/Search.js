import React, { useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, Animated, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animationWidth = useRef(new Animated.Value(55)).current;  

  const handlePress = () => {
    if (isExpanded) {
      Animated.timing(animationWidth, {
        toValue: 55,  
        duration: 300,
        useNativeDriver: false  
      }).start();
    } else {
      Animated.timing(animationWidth, {
        toValue: 300,  
        duration: 300,
        useNativeDriver: false  
      }).start();
    }
    setIsExpanded(!isExpanded);
  };
  return (
    <View style={styles.search}>
    <Animated.View style={[styles.searchBar, { width: animationWidth }]}>
      <TouchableOpacity onPress={handlePress}>
        <Icon name="search" size={18} color="#969696" style={{ marginRight: isExpanded ? 10 : 0 }} />
      </TouchableOpacity>
      {isExpanded && (
        <TextInput placeholder='Search' placeholderTextColor={'#969696'} style={styles.placeholder} />
      )}
    </Animated.View>
  </View>
);
};

const styles = {
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "80%",
    height: 55,
  },
  searchBar: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: '#ffff',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#A78BFA'
  },
  placeholder: {
    color: '#969696'
  },
};

export default Search;
