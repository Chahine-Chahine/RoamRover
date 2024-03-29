import React from 'react';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Header = ({ user }) => {
  const navigation = useNavigation();

  const chatNavigate = () => {
    navigation.navigate('RoomListScreen');
  }

  const imageSource = user?.image_url ? { uri: user.image_url } : require("../../assets/Default_pfp.svg.png");
  return (
    <View style={styles.header}>
      <View>
        <Image style={styles.headerImage} source={imageSource} />
      </View>
      <View style={styles.headerText}>
        <Text>Hello {user?.first_name || "Guest"}</Text>
        <Text>Beirut, Lebanon</Text> 
      </View>
      <View style={styles.messageIcon}>
        <Icon name="facebook-messenger"  size={25}  onPress= {chatNavigate}/>
      </View>
    </View>
  );
};

const styles = {
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "15%",
    marginTop: 15,
    paddingHorizontal: 25,
    
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  headerText: {
    marginLeft: 15,
  },
  messageIcon: {
    width: 140,
    height: 60,
    justifyContent: "center",
    left: 120
  },
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user, 
  };
};

export default connect(mapStateToProps)(Header);
