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
import ProfileUpdateScreen from '../screens/UpdateprofileScreen';
import ChatRoomScreen from '../screens/ChatroomScreen';
import RoomListScreen from '../screens/roomlistScreen';

const Stack = createNativeStackNavigator();


export default AppNavigation = () => {

    return(
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Onboarding' options={{headerShown: false}} component={OnboardingScreen}/>
        <Stack.Screen name='Signin' options={{headerShown :false}} component={SignInScreen}/>
        <Stack.Screen name= 'Signup' options={{headerShown: false}} component={SignUpScreen}/>
        <Stack.Screen name= 'HomeScreen' options={{headerShown: false}} component={HomeScreen}/>
        <Stack.Screen name= 'LocationDetailScreen' options={{headerShown: true}} component={LocationDetailScreen}/>
        <Stack.Screen name= 'profileScreen' options={{headerShown: true, headerTitle: 'Profile'}} component={ProfileScreen}/>
        <Stack.Screen name= 'GenerateTrip' options={{headerShown: true}} component={GenerateTrip}/>
        <Stack.Screen name= 'BookmarkScreen' options={{headerShown:true, headerTitle: 'Bookmarks'}} component={BookmarkScreen}/>
        <Stack.Screen name= 'LoadingScreen' options={{headerShown:true}} component={LoadingScreen}/>
        <Stack.Screen name= 'CustomtripScreen' options={{headerShown:true}} component={CustomtripScreen}/>
        <Stack.Screen name='Questionnaire' options={{headerShown:true}} component={Questionnaire}/>
        <Stack.Screen name='ProfileUpdateScreen' options={{headerShown: true}} component={ProfileUpdateScreen}/>
        <Stack.Screen name='ChatRoomScreen' options={{headerShown: false}} component={ChatRoomScreen}/>
        <Stack.Screen name='RoomListScreen' options={{headerShown:true}} component={RoomListScreen}/>
        </Stack.Navigator>  
    </NavigationContainer>
    );
}