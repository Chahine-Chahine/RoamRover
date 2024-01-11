import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View , Text, Touchable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavigationBar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const currentRoute = route.name;

  const navigate = (screenName) => {
    navigation.navigate(screenName);
  };

  const getColor = (tabName) => {
    return currentRoute === tabName ? '#A78BFA' : '#bab8b8';
  };


  return (  
      <View style={styles.navigationBar}>
      <TouchableOpacity style={styles.container} onPress={() => navigate('HomeScreen')}>
        <Icon name='compass' solid size={25} color={getColor('HomeScreen')} />
        <Text style={{ ...styles.navigationText, color: getColor('HomeScreen') }}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={() => navigate('GenerateTrip', 'Planning')}>
        <Icon name='book-open' size={25} color={getColor('GenerateTrip')} />
        <Text style={{ ...styles.navigationText, color: getColor('GenerateTrip') }}>Planning</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={() => navigate('BookmarkScreen', 'Bookmarks')}>
        <Icon name="bookmark" solid size={25} color={getColor('BookmarkScreen')} />
        <Text style={{ ...styles.navigationText, color: getColor('BookmarkScreen') }}>Bookmarks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={() => navigate('profileScreen', 'Profile')}>
        <Icon name='user' solid size={25} color={getColor('profileScreen')} />
        <Text style={{ ...styles.navigationText, color: getColor('profileScreen') }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  navigationBar: {
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#FFF', 
  },
  container:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center'
  },
  navigationText:{
    fontSize: 12,
    color: '#a8a8a8'
  }
};

export default NavigationBar;
