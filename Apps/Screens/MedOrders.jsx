import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../../firebaseConfig';

export default function MedOrders() {
    const db = getFirestore(app);
    const [orderList, setOrderList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "orders"));
            const orders = [];
            querySnapshot.forEach((doc) => {
                orders.push(doc.data());
            });
            setOrderList(orders);
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    }

    const renderOrder = ({ item }) => {
      // Format date if needed (replace 'dateField' with your actual field name)
      const formattedDate = item.orderDate ? new Date(item.orderDate).toLocaleDateString() : '';
  
      return (
        
          <View style={{ paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
              <Text>Name: {item.medication}</Text>
              <Text>Quantity: {item.quantity}</Text>
              <Text>Date: {formattedDate}</Text>
              {/* Add more order details as needed */}
          </View>
          
      );
  };
  

    return (
      <View className="p-5 py-12">
      <Text className="text-[30px] font-bold">Track your previous orders</Text>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={orderList}
                    renderItem={renderOrder}
                    
                    ListEmptyComponent={<Text>No previous orders found.</Text>}
                />
            )}
        </View>
    )
}
