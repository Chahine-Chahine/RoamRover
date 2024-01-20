import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Search = ({ onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const animationWidth = useRef(new Animated.Value(55)).current;

  const handlePress = () => {
    Animated.timing(animationWidth, {
      toValue: isExpanded ? 55 : 322,  
      duration: 300,
      useNativeDriver: false  
    }).start();
    setIsExpanded(!isExpanded);

    // If collapsing the search bar, clear the search
    if (isExpanded) {
      handleSearch('');
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <View style={styles.search}>
      <Animated.View style={[
        styles.searchBar, 
        { width: animationWidth, borderColor: isExpanded ? '#A78BFA' : '#D9D9D9' }
      ]}>
        <TouchableOpacity onPress={handlePress}>
          <Icon name="search" size={18} color="#969696" style={{ marginRight: isExpanded ? 10 : 0 }} />
        </TouchableOpacity>
        {isExpanded && (
          <TextInput 
            placeholder='Search' 
            placeholderTextColor={'#969696'} 
            style={styles.placeholder} 
            onChangeText={handleSearch} 
            value={searchQuery}
          />
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
    color: '#969696',
    flex: 1,  
  },
};

export default Search;
