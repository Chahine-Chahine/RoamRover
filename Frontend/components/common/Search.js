import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Search = () => {
  return (
    <View style={styles.search}>
      <View style={styles.searchBar}>
        <Icon name="search" size={18} color="#969696" marginRight={10} />
        <TextInput placeholder='Search' placeholderTextColor={'#969696'} style={styles.placeholder} />
      </View>
      <View style={styles.filterIcon}>
        <Icon name="sliders-h" color={'black'} size={25} />
      </View>
    </View>
  );
};

const styles = {
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "85%",
    height: 55,
  },
  searchBar: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '88%',
    height: '88%',
    borderRadius: 30,
    backgroundColor: '#ffff',
  },
  placeholder: {
    color: '#969696'
  },
 
  filterIcon: {
  },
};

export default Search;
