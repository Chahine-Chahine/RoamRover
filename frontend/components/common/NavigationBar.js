import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavigationBar = () => {
  const navigation = useNavigation();

  const navigatehome = () => {
    return (
      navigation.navigate('HomeScreen')
    )
  };
  const navigateprofile = () => {
    return (
      navigation.navigate('profileScreen')
    )
  };
  const navigategenerate = () => {
    return (
      navigation.navigate('GenerateTrip')
    )
  }
  const navigatebookmark = () =>{
    return (
      navigation.navigate('BookmarkScreen')
    )
  }
  return (
    <View style={styles.navigationBar}>
      <Icon name='compass' solid size={25} onPress={navigatehome} />
      <Icon name='book-open' size={25} onPress={navigategenerate}/>
      <Icon name="bookmark" solid size={25} onPress={navigatebookmark}/>
      <Icon name='user' solid size={25} onPress={navigateprofile}/>
    </View>
  );
};

const styles = {
  navigationBar: {
    gap: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#D9D9D9', 
  },
  plusButton: {
    color: '#A78BFA',
    position: 'relative',
    top: -15,
  },
};

export default NavigationBar;
