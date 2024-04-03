import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function ProfileScreen() {
    const {user}=useUser();
  return (
    <View className="p-5">
      <Image source={{uri:user?.imageUrl}}
        className="w-[100px] h-[100px] rounded-full items-center justify-center"
      />
    </View>
  )
}