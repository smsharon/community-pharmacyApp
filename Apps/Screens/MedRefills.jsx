import { View, Text } from 'react-native'
import React from 'react'
import { app } from '../../firebaseConfig';
import { getFirestore } from "firebase/firestore";


export default function MedRefills() {

    const db = getFirestore(app);
    const getCategoryList=()=>{

    }
  return (
    <View>
      <Text>MedRefills</Text>
    </View>
  )
}