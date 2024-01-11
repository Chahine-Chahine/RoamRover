import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { setActiveTab } from '../../core/Redux/Actions/navigationAction';

const NavigationBar = ({ activeTab, setActiveTab }) => {
  const navigation = useNavigation();

  const navigate = (screenName, tabName) => {
    navigation.navigate(screenName);
    setActiveTab(tabName);
  };

  const getColor = (tabName) => activeTab === tabName ? '#A78BFA' : '#bab8b8';

  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity style={styles.container} onPress={() => navigate('HomeScreen', 'Explore')}>
        <Icon name='compass' solid size={25} color={getColor('Explore')} />
        <Text style={{ ...styles.navigationText, color: getColor('Explore') }}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={() => navigate('GenerateTrip', 'Planning')}>
        <Icon name='book-open' size={25} color={getColor('Planning')} />
        <Text style={{ ...styles.navigationText, color: getColor('Planning') }}>Planning</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={() => navigate('BookmarkScreen', 'Bookmarks')}>
        <Icon name="bookmark" solid size={25} color={getColor('Bookmarks')} />
        <Text style={{ ...styles.navigationText, color: getColor('Bookmarks') }}>Bookmarks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container} onPress={() => navigate('ProfileScreen', 'Profile')}>
        <Icon name='user' solid size={25} color={getColor('Profile')} />
        <Text style={{ ...styles.navigationText, color: getColor('Profile') }}>Profile</Text>
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
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigationText: {
    fontSize: 12,
  }
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

const mapDispatchToProps = {
  setActiveTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
