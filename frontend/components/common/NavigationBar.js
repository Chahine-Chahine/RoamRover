import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View , Text} from 'react-native';
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
      <View style={styles.container}>
        <Icon name='compass' solid size={25} onPress={navigatehome}/>
        <Text style={styles.navigationText}>explore</Text>
        </View>
      <View style={styles.container}>
        <Icon name='book-open' size={25} onPress={navigategenerate}/>
      <Text style={styles.navigationText}>planning</Text>
        </View>
      <View style={styles.container}>
        <Icon name="bookmark" solid size={25} onPress={navigatebookmark}/>
      <Text style={styles.navigationText}>bookmarks</Text>
        </View>
      <View style={styles.container}>
        <Icon name='user' solid size={25} onPress={navigateprofile}/>
      <Text style={styles.navigationText}>profile</Text>
        </View>
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
    backgroundColor: '#D9D9D9', 
  },
  container:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center'
  },
  plusButton: {
    color: '#A78BFA',
    position: 'relative',
    top: -15,
  },
  navigationText:{
    fontSize: 12,
    color: '#474747'
  }
};

export default NavigationBar;
