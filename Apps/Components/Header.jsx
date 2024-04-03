import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const {user} = useUser();
  return (
    <View className="py-2">
        {/*user info sectiom*/}
    <View className="flex flex-row items-center gap-2">
      <Image source={{uri:user?.imageUrl}}
           className="rounded-full w-10 h-12"

      />
      
      <View>
        <Text className="text-[16px]">Welcome</Text>
        <Text className="text-[20px] font-bold">{user?.fullName}</Text>

      </View>
    </View>
    {/*search bar */}
    <View className="p-[9px] px-5 flex flex-row items-center bg-blue-50 mt-5 rounded-full border-[1px] border-blue-300">
    <Ionicons name="search" size={24} color="gray" />
        <TextInput placeholder='search'
         className="ml-2 text-[18px]"
         onChangeText={(value)=>console.log(value)}
         />
    </View>
    </View> 
  )
}