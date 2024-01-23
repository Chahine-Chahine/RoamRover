import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { app } from '../firebaseConfig'; 
import { getDatabase, ref, onValue, off, push, serverTimestamp, query, orderByChild , equalTo } from '@firebase/database';

const ChatRoomScreen = () => {
  const route = useRoute();
  const roomId = route.params?.roomId; 
  const user = useSelector(state => state.auth.user); 
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const database = getDatabase(app);
    const messagesRef = ref(database, 'messages');
    const messagesQuery = query(messagesRef, orderByChild('room_id'), equalTo(roomId));
    
    onValue(messagesQuery, snapshot => {
      const fetchedMessages = snapshot.val() || {};
      const parsedMessages = Object.keys(fetchedMessages).map(key => ({
        ...fetchedMessages[key],
        id: key
      }));
      setMessages(parsedMessages);
    });

    return () => {
      off(messagesQuery, 'value');
    };
  }, [roomId]);

  const sendMessage = () => {
    if (message.trim().length > 0) {
      const database = getDatabase(app);
      push(ref(database, 'messages'), {
        message_body: message,
        room_id: roomId,
        sender_id: user.id, // Replace with actual user ID
        username: user.username, // Replace with actual username
        timestamp: serverTimestamp()
      });
      setMessage('');
    }
  };

  const renderMessages = () => {
    return messages.sort((a, b) => a.timestamp - b.timestamp).map((msg, index) => (
      <View key={msg.id || index} style={styles.messageContainer}>
        <Text style={styles.username}>{msg.username}</Text>
        <Text style={styles.message}>{msg.message_body}</Text>
      </View>
    ));
  };

  return (
    <ImageBackground source={require('../assets/chat-bg.jpg')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {renderMessages()}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
          placeholderTextColor="#6B46D9"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Ionicons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImageStyle: {
    resizeMode: 'cover', 
    transform: [{ scale: 1 }], 
  },
  messagesContainer: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  username: {
    fontSize: 14,
    color: '#6B46D9',
    fontWeight: 'bold',
  },
  message: {
    backgroundColor: '#6B46D9',
    borderRadius: 20,
    padding: 15,
    marginVertical: 5,
    fontSize: 16,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 10
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    color: '#6B46D9',
  },
  sendButton: {
    borderRadius: 25,
    padding: 10,
  },
});

export default ChatRoomScreen;