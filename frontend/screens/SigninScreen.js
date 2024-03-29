import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView , Image } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../core/Redux/Actions/authActions';

const SignInScreen = () => {
    const navigation = useNavigation();
    const navigateSignup = () => {
        navigation.navigate("Signup");
    };
    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    useEffect(() => {
      if (authState.isLoggedIn) {
        navigation.navigate("HomeScreen");
      }
      if (authState.error) {
        setError(authState.error);
      }
    }, [authState, navigation]);
  
    const handleSignIn = () => {
      if (!email.trim() || !password.trim()) {
        setError("Please fill in all fields");
      } else {
        dispatch(loginUser({ email, password }));
      }
    };
    



    return (
        <ScrollView style={styles.container} >
            <View style={styles.contentContainer}>
                <Text style={styles.header}>Sign In</Text>
                <Image source={require('../assets/signin.png')}/>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#aaaaaa"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={navigateSignup}>
                        <Text style={styles.signupLink}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        color: "#A78BFA",
        fontSize: 34,
        fontWeight: "bold",
        margin: 40
    },
    input: {
        height: 55,
        borderColor: "#aaaaaa", 
        borderWidth: 1, 
        borderRadius: 8, 
        marginBottom: 10,
        fontSize: 16,
        paddingHorizontal: 15, 
    },
    forgotPassword: {
        color: "#aaaaaa",
        fontSize: 12,
    },
    buttonContainer: {
        backgroundColor: "#A78BFA",
        paddingVertical: 12,
        paddingHorizontal: 120,
        borderRadius: 10,
        marginTop: 50,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
    },
    signupContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    signupText: {
        color: "#aaaaaa",
        fontSize: 16,
    },
    signupLink: {
        color: "#A78BFA",
        fontSize: 16,
        fontWeight: "bold",
    },
    errorText: {
        color: "red",
        fontSize: 14,
        marginTop: 10,
        textAlign: "center",
    },
});

export default SignInScreen;
