import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 

const ProfileHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Profile</Text>
    <TouchableOpacity style={styles.logoutBtn}>
      <Icon name="sign-out-alt" size={18} color="#fff" />
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
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
  logoutText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5, 
  },
  logoutBtn: {
    flexDirection: 'row', 
    borderWidth: 0,
    borderRadius: 20, 
    backgroundColor: '#e63946', 
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  }
});

export default ProfileHeader;
