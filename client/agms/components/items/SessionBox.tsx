import React from 'react'
import View from '../custom tags/View'
import Text from '../custom tags/Text'
import { FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

const SessionBox = () => {
  return (
    <Link href={`/workout-list`}>
      <View className='extraground w-full flex-row justify-between p-4 xs:p-5 rounded-3xl'>
      <View className=' w-[49%] gap-y-4'>
        <Text className=' capitalize heading' type='subHeading'>Biceps day</Text>
        <View>
          <Text className=' paragraph !text-xs xs:!text-sm capitalize ' type='para'>8  varients  |  60  min</Text>
        </View>
        <View className=' flex-row gap-2'>
          <View className=' extrashade rounded-3xl py-1 px-2 xs:py-2 xs:px-3  gap-2 self-start flex-row items-center'>
            <FontAwesome6 className='extraground p-1 !text-red-400 rounded-full text-xs !paragraph' name='fire'/>
            <Text type='default' className='paragraph !text-xs xs:!text-sm' >175 kcal</Text>
          </View>
          {/* <View className=' extrashade rounded-3xl py-2 px-3 gap-2 self-start flex-row items-center'>
            <Ionicons className='extraground p-1 rounded-full text-xs !paragraph' name='time'/>
            <Text type='default' className='paragraph !text-xs xs:!text-sm' >15 min</Text>
          </View> */}
        </View>
      </View>
      <View className=' w-[49%]'>
          <Text> </Text>
      </View>
    </View>
    </Link>
  )
}

export default SessionBox