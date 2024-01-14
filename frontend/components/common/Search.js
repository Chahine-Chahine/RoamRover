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
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#A78BFA'
  },
  searchBar: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '88%',
    borderRadius: 30,
    backgroundColor: '#ffff',
  },
  placeholder: {
    color: '#969696'
  },

};

export default Search;
