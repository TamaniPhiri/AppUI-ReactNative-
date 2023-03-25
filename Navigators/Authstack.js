import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import { StatusBar } from 'react-native';
import UserStack from './UserStack';

const Stack = createNativeStackNavigator()

const Authstack = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <StatusBar barStyle={"light-content"}/>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Signup'>
            <Stack.Screen 
            name='Login'
            component={Login}
            />
            <Stack.Screen 
              name='Signup'
              component={Signup}
            />
            <Stack.Screen 
            name='Welcome'
            component={UserStack}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Authstack