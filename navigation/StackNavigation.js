import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import Story from '../screens/Story';

const Stack = createStackNavigator();

const StackNavigation =()=>{
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions = {{headerShown: false}}>
      <Stack.Screen name="Home" component={BottomNavigation} />
      <Stack.Screen name="Story" component={Story} />

    </Stack.Navigator>
  );
}

export default StackNavigation;
