import React, { useEffect, useState } from 'react'
import Assets from './Screens/Assets';
import Home from './Screens/Home';
import Control from './Screens/Control';
import Notifications from './Screens/Notifications';
import Login from './Screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import Add from './Screens/Add';
import { StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './Screens/Signup';


const Tab= createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const Welcome = () => {
  return(
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown:false, 
      tabBarStyle:{ backgroundColor:'#282A3A', borderRadius:10, marginBottom:30, position:'absolute', marginHorizontal:10, height:60},
      tabBarActiveTintColor: '#808080',
      tabBarInactiveTintColor:'#EEEEEE',
      tabBarHideOnKeyboard:true, 
      tabBarLabelStyle:{fontSize:12, paddingBottom:8},
      tabBarIconStyle:{marginTop:4},
      tabBarShowLabel:false
      }}>

      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon:()=>(
          <MaterialCommunityIcons name='arrow-decision' style={{fontSize:22, color:'#EEEEEE'}}/>
        ),
      }}
      />

      <Tab.Screen name='Control' component={Control}options={{
        tabBarIcon:()=>(
          <MaterialCommunityIcons name='wrench-outline' style={{fontSize:20, color:'#EEEEEE'}}/>
        ),
      }}
      />

      <Tab.Screen name=' ' component={Add}
        options={{
          tabBarIcon:()=>(
            <MaterialCommunityIcons name='plus-circle-outline' style={{fontSize:40, color:'#EEEEEE'}}/>
          ),
        }}
      />


      <Tab.Screen name='Assets' component={Assets}
        options={{
          tabBarIcon:()=>(
            <MaterialCommunityIcons name='truck-check-outline' style={{fontSize:24, color:'#EEEEEE'}}/>
          ),
        }}
      />

      <Tab.Screen name='Notifications' component={Notifications}
        options={{
          tabBarIcon:()=>(
            <MaterialCommunityIcons name='bell-outline' style={{fontSize:20, color:'#EEEEEE'}}/>
          ),
            tabBarBadge:4,
            tabBarBadgeStyle:{height:17, width:3}
        }}
      />

  </Tab.Navigator>

  )
}

const App = () => {
  
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
            component={Welcome}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;