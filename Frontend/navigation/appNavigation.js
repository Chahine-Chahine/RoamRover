import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignInScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import LocationDetailScreen from '../screens/LocationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GenerateTrip from '../screens/GenerateScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import LoadingScreen from '../screens/LoadingScreen';
import CustomtripScreen from '../screens/CustomtripScreen';
import Questionnaire from '../screens/AIquestionnaireScreen';

const Stack = createNativeStackNavigator();


export default AppNavigation = () => {

    return(
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Onboarding' options={{headerShown: false}} component={OnboardingScreen}/>
        <Stack.Screen name='Signin' options={{headerShown :false}} component={SignInScreen}/>
        <Stack.Screen name= 'Signup' options={{headerShown: false}} component={SignUpScreen}/>
        <Stack.Screen name= 'HomeScreen' options={{headerShown: false}} component={HomeScreen}/>
        <Stack.Screen name= 'LocationDetailScreen' options={{headerShown: false}} component={LocationDetailScreen}/>
        <Stack.Screen name= 'profileScreen' options={{headerShown: false}} component={ProfileScreen}/>
        <Stack.Screen name= 'GenerateTrip' options={{headerShown: false}} component={GenerateTrip}/>
        <Stack.Screen name= 'BookmarkScreen' options={{headerShown:false}} component={BookmarkScreen}/>
        <Stack.Screen name= 'LoadingScreen' options={{headerShown:false}} component={LoadingScreen}/>
        <Stack.Screen name= 'CustomtripScreen' options={{headerShown:false}} component={CustomtripScreen}/>
        <Stack.Screen name='Questionnaire' options={{headerShown:false}} component={Questionnaire}/>
        </Stack.Navigator>  
    </NavigationContainer>
    );
}