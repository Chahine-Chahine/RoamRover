import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from 'react-redux';
import { loginUser } from '../core/Redux/Actions/authActions';

const SignInScreen = () => {
    const navigation = useNavigation();
    const navigateSignup = () => {
        navigation.navigate("Signup");
    };
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignIn = () => {
        if (!username.trim() || !password.trim()) {
            setError("Please fill in all fields");
        } else {
            dispatch(loginUser({ username, password }));
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Sign In</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#aaaaaa"
                    value={username}
                    onChangeText={setUsername}
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    header: {
        color: "#A78BFA",
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: 40,
    },
    input: {
        height: 40,
        borderBottomColor: "#aaaaaa",
        borderBottomWidth: 1,
        marginBottom: 20,
        fontSize: 16,
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
        marginTop: 20,
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
