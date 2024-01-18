import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux'; 
import { updateUser } from '../core/Redux/Actions/authActions'; 

const ProfileUpdateScreen = ({user}) => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setbio] = useState('');
  const [password, setPassword] = useState('');
  const [image_url, setImageUri] = useState(null);
  const dispatch = useDispatch(); 
  const navigation = useNavigation();

  const handleUpdateProfile = () => {
    if (user && user.id) {
    dispatch(updateUser(user.id,{first_name, last_name, username, bio, password, image_url }));
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

      <TouchableOpacity onPress={handleSelectImage} style={styles.imageHolder}>
        {image_url ? 
          <Image source={{ uri: image_url }} style={styles.image} />
        : 
         <Image source={require('../assets/Default_pfp.svg.png')} style={styles.image}/>
          }
      </TouchableOpacity>
      <Text style={styles.photoText}>Edit Photo</Text>

          <TextInput
            style={styles.input}
            value={first_name}
            onChangeText={setFirstName}
            placeholder="First Name"
          />
          <TextInput
            style={styles.input}
            value={last_name}
            onChangeText={setLastName}
            placeholder="Last Name"
          />
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="New Username"
          />
          <TextInput
            style={styles.input}
            value={bio}
            onChangeText={setbio}
            placeholder="Bio"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="New Password"
            secureTextEntry
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
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  photoText:{
    textDecorationLine: 'underline',
    marginBottom: 30,
    color: '#A78BFA'
  },
  imageHolder: {
    width: 130,
    height: 130,
    borderRadius: 65,
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