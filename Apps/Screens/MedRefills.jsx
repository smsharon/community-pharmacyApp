import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app } from '../../firebaseConfig';
import { getFirestore,getDocs,collection } from "firebase/firestore";


export default function MedRefills() {

    const db = getFirestore(app);
    const [medicineList, setMedicineList]=useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(()=>{
        getMedicineList();

    },[])


    const getMedicineList=async()=>{
      setMedicineList([])
        const querySnapshot=await getDocs(collection(db,'medicines'));
        querySnapshot.forEach((doc)=>{
            console.log("Docs:",doc.data());
        })

    }
  return (
    <View className="p-5 py-12">
      <Text className="text-[30px] font-bold">Order your Medicines</Text>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    placeholder="Search for a medication"
                />
            </View>
    </View>
  )
}