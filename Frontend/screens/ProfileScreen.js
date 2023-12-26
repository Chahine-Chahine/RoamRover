import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ProfileInfo from '../components/ProfileScreen/ProfileInfo';
import AboutSection from '../components/ProfileScreen/AboutSection';
import ActionButton from '../components/ProfileScreen/ActionButton';
import NavigationBar from '../components/common/NavigationBar';
import ProfileHeader from '../components/ProfileScreen/profileheader';

const ProfileScreen = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <ProfileHeader onBack={() => {}} />
        <ProfileInfo 
          name="Chahine Chahine"
          age="23 years old"
          trips="12"
          imageSource={require('../assets/dodo.jpeg')}
        />
        <AboutSection aboutText="I am fueled by an insatiable passion for extraordinary adventures. Embarking on a journey is not just a routine for me; it is a thrilling and invigorating experience that ignites my spirit. The anticipation of waking up to a new day and the prospect of setting out on a trip exhilarate me, as I embrace the unknown with an adventurous zeal. Each expedition becomes a canvas for me to paint vibrant memories and indulge in the joy of exploration." />
      </ScrollView>
      <View style={styles.actionContainer}>
        <ActionButton title="Bookmarks" onPress={() => {console.log("pressed bookmarks")}} />
        <ActionButton title="Change Password" onPress={() => {console.log("pressed change pass")}} />
      </View>
      <NavigationBar/>
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
  },

});

export default ProfileScreen;
