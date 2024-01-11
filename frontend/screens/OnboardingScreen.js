import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from "@react-navigation/native";
import LottieView from 'lottie-react-native';


export default OnboardingScreen = () => {
    const navigation = useNavigation();
    const handleDone = () => {
        navigation.navigate("Signin")
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
            backgroundColor: '#fff',
            image:  <LottieView 
            source={require('../assets/Animation - 1704993566447.json')} 
            autoPlay 
            loop 
            style={styles.OnboardingImage}
          /> ,
            title: 'Unlock Your Perfect Adventure',
            subtitle: ' Let us make planning a breeze! Use our Trip Budget Wizard to effortlessly generate a budget-friendly adventure',
            },
            {
                backgroundColor: '#fff',
                image:  <LottieView 
            source={require('../assets/Animation - 1704993589697.json')} 
            autoPlay 
            loop 
            style={styles.OnboardingImage}
          />,
                title: 'Discover Your Destinations',
                subtitle: ' Explore and verify each location effortlessly. Get a sneak peek before making decisions. Your journey is in your hands ',
                },
            {
                backgroundColor: '#fff',
                image:  <LottieView 
                source={require('../assets/Animation - 1704993466799.json')} 
                autoPlay 
                loop 
                style={styles.OnboardingImage}
              />,
                title: 'Share, Discuss, Decide',
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
        width: 200,
        height: 200,
    }, 
    doneButton: {
        padding: 20,
    }
})