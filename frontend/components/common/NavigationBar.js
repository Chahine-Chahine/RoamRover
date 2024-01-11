import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View , Text, Touchable, TouchableOpacity} from 'react-native';
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
      <TouchableOpacity style={styles.container} onPress={navigatehome}>
        <Icon name='compass' solid size={25} color={'#A78BFA'}/>
        <Text style={styles.navigationText} >Explore</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={navigategenerate}>
        <Icon name='book-open' size={25}  color={'#bab8b8'}/>
      <Text style={styles.navigationText}>Planning</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={navigatebookmark}>
        <Icon name="bookmark" solid size={25}  color={'#bab8b8'}/>
      <Text style={styles.navigationText}>Bookmarks</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={navigateprofile}>
        <Icon name='user' solid size={25}  color={'#bab8b8'}/>
      <Text style={styles.navigationText}>Profile</Text>
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
