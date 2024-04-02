import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import MedOrders from '../Screens/MedOrders';
import MedRefills from '../Screens/MedRefills';
import ProfileScreen from '../Screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name='home' component={HomeScreen}
           options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginBottom:3}}>Home</Text>
            ),
            tabBarIcon:({color,size})=>(
                <Ionicons name="home" size={size} color={color} />

            )
           }}
        />
        <Tab.Screen name='orders' component={MedOrders}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginBottom:3}}>Medication Orders</Text>
            ),
            tabBarIcon:({color,size})=>(
                <Ionicons name="receipt" size={size} color={color} />
            )
           }}
        />
        <Tab.Screen name='refills' component={MedRefills} 
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginBottom:3}}>Medication refills</Text>
            ),
            tabBarIcon:({color,size})=>(
                <Ionicons name="medkit" size={size} color={color} />

            )
           }}
        />
        <Tab.Screen name='profile' component={ProfileScreen} 
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginBottom:3}}>Profile</Text>
            ),
            tabBarIcon:({color,size})=>(
                <Ionicons name="person-circle" size={size} color={color} />

            )
           }}
        />
    </Tab.Navigator>
  )
}