import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './Screens/Settings';

const Drawer= createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Settings" component={Settings}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
