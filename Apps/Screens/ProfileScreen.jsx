import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import orders from './../../assets/images/orders.jpg'
import refills from './../../assets/images/refills.jpg'
import logout from './../../assets/images/logout.png'

export default function ProfileScreen() {
    const {user}=useUser();

    const menuList=[
        {
            id:1,
            name: 'My Orders',
            icon: orders,
        },
        {
            id:1,
            name: 'My Refills',
            icon: refills,
        },
        {
            id:1,
            name: 'Logout',
            icon: logout,
        }
    ]
  return (
    <View className="p-5">
        <View className="items-center mt-14">
        <Image source={{uri:user?.imageUrl}}
        className="w-[100px] h-[100px] rounded-full"
      />
      <Text className="font-bold text-[25px] mt-2">{user?.fullName}</Text>
      <Text className="text-[18x] mt-2 text-gray-500">{user?.primaryEmailAddress?.emailAddress}</Text>

        </View>
      
    </View>
  )
}