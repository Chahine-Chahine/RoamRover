import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  const navigation = useNavigation();


  const chatNavigate = () => {
    navigation.navigate('ChatRoomScreen');
  }

  return (
    <View style={styles.header}>
      <View>
        <Image style={styles.headerImage} source={require("../../assets/dodo.jpeg")} />
      </View>
      <View>
        <Text>Hello Mohammad</Text>
        <Text>Beirut, Lebanon</Text>
      </View>
      <View style={styles.messageIcon}>
        <Icon name="comment-dots" solid size={30} color="black" onPress= {chatNavigate}/>
      </View>
    </View>
  );
};

const styles = {
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "20%",
    paddingHorizontal: 25,
    
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 20,
  },
  messageIcon: {
    width: 140,
    height: 60,
    justifyContent: "center",
    left: 90
    
  },
};

export default Header;
