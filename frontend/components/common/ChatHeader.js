import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../core/Redux/Actions/authActions';
import { updateChatRoom } from '../../core/Redux/Actions/roomActions';

const ChatHeader = ({ roomName, roomId }) => {
  const dispatch = useDispatch();
  const usersList = useSelector(state => state.auth.users || []);
  const token = useSelector(state => state.auth.token);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSelectUser = (userId) => {
    const isSelected = selectedUsers.includes(userId);
    setSelectedUsers(isSelected ? selectedUsers.filter(id => id !== userId) : [...selectedUsers, userId]);
  };
  const handleInvitePress = () => {
    const participants = selectedUsers;
    dispatch(updateChatRoom(roomId, participants, token));
    setIsModalVisible(false);
  };
  return (
    <View style={styles.header}>
      <Ionicons name="chevron-back-outline" size={24} color="#6B46D9" />
      <Text style={styles.chatRoomName}>{roomName}</Text>
      <TouchableOpacity style={styles.inviteButton} onPress={() => setIsModalVisible(true)}>
        <Text style={styles.inviteText}>Invite</Text>
      </TouchableOpacity>
      {/* <Ionicons name="camera-outline" size={30} color="#6B46D9" /> */}

      <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalView}>
          <ScrollView>
          {usersList.map((user, index) => ( 
              <TouchableOpacity key={index} style={[styles.userItem, selectedUsers.includes(user.id) ? styles.userItemSelected : null]}
                onPress={() => handleSelectUser(user.id)}>
                <Image source={{ uri: user.image_url }} style={styles.userImage} />
                <Text style={styles.userName}>{user.username}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.ModalinviteButton} onPress={handleInvitePress}>
            <Text style={styles.inviteButtonText}>Invite</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        borderBottomColor: '#6B46D9',
        borderBottomWidth: 1,
      },
      chatRoomName: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#6B46D9',
        marginLeft: 8,  
      },
      inviteButton: {
        backgroundColor: '#6B46D9',
        borderRadius: 20,
        padding: 5,
        paddingHorizontal: 15,
        marginLeft: 125,
      },
      ModalinviteButton:{
        backgroundColor: '#6B46D9',
        borderRadius: 20,
        padding: 5,
        paddingHorizontal: 15,
        marginTop: 15
      },
      inviteText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
      },
      modalView: {
        marginTop: 100,
        marginHorizontal: 20,
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
      userItemSelected: {
        backgroundColor: "#E8EAF6",
      },
      inviteButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
});

export default ChatHeader;
