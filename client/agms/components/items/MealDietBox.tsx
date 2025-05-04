import React from 'react'
import View from '../custom tags/View'
import Text from '../custom tags/Text'
import { FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { Image } from 'react-native'

const MealDietBox = () => {
  return (
    <Link href={`/detail/food/${3}`}>
      <View className='extraground w-full flex-row justify-between p-4 xs:p-5 rounded-3xl'>
      <View className=' w-[49%] gap-y-4'>
        <Text className=' capitalize heading' type='subHeading'>chicken rice</Text>
        <View className='gap-2'>
          <Text className=' paragraph !text-xs xs:!text-sm capitalize ' type='para'>20g  protien  |  76g  carb</Text>
          <Text className=' paragraph !text-xs xs:!text-sm capitalize ' type='para'>8g  fat  |  <Text className='!text-xs xs:!text-sm text-primary-default'> click more...</Text></Text>
        </View>
        <View className=' flex-row gap-2'>
          <View className=' extrashade rounded-3xl py-2 px-3 gap-2 self-start flex-row items-center'>
            <FontAwesome6 className='extraground p-1 !text-primary-default rounded-full text-xs !paragraph' name='fire'/>
            <Text type='default' className='paragraph !text-xs xs:!text-sm' >175 kcal</Text>
          </View>
          {/* <View className=' extrashade rounded-3xl py-2 px-3 gap-2 self-start flex-row items-center'>
            <Ionicons className='extraground p-1 rounded-full text-xs !paragraph' name='time'/>
            <Text type='default' className='paragraph !text-xs xs:!text-sm' >15 min</Text>
          </View> */}
        </View>
      </View>
      <View className=' w-[49%] relative overflow-hidden rounded-2xl bg-extrashade-default'>
          <Image className=' w-full h-full' source={require('../../assets/images/test-food.jpg')}/>
      </View>
    </View>
    </Link>
  )
}

export default MealDietBox