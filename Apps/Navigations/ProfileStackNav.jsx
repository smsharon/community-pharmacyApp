import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../Screens/ProfileScreen'
import MedOrders from '../Screens/MedOrders'

const Stack = createStackNavigator();
export default function ProfileStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='profile-tab'
      options={{
        headerShown:false
      }}
      component={ProfileScreen} />
      <Stack.Screen name='orders-tab' component={MedOrders} />
    </Stack.Navigator>
  )
}