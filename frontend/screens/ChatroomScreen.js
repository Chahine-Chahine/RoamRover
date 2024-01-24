import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAIResponse } from '../core/Redux/Actions/generateaiActions';
import app from '../firebaseConfig'; 
import { getDatabase, ref, onValue, off, push, serverTimestamp, query, orderByChild, equalTo ,set} from '@firebase/database';
import ChatHeader from '../components/common/ChatHeader';

const ChatRoomScreen = () => {
  const route = useRoute();
  const roomId = route.params?.roomId;
  const user = useSelector(state => state.auth.user);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const aiResponse = useSelector(state => state.Questionnaire.Questionnaire);
  const roomNameFromResponse = aiResponse.room ? aiResponse.room.room_name : null;
  const [roomName, setRoomName] = useState(roomNameFromResponse || "Chat Room");
  const [displayedMessage, setDisplayedMessage] = useState('');


  useEffect(() => {
    if (roomNameFromResponse) {
      setRoomName(roomNameFromResponse);
    }
  }, [roomNameFromResponse]);

  useEffect(() => {
    if (roomId) {
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
    }
  }, [roomId]);

  useEffect(() => {
    if (aiResponse && aiResponse.result && Array.isArray(aiResponse.result)) {
      const fullMessage = aiResponse.result.map(item => `${item.title}: ${item.description}`).join('\n');
      setDisplayedMessage('');
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex < fullMessage.length) {
          setDisplayedMessage(prev => prev + fullMessage[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [aiResponse]);


  const sendMessage = () => {
    if (message.trim().length > 0) {
      const database = getDatabase(app);
      const messageRef = ref(database, 'messages');
      const newMessageRef = push(messageRef);
  
      set(newMessageRef, {
        message_body: message,
        room_id: roomId,
        sender_id: user.id,
        username: user.username,
        timestamp: serverTimestamp()
      });
  
      const notificationRef = ref(database, 'notifications');
      push(notificationRef, {
        senderUsername: user.username,
        messageBody: message,
        roomId: roomId,
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

  const renderAIResponse = () => {
    if (aiResponse && aiResponse.error) {
      return <Text style={styles.message}>Error fetching AI response: {aiResponse.error}</Text>;
    } else {
      return <Text style={styles.message}>{displayedMessage}</Text>;
    }
  };

  return (
    <ImageBackground source={require('../assets/chat-bg.jpg')} style={styles.backgroundImage}>
      <ChatHeader roomName={roomName} roomId={roomId}/>
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {renderAIResponse()}
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