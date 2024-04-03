import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Slider from '../Components/HomeScreen/Slider'
import { getFirestore } from "firebase/firestore";
import { app } from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

export default function HomeScreen() {
    const db = getFirestore(app);
    const [sliderList, setSliderList]=useState([]);
    useEffect(()=>{
      getSliders();

    },[])
    /**used to get sliders for home screen */
    const getSliders=async()=>{
    const querySnapshot = await getDocs(collection(db, "Sliders"));
querySnapshot.forEach((doc) => {
  
  
  setSliderList(sliderList=>[...sliderList,doc.data()]);
});


    }
  return (
    <View className="py-8 px-6 bg-white flex-1">
      <Header />
      {/*slider */}
      <Slider sliderList={sliderList} />
    </View>
  )
}