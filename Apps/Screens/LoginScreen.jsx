import { View, Text } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View>
       <Image source={require('./../../assets/images/Login.jpg')}
           className="w-full h-[400px] object-cover"
       
       />
    </View>
  )
}