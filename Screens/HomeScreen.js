// HomeScreen.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../Navigation/DrawerContent';
import ProfileScreen from './ProfileScreen';
import UserScreen from './UserScreen';
import Administrators from './Administrators';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="User" component={UserScreen} />
      <Drawer.Screen name="Administrators" component={Administrators} />
    </Drawer.Navigator>
  );
}

export default HomeScreen;
