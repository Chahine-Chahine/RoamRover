import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView , Image} from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../core/Redux/Actions/authActions';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const navigateSignIn = () => {
        navigation.navigate("Signin");
    };

    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (authState.isLoggedIn) {
            navigation.navigate("HomeScreen");
        }
        if (authState.error) {
            setError(authState.error);
        }
    }, [authState, navigation]);

    const handleSignup = () => {
        setError(""); 
        dispatch(registerUser({ username, email, password, first_name, last_name }));
    };

    return (
        <>
        <ScrollView style={styles.container} >
        <View style={styles.contentContainer}>
                <Text style={styles.header}>Sign Up</Text>
                <Image source={require('../assets/signup.png')}/>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#aaaaaa"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    placeholderTextColor="#aaaaaa"
                    value={first_name}
                    onChangeText={setFirstName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor="#aaaaaa"
                    value={last_name}
                    onChangeText={setLastName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#aaaaaa"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={navigateSignIn}>
                        <Text style={styles.signupLink}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ScrollView>
        </>
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
        margin: 30,

    },
    input: {
        height: 55,
        borderColor: "#aaaaaa", 
        borderWidth: 1, 
        borderRadius: 8, 
        marginBottom: 10,
        fontSize: 16,
        paddingHorizontal: 10, 
    },
    buttonContainer: {
        backgroundColor: "#A78BFA",
        paddingVertical: 12,
        paddingHorizontal: 120,
        borderRadius: 10,
        marginTop: 20,
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
});

export default SignUpScreen;
