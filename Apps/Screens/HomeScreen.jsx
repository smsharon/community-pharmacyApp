import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Slider from '../Components/HomeScreen/Slider'
import { getFirestore } from "firebase/firestore";
import { app } from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import Categories from '../Components/HomeScreen/Categories';

export default function HomeScreen() {
    const db = getFirestore(app);
    const [sliderList, setSliderList]=useState([]);
    const [categoryList, setCategoryList]=useState([]);
    useEffect(()=>{
      getSliders();
      getCategoryList();

    },[])
    /**used to get sliders for home screen */
    const getSliders=async()=>{
      setSliderList([])
    const querySnapshot = await getDocs(collection(db, "Sliders"));
querySnapshot.forEach((doc) => {
  
  
  setSliderList(sliderList=>[...sliderList,doc.data()]);
});


    }
    /**used to gcategory list for home screen */
    const getCategoryList=async()=>{
      setCategoryList([])
    const querySnapshot = await getDocs(collection(db, "Categories"));
querySnapshot.forEach((doc) => {
  console.log("Docs:",doc.data());
  setCategoryList(CategoryList=>[...CategoryList,doc.data()]);
});
    }



  return (
    <View className="py-8 px-6 bg-white flex-1">
      <Header />
      {/*slider */}
      <Slider sliderList={sliderList} />
      {/*categoryList*/}
      <Categories categoryList={categoryList} />
    </View>
  )
}