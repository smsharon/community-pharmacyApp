import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/HomeScreen/Slider'
import { getFirestore } from "firebase/firestore";
import { app } from '../../firebaseConfig';

export default function HomeScreen() {
    const db = getFirestore(app);
    const getSliders=()=>{

    }
  return (
    <View className="py-8 px-6 bg-white flex-1">
      <Header />
      {/*slider */}
      <Slider />
    </View>
  )
}