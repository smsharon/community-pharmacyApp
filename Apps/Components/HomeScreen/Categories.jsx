import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'

export default function Categories({categoryList}) {
  return (
    <View className="mt-3">
      <Text className="font-bold text-[20px]">Popular medicine</Text>
      <FlatList 
      data={categoryList}
      numColumns={3}
      renderItem={({item,index})=>(
        <View className="flex-1 items-center justify-center p-4 border-[1px] border-gray-300 m-1 h-[250px] rounded-lg">
          <Image source={{uri:item?.image}}
          className="w-[100px] h-[200px]"
          />
          <Text>{item.name}</Text>
        </View>
      )}
      />
    </View>
  )
}