import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Categories({categoryList}) {
  return (
    <View className="mt-3">
      <Text className="font-bold text-[20px]">Popular medicine</Text>
      <FlatList 
      data={categoryList}
      numColumns={2}
      renderItem={({item,index})=>(
        <TouchableOpacity className="flex-1 items-center justify-center p-2 border-[1px] border-gray-300 m-1 h-[130px] rounded-lg">
          <Image source={{uri:item?.image}}
          className="w-[80px] h-[100px]"
          />
          <Text className="text-[12px] mt-1">{item.name}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}