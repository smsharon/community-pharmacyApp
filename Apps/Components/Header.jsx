import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function Header() {
    const {user} = useUser();
  return (
    <View className="flex flex-row items-center gap-2">
      <Image source={{uri:user?.imageUrl}}
           className="rounded-full w-10 h-12"

      />
      
      <View>
        <Text className="text-[16px]">Welcome</Text>
        <Text className="text-[20px] font-bold">{user?.fullName}</Text>

      </View>
    </View>
  )
}