import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import MedOrders from '../Screens/MedOrders';
import MedRefills from '../Screens/MedRefills';
import ProfileScreen from '../Screens/ProfileScreen';


const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name='home' component={HomeScreen} />
        <Tab.Screen name='orders' component={MedOrders} />
        <Tab.Screen name='refills' component={MedRefills} />
        <Tab.Screen name='profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}