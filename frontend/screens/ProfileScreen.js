import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import NavigationBar from '../components/common/NavigationBar';
import ProfileHeader from '../components/ProfileScreen/ProfileHeader';
import ProfileInfo from '../components/ProfileScreen/ProfileInfo';
import AboutSection from '../components/ProfileScreen/AboutSection';
import ActionButton from '../components/ProfileScreen/ActionButton';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = ({ user }) => {
  const navigation = useNavigation();

  const navigateBookmark = () => {
    navigation.navigate('BookmarkScreen');
  };

  const navigateprofileUpdate = () => {
    navigation.navigate('ProfileUpdateScreen');
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <ProfileHeader onBack={() => {}} />
        <ProfileInfo 
          name={`${user?.first_name || ''} ${user?.last_name || ''}`}
          username={user?.username || ''}
          trips="Previous"
          imageSource={user?.image_url ? { uri: user.image_url } : require('../assets/img.png')}
        />
        <AboutSection aboutText={user?.bio || <Text>Add a bio in the update profile section please</Text>} />
      </ScrollView>
      <View style={styles.actionNavigationWrapper}>
        <View style={styles.actionContainer}>
          <ActionButton title="Bookmarks" onPress={navigateBookmark}/>
          <ActionButton title="Update profile" onPress={navigateprofileUpdate} />
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
  }

});


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(ProfileScreen);
