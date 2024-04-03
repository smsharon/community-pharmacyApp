import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app } from '../../firebaseConfig';
import { getFirestore,getDocs,collection } from "firebase/firestore";
import { addDoc } from 'firebase/firestore';


export default function MedRefills() {

    const db = getFirestore(app);
    const [medicineList, setMedicineList]=useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    

    useEffect(()=>{
        getMedicineList();

    },[])


    const getMedicineList = async () => {
      const querySnapshot = await getDocs(collection(db, 'medicines'));
      const medicines = [];
      querySnapshot.forEach((doc) => {
          const data = doc.data();
          medicines.push(data);
      });
      setMedicineList(medicines);
  }
  const refillMedication = async (medication) => {
    try {
      // Construct the order object with necessary details
      const order = {
          medication: medication.name,
          quantity: 1, // For simplicity, assuming quantity is always 1
          orderDate: new Date().toISOString(), // Current date and time
          // Add more fields as needed
      };

      // Add the order document to the "orders" collection
      const docRef = await addDoc(collection(db, 'orders'), order);
      console.log('Order placed successfully with ID: ', docRef.id);
    Alert.alert(
        "Order Placed",
        "You have successfully placed an order. Payment will be done on pickup.",
        [
            {
                text: "OK",
                onPress: () => console.log("Order placed alert closed"),
            }
        ]
    );
  } catch (error) {
    console.error('Error placing order: ', error);
    // Show an error message to the user
    alert('Failed to place order. Please try again later.');
}
};

  const renderItem = ({ item }) => (
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: 10, paddingTop:4, borderRadius: 8, marginBottom: 10,padding: 10,}}>
          <View>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>Category: {item.category}</Text>
              <Text>Dosage: {item.dosage}</Text>
              <Text>Price: {item.price}</Text>
          </View>
          <TouchableOpacity onPress={() => refillMedication(item)}>
              <Text style={{ color: 'blue' }}>Refill</Text>
          </TouchableOpacity>
      </View>
  );
  const filterMedicines = () => {
    return medicineList.filter(medicine => medicine.name.toLowerCase().includes(searchQuery.toLowerCase()));
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
                <FlatList
                data={filterMedicines()}
                
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
            />
            </View>
    </View>
  )
}