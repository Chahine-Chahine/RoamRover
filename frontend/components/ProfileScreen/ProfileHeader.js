import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ProfileHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Profile</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', 
  },
 
});

export default ProfileHeader;
