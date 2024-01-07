import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux'; 
import { updateUser } from '../core/Redux/Actions/authActions'; 

const ProfileUpdateScreen = ({user}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setbio] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const dispatch = useDispatch(); 
  const navigation = useNavigation();

  const handleUpdateProfile = () => {
    if (user && user.id) {
    dispatch(updateUser(user.id,{ username, password, firstName, lastName, bio, imageUri }));
    navigation.navigate('profileScreen'); 
  }else {
    console.error("User ID is not available for update.");
  }
  };

  const handleSelectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled && result.assets) {
      const selectedImageUri = result.assets[0].uri;
      setImageUri(selectedImageUri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Profile</Text>

      <TouchableOpacity onPress={handleSelectImage} style={styles.imageHolder}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text>Select Image</Text>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="New Username"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="New Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        value={bio}
        onChangeText={setbio}
        placeholder="Bio"
      />

      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#A78BFA',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageHolder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(ProfileUpdateScreen);