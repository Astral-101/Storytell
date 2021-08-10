import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import StackNavigation from './StackNavigation';


const Drawer = createDrawerNavigator();
const DrawerNavigator =()=>{
    return(
     <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackNavigation} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
    
};

export default DrawerNavigator;