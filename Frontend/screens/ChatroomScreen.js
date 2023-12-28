import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const ChatRoomScreen = () => {
  const [message, setMessage] = useState('');

  return (
    <ImageBackground
      source={require('../assets/chat-bg.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.header}>
        <Ionicons name="chevron-back-outline" size={24} color="#6B46D9" />
        <Text style={styles.chatRoomName}>Chat room name</Text>
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.inviteText}>Invite</Text>
        </TouchableOpacity>
        <Ionicons name="camera-outline" size={24} color="#6B46D9" />
      </View>

      <View style={styles.messagesContainer}>
        {/* Example message */}
        <Text style={styles.message}>Good morning, your trip plot for today is:</Text>
        {/* ... other messages */}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          placeholderTextColor="#6B46D9"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={24} color="#6B46D9" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
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
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  message: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 15,
    marginVertical: 5,
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#6B46D9',
    color: '#6B46D9',
  },
  sendButton: {
    backgroundColor: '#6B46D9',
    borderRadius: 25,
    padding: 10,
  },
});

export default ChatRoomScreen;
