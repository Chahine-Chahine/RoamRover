import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const RoomListScreen = () => {
  const rooms = [
    "Friday's night out",
    'Beach Batroon',
    'Full Tour South Lebanon',
    'Saturday Hike - camp',
  ];

  const navigation = useNavigation();

  const navigateChat = () => {
    navigation.navigate('ChatRoomScreen');
  }

  const renderRoom = ({ item }) => (
    <TouchableOpacity style={styles.roomButton} onPress={navigateChat}>
      <Text style={styles.roomText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Ionicons name="chevron-back-outline" size={25} color="black" />
        <Text style={styles.headerTitle}>Your previous rooms</Text>
        <View style={{ width: 25 }} /> 
      </View> */}
      <FlatList
        data={rooms}
        renderItem={renderRoom}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.roomList}
      />
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  roomList: {
    padding: 20,
  },
  roomButton: {
    backgroundColor: '#A78BFA',
    padding: 35,
    borderRadius: 10,
    marginBottom: 10,
  },
  roomText: {
    color: 'white',
    fontSize: 20,
  },
  addButton: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    backgroundColor: '#FF5733',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default RoomListScreen;
