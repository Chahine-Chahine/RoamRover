import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatHeader = ({ roomName }) => {
  return (
    <View style={styles.header}>
      <Ionicons name="chevron-back-outline" size={24} color="#6B46D9" />
      <Text style={styles.chatRoomName}>{roomName}</Text>
      <TouchableOpacity style={styles.inviteButton}>
        <Text style={styles.inviteText}>Invite</Text>
      </TouchableOpacity>
      <Ionicons name="camera-outline" size={30} color="#6B46D9" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#6B46D9',
    borderBottomWidth: 1,
  },
  chatRoomName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#6B46D9',
  },
  inviteButton: {
    backgroundColor: '#6B46D9',
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 15,
  },
  inviteText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ChatHeader;
