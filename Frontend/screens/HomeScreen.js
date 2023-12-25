import { SafeAreaView } from "react-native";
import { View, Text, StyleSheet , TextInput, TouchableOpacity} from "react-native";
import React from "react";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Sign In</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#aaaaaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={true}
                />
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Don't have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signupLink}>Sign Up</Text>
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
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderBottomColor: "#aaaaaa",
        borderBottomWidth: 1,
        marginBottom: 20,
        fontSize: 16,
    },
    forgotPassword: {
        textAlign: "right",
        color: "#aaaaaa",
        fontSize: 12,
    },
    buttonContainer: {
        backgroundColor: "blue",
        paddingVertical: 15,
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
        marginTop: 20,
    },
    signupText: {
        color: "#aaaaaa",
        fontSize: 16,
    },
    signupLink: {
        color: "blue",
        fontSize: 16,
        fontWeight: "bold",
    },
});
export default HomeScreen;
