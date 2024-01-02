import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Search = () => {
  return (
    <View style={styles.search}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#969696" marginRight={10} />
        <TextInput placeholder='Search' />
      </View>
      <View style={styles.filterIcon}>
        <Icon name="filter" size={25} />
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
    height: 60,
    marginBottom: 20,
  },
  searchBar: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '88%',
    height: '88%',
    borderRadius: 30,
    backgroundColor: '#EDEDED',
  },
  filterIcon: {
  },
};

export default Search;
