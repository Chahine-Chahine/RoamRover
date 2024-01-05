import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ProfileHeader = ({ onBack }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onBack}>
      {/* Back Icon */}
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Profile</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});

export default ProfileHeader;
