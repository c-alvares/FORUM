import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/screens/loginScreen/login';
import Home from './src/screens/homeScreen/home';


const Stack = createNativeStackNavigator();


// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Login" component={Login} />
//     </Tab.Navigator>
//   );
// }

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />     
        <Stack.Screen name="Login" component={Login} />     
      </Stack.Navigator>
      {/* <MyTabs /> */}
    </NavigationContainer>
  )
}