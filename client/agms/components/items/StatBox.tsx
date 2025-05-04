import View from '../custom tags/View'
import Text from '../custom tags/Text'
import { FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

interface StatBoxProps {
  item:any;
}

const StatBox = ({item}:StatBoxProps) => {
  let Icon = item.icon

  const unitType = `${
  item.name == 'calories'? 'kcal':
  item.name == 'intake'? 'kcal':
  item.name == 'bmr'? 'kcal':
  item.name == 'weight'? 'kg':
  item.name == 'height'? 'cm':
  item.name == 'sleep'? 'hours':
  item.name == 'streak'? 'days':
  item.name == 'burn'? 'kcal':
  item.name == 'water'? 'glass':''
 }`

  const statStyle = item.statStyle?item.statStyle:'extraground'
  const iconStyle = item.iconStyle?item.iconStyle:''
  return (
    <Link href={`/detail/measurement/${3}`}>
      <View className={` ${statStyle} w-full p-4 xs:p-5 rounded-3xl gap-4`}>
        <View className=' flex-row justify-between items-center'>
            <Text className=' heading capitalize' type='subHeading'>{item.name}</Text>
            <Icon name={item.iconName} className={` ${iconStyle} !text-heading-dark p-[3%] rounded-full !text-xs`}/>
        </View>
        <View className=' flex-row gap-3 items-baseline'>
            <Text type='heading' className=' heading !text-xl xs:!text-xl '>{item.value}</Text>
            <Text type='para' className='paragraph'>{unitType}</Text>
        </View>
    </View>
    </Link>
  )
}

export default StatBox