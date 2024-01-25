import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Modal,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  fetchChatrooms,
  createChatroom,
} from "../core/Redux/Actions/roomActions";

const RoomListScreen = ({ chatrooms }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [room_name, setRoomName] = useState("");
  const [room_description, setRoomDescription] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchChatrooms(token));
    }
  }, [dispatch, token]);

  const navigation = useNavigation();

  const navigateChat = (roomId) => {
    console.log("Navigating to ChatRoomScreen with room_id:", roomId);
    navigation.navigate("ChatRoomScreen", { roomId });
  };

  const handleSubmit = () => {
    dispatch(
      createChatroom(
        {
          room_name,
          room_description,
        },
        token
      )
    )
      .then((roomId) => {
        // Receiving roomId from the resolved promise
        setIsModalVisible(false);
        setRoomName("");
        setRoomDescription("");
        navigation.navigate("ChatRoomScreen", { roomId }); // Using roomId to navigate
        dispatch(fetchChatrooms(token));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderRoom = ({ item }) => (
    <TouchableOpacity
      style={styles.roomButton}
      onPress={() => navigateChat(item.id)}
    >
      <Text style={styles.roomText}>{item.room_name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}
      >
        <View style={styles.modalView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.modalTitle}>Create a Trip</Text>
            <TextInput
              placeholder="Room Name"
              onChangeText={setRoomName}
              value={room_name}
              style={styles.input}
            />
            <TextInput
              placeholder="Room Description"
              onChangeText={setRoomDescription}
              value={room_description}
              style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Create Trip</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={chatrooms}
          renderItem={renderRoom}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.roomList}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = (state) => ({
  chatrooms: state.chatroom.chatrooms,
  loading: state.chatroom.loading,
  error: state.chatroom.error,
});

const mapDispatchToProps = {
  fetchChatrooms,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  roomList: {
    padding: 20,
  },
  roomButton: {
    backgroundColor: "#A78BFA",
    padding: 35,
    borderRadius: 10,
    marginBottom: 10,
  },
  roomText: {
    color: "white",
    fontSize: 20,
  },
  addButton: {
    position: "absolute",
    right: 25,
    bottom: 25,
    backgroundColor: "#FF5733",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 120,
    marginHorizontal: 10,
    width: "95%",
    height: "40%",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
  },
  input: {
    height: 60,
    margin: 6,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#A78BFA",
  },
  button: {
    backgroundColor: "#A78BFA",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    margin: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomListScreen);
