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
        <Icon name='compass' solid size={25} />
        <Text style={styles.navigationText}>explore</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={navigategenerate}>
        <Icon name='book-open' size={25} />
      <Text style={styles.navigationText}>planning</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={navigatebookmark}>
        <Icon name="bookmark" solid size={25}/>
      <Text style={styles.navigationText}>bookmarks</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={navigateprofile}>
        <Icon name='user' solid size={25}/>
      <Text style={styles.navigationText}>profile</Text>
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
