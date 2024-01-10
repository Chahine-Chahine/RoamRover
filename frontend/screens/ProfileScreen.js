import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import NavigationBar from '../components/common/NavigationBar';
import ProfileHeader from '../components/ProfileScreen/ProfileHeader';
import ProfileInfo from '../components/ProfileScreen/ProfileInfo';
import AboutSection from '../components/ProfileScreen/AboutSection';
import ActionButton from '../components/ProfileScreen/ActionButton';
import { useNavigation } from '@react-navigation/native';
import { logoutUser } from '../core/Redux/Actions/authActions';
import Icon from 'react-native-vector-icons/FontAwesome5'; 

const ProfileScreen = ({ user }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigateBookmark = () => {
    navigation.navigate('BookmarkScreen');
  };

  const navigateprofileUpdate = () => {
    navigation.navigate('ProfileUpdateScreen');
  };

  const handleLogout = () => {
    dispatch(logoutUser(navigation));
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <ProfileHeader/>
        <ProfileInfo 
          name={`${user?.first_name || ''} ${user?.last_name || ''}`}
          username={user?.username || ''}
          trips="Previous"
          imageSource={user?.image_url ? { uri: user.image_url } : require('../assets/Default_pfp.svg.png')}
        />
        <AboutSection aboutText={user?.bio || <Text>Add a bio in the update profile section please</Text>} />
      </ScrollView>
      <View style={styles.actionNavigationWrapper}>
        <View style={styles.actionContainer}>
          <ActionButton title="Update profile" onPress={navigateprofileUpdate} />
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
         <Icon name="sign-out-alt" size={18} color="#fff" />
         <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
        </View>
      <NavigationBar/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  actionContainer: {
    backgroundColor: '#FFF',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  actionNavigationWrapper: {
    backgroundColor: '#fff'
  },
  logoutText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5
  },
  logoutBtn: {
    backgroundColor: '#A78BFA',
      borderRadius: 25,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 12,
      marginHorizontal: 25,
      paddingVertical: 12,
      paddingHorizontal: 40,
    backgroundColor: '#e63946', 
    
  }

});


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(ProfileScreen);
