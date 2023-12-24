import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from "@react-navigation/native";
import DoneButton from "react-native-onboarding-swiper/src/buttons/DoneButton";


export default OnboardingScreen = () => {
    const navigation = useNavigation();
    const handleDone = () => {
        navigation.navigate("Home")
    }
    const doneButton = ({...props}) => {
        return(
        <TouchableOpacity {...props} style={styles.doneButton}>
            <Text>Done</Text>
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
        <Onboarding
        onDone = {handleDone}
        onSkip = {handleDone}
        DoneButtonComponent = {doneButton}
        bottomBarHighlight = {false}
        titleStyles = {{color: 'black'}}
        subTitleStyles = {{color: 'black'}}
        pages={[
            {
            backgroundColor: '#A7F3D0',
            image: <Image style={styles.OnboardingImage} source={require('../assets/Onboarding-1.png')} />,
            title: 'Unlock Your Perfect Adventure',
            subtitle: ' Let us make planning a breeze! Use our Trip Budget Wizard to effortlessly generate a budget-friendly adventure',
            },
            {
                backgroundColor: '#FEF3C7',
                image: <Image style={styles.OnboardingImage} source={require('../assets/Onboarding-2.png')} />,
                title: 'Discover Your Destinations',
                subtitle: ' Explore and verify each location effortlessly. Get a sneak peek before making decisions. Your journey is in your hands ',
                },
            {
                backgroundColor: '#A78BFA',
                image: <Image style={styles.OnboardingImage} source={require('../assets/Onboarding-3.png')} />,
                title: 'Share, Discuss, Decide - Together!',
                subtitle: 'Trips are better with friends! Share plans, discuss, and take a vote on dates and activities. Modify your trip anytime, keeping everyone on board. ',
                },
                
        ]}
        />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    OnboardingImage: {
        width: 300,
        height: 300,
    }, 
    doneButton: {
        padding: 20,
    }
})