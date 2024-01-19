import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const ChatRoomScreen = () => {
  const route = useRoute();
  const roomId = route.params?.roomId;
  const [message, setMessage] = useState('');
  const [displayedMessage, setDisplayedMessage] = useState('');
  const aiResponse = useSelector(state => state.Questionnaire.Questionnaire);
  const roomNameFromResponse = aiResponse.room ? aiResponse.room.room_name : null;
  const [roomName, setRoomName] = useState(roomNameFromResponse || "Chat Room");

  useEffect(() => {
    if (roomNameFromResponse) {
      setRoomName(roomNameFromResponse);
    }
  }, [roomNameFromResponse]);
  

  useEffect(() => {
    if (aiResponse && aiResponse.result && Array.isArray(aiResponse.result)) {
      const fullMessage = aiResponse.result.map(item => `${item.title}: ${item.description}`).join('\n');
      setDisplayedMessage('');
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex < fullMessage.length) {
          setDisplayedMessage((prev) => prev + fullMessage[currentIndex]);
          currentIndex++; 
        } else {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [aiResponse]);

  const processAIResponse = () => {
    if (aiResponse && aiResponse.error) {
      return <Text style={styles.message}>Error fetching AI response: {aiResponse.error}</Text>;
    } else {
      return <Text style={styles.message}>{displayedMessage}</Text>;
    }
  };


  return (
    <>
      <ImageBackground 
        source={require('../assets/chat-bg.jpg')}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.header}>
          <Ionicons name="chevron-back-outline" size={24} color="#6B46D9" />
          <Text style={styles.chatRoomName}>{roomName}</Text>
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.inviteText}>Invite</Text>
          </TouchableOpacity>
          <Ionicons name="camera-outline" size={30} color="#6B46D9" />
        </View>
        <ScrollView>
          <View style={styles.messagesContainer}>
            <Text style={styles.username}>AI</Text>
            {processAIResponse()}
          </View>
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            placeholderTextColor="#6B46D9"
          />
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
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
