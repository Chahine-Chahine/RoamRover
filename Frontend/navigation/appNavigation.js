import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();


export default AppNavigation = () => {

    return(
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Onboarding' options={{headerShown: false}} component={OnboardingScreen}/>
        <Stack.Screen name='Home' options={{headerShown :false}} component={HomeScreen}/>
        </Stack.Navigator>  
    </NavigationContainer>
    );
}