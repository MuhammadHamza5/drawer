// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './HomeScreen.js';
// import SettingScreen from './SettingScreen';
// import BotScr from './BotScr.js';

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="HomeScreen" component={HomeScreen} />
//         <Drawer.Screen name="SettingScreen" component={SettingScreen} />
//         <Tab.Screen name="BotScr" component={BotScr} />
        
//       </Drawer.Navigator>
//       <Tab.Navigator>
//         <Tab.Screen name="BotScr" component={BotScr} />
//         <Tab.Screen name="HomeScreen" component={HomeScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
   
//   );
// }

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen.js';
import SettingScreen from './SettingScreen';
import BotScr from './BotScr.js';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
  <Drawer.Navigator
    initialRouteName="HomeScreen"
    drawerStyle={{
      backgroundColor: 'blue', // Background color of the drawer
      height: 100,             // Height of the drawer
    }}
    drawerContentOptions={{
      activeTintColor: 'red',   // Color for active items
      inactiveTintColor: 'black', // Color for inactive items
    }}
  >
    <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    <Drawer.Screen name="TabNavigator" component={TabNavigator} />
  </Drawer.Navigator>
</NavigationContainer>

  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: 'blue',  // Background color of the tab bar
        height: 60,               // Height of the tab bar
      },
      activeTintColor: 'black',   // Color for active tab
      inactiveTintColor: 'red', // Color for inactive tabs
    }}
    >
      <Tab.Screen name="BotScr" component={BotScr} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
}
