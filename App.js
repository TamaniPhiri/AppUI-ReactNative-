import React from 'react'
import Settings from './Screens/Settings';
import Home from './Screens/Home';
import Assets from './Screens/Assets';
import Notifications from './Screens/Notifications';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import Add from './Screens/Add';

const Tab= createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>

        <Tab.Navigator initialRouteName='Home' screenOptions={{
            headerShown:false, 
            tabBarStyle:{ backgroundColor:'#282A3A', borderRadius:10, marginBottom:5, position:'absolute', marginHorizontal:10, height:70},
            tabBarActiveTintColor: '#808080',
            tabBarInactiveTintColor:'#EEEEEE',
            tabBarHideOnKeyboard:true, 
            tabBarLabelStyle:{fontSize:12, paddingBottom:8},
            tabBarIconStyle:{marginTop:4},
            }}>

            <Tab.Screen name='Home' component={Home} options={{
              tabBarIcon:()=>(
                <MaterialCommunityIcons name='arrow-decision' style={{fontSize:19, color:'#EEEEEE'}}/>
              ),
              
            }}
            />

            <Tab.Screen name='Assets' component={Assets}options={{
              tabBarIcon:()=>(
                <MaterialCommunityIcons name='truck-check-outline' style={{fontSize:20, color:'#EEEEEE'}}/>
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

            <Tab.Screen name='Notifications' component={Notifications}
            options={{
              tabBarIcon:()=>(
                <MaterialCommunityIcons name='bell-outline' style={{fontSize:19, color:'#EEEEEE'}}/>
              ),
              tabBarBadge:2,
              tabBarBadgeStyle:{height:15, width:3}
            }}
            />

            <Tab.Screen name='Settings' component={Settings}
              options={{
                tabBarIcon:()=>(
                  <MaterialCommunityIcons name='wrench-outline' style={{fontSize:19, color:'#808080'}}/>
                ),
              }}
            />

        </Tab.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App