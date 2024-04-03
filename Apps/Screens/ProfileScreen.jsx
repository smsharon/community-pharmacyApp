import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import orders from './../../assets/images/orders.jpg'
import refills from './../../assets/images/refills.jpg'
import logout from './../../assets/images/logout.png'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from "@clerk/clerk-expo";

export default function ProfileScreen() {
    const {user}=useUser();
    const navigation = useNavigation();
    const { isLoaded,signOut } = useAuth();
    const menuList=[
        {
            id:1,
            name: 'My Orders',
            icon: orders,
            path: 'orders-tab'
        },
        {
            id:2,
            name: 'My Refills',
            icon: refills,
            path: 'orders'
        },
        {
            id:3,
            name: 'Logout',
            icon: logout,
        }
    ]

    const onMenuPress=(item)=>{
        if(item.name=='Logout')
        {
            signOut();
            return;
        }
        item?.path?navigation.navigate(item.path):null;

    }
  return (
    <View className="p-5">
        <View className="items-center mt-14">
        <Image source={{uri:user?.imageUrl}}
        className="w-[100px] h-[100px] rounded-full"
      />
      <Text className="font-bold text-[25px] mt-2">{user?.fullName}</Text>
      <Text className="text-[18x] mt-2 text-gray-500">{user?.primaryEmailAddress?.emailAddress}</Text>

        </View>
        <FlatList
        data={menuList}
        numColumns={2}
        style={{marginTop:20}}
        renderItem={({item,index})=>(
            <TouchableOpacity
            onPress={()=>onMenuPress(item)}
            className="flex-1 p-3 border-[1px] items-center mx-2 mt-4 rounded-lg border-blue-400 bg-blue-50">
                {item.icon&& <Image source={item?.icon}
                className="w-[50px] h-[50px]"
                />}
                <Text className="text-[12px] mt-2 text-blue-700">{item.name}</Text>
            </TouchableOpacity>
        )}
        />
      
    </View>

  )
}