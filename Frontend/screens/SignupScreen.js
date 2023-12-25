import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SignUpScreen = () => {
    const navigation = useNavigation();
    const navigateSignIn = () => {
        navigation.navigate("Signin");
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#aaaaaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#aaaaaa"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Already have an account? </Text>
                    <TouchableOpacity onPress={navigateSignIn}>
                        <Text style={styles.signupLink}>Sign In</Text>
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
});

export default SignUpScreen;
