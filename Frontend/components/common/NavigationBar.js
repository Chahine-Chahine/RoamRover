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
  }
  return (
    <View style={styles.navigationBar}>
      <Icon name='home' size={30} onPress={navigatehome} />
      <Icon name='plus-circle' size={50} style={styles.plusButton} />
      <Icon name='user' solid size={30} />
    </View>
  );
};

const styles = {
  navigationBar: {
    gap: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 60,
  },
  plusButton: {
    color: '#A78BFA',
    position: 'relative',
    top: -15,
  },
};

export default NavigationBar;
