import {View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const signIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext();
 
  if(!loading && isLogged) return <Redirect href='/' />

  const handleLogin = async () => {
    const result = await login();

    if(result){
      refetch();
    } else {
      Alert.alert('Error', 'Failed to login')
    }
  };

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <Image source={images.onboarding} style={{ width: '100%', height: '66%' }} resizeMode="contain" />

        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to Restate</Text>

          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
            Let's Get You Closer to {'\n'}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>
           <Text className='text-lg font-rubik text-black-200 text-center mt-12'>
            Login to Restate with Google
           </Text>
           <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
            <View className='flex flex-row items-center justify-center'>
            <Image
            source={icons.google}
            className='w-5 h-5'
            resizeMode='contain'
            ></Image>
            <Text className='text-lg ront-rubik-medium text-black-300 ml-2'>Continue with Google</Text>
            </View>
           </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn