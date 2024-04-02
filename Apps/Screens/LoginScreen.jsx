import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  
  return (
    <View>
       <Image source={require('./../../assets/images/Login.jpg')}
           className="w-full h-[400px] object-cover"
       
       />
       <View className="p-8 bg-white mt-[-20px] rounded-t-3xl shadow-md">
        <Text className="text-[35px] font-bold">Utibu Pharmacy</Text>
        <Text className="text-[18px] text-slate-500 mt-6" >Never run out of your essential medications again. Easily refill your prescriptions through our app, and we'll ensure your medications are ready for pickup or delivery.</Text>
        <TouchableOpacity onPress={()=>console.log("SignIn")} className="p-4 bg-blue-500 rounded-full mt-20">
          <Text className="text-white text-center text-[18px]">Get Started</Text>
        </TouchableOpacity>

       </View>
    </View>
  )
}