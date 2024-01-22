import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../core/Redux/Actions/authActions";

const ChatRoomScreen = ({ route }) => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.auth.users);
  console.log("usersList:", usersList);
  const token = useSelector((state) => state.auth.token);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [displayedMessage, setDisplayedMessage] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchAllUsers(token));
  }, [dispatch, token]);

  const aiResponse = useSelector((state) => state.Questionnaire.Questionnaire);
  const roomNameFromResponse = aiResponse.room
    ? aiResponse.room.room_name
    : null;
  const isAIRoom = route.params?.isAIRoom;
  const [roomName, setRoomName] = useState(roomNameFromResponse || "Chat Room");

  useEffect(() => {
    if (roomNameFromResponse) {
      setRoomName(roomNameFromResponse);
    }
  }, [roomNameFromResponse]);

  useEffect(() => {
    if (
      aiResponse &&
      aiResponse.result &&
      Array.isArray(aiResponse.result) &&
      isAIRoom
    ) {
      const fullMessage = aiResponse.result
        .map((item) => `${item.title}: ${item.description}`)
        .join("\n");
      setDisplayedMessage("");
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
  }, [aiResponse, isAIRoom]);

  const processAIResponse = () => {
    // Add condition to check if it's an AI-generated room
    if (isAIRoom) {
      if (aiResponse && aiResponse.error) {
        return (
          <Text style={styles.message}>
            Error fetching AI response: {aiResponse.error}
          </Text>
        );
      } else {
        return <Text style={styles.message}>{displayedMessage}</Text>;
      }
    }
    return null; // Return null if not an AI-generated room
  };

  const handleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  return (
    <>
      <ImageBackground
        source={require("../assets/chat-bg.jpg")}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.header}>
          <Ionicons name="chevron-back-outline" size={24} color="#6B46D9" />
          <Text style={styles.chatRoomName}>{roomName}</Text>
          <TouchableOpacity
            style={styles.inviteButton}
            onPress={() => setIsModalVisible(true)}
          >
            <Text style={styles.inviteText}>Invite</Text>
          </TouchableOpacity>
          <Ionicons name="camera-outline" size={30} color="#6B46D9" />
        </View>
        <ScrollView>
          {isAIRoom && (
            <View style={styles.messagesContainer}>
              <Text style={styles.username}>AI</Text>
              {processAIResponse()}
            </View>
          )}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalView}>
          <ScrollView>
            {usersList.map((user, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.userItem,
                  selectedUsers.includes(user.id)
                    ? styles.userItemSelected
                    : null,
                ]}
                onPress={() => handleSelectUser(user.id)}
              >
                <Image
                  source={{ uri: user.image_url }}
                  style={styles.userImage}
                />
                <Text style={styles.userName}>{user.username}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImageStyle: {
    resizeMode: "cover",
    transform: [{ scale: 1 }],
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "#6B46D9",
    borderBottomWidth: 1,
  },
  chatRoomName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#6B46D9",
  },
  inviteButton: {
    backgroundColor: "#6B46D9",
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 15,
  },
  inviteText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  messagesContainer: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  username: {
    fontSize: 14,
    color: "#6B46D9",
    fontWeight: "bold",
  },
  message: {
    backgroundColor: "#6B46D9",
    borderRadius: 20,
    padding: 15,
    marginVertical: 5,
    fontSize: 16,
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    color: "#6B46D9",
  },
  sendButton: {
    borderRadius: 25,
    padding: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "white",
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#2196F3",
    borderRadius: 10,
    padding: 10,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  userItemSelected: {
    backgroundColor: "#E8EAF6", // Or any other color you prefer
  },
});

export default ChatRoomScreen;
