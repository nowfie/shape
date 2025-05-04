import { SafeAreaView, ScrollView, TextInput } from 'react-native'
import React from 'react'
import Main from '@/components/custom tags/Main'
import Section from '@/components/custom tags/Section'
import Text from '@/components/custom tags/Text'
import View from '@/components/custom tags/View'
import Line from '@/components/custom tags/Line'
import { Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import HeaderProfile from '@/static_components/HeaderProfile'
import MealBox from '@/components/items/MealBox'
import StatBox from '@/components/items/StatBox'
import GridView from '@/components/custom tags/GridView'

const DummyBox = () =>{
  return(
    <Section>
      <Main className=' p-4 xs:p-5 bg-primary-default rounded-3xl gap-7 '>
        <View className=''>
          <Text className='capitalize text-primary-default text-center !text-3xl px-3' type='heading'>Transform Today for a Stronger Tomorrow</Text>
        </View>
        <View className=' '>
          <SearchBar/>
        </View>
      </Main>
    </Section>
  )
}

const statList = [
  {
    name: 'weight',
    icon: MaterialCommunityIcons, // MaterialCommunityIcons
    iconName: 'scale-bathroom', // Represents weight measurement
    iconStyle: 'bg-red-500',
    value: 72.20,
    statStyle: 'extraground',
  },
  {
    name: 'height',
    icon: FontAwesome5, // FontAwesome5
    iconName: 'ruler', // Represents height measurement
    iconStyle: 'bg-pink-500',
    value: 170,
    statStyle: 'extraground',
  },
  {
    name: 'bmi',
    icon: Ionicons, // Ionicons
    iconName: 'fitness-outline', // Represents fitness and body measurements
    iconStyle: 'bg-green-500',
    value: 23.1,
    statStyle: 'extraground',
  },
  {
    name: 'bmr',
    icon: Feather, // Feather
    iconName: 'activity', // Represents basal metabolic rate (energy/activity)
    iconStyle: 'bg-blue-500',
    value: 1247,
    statStyle: 'extraground',
  },
  {
    name: 'sleep',
    icon: FontAwesome5, // FontAwesome5
    iconName: 'bed', // Represents sleep and rest
    iconStyle: 'bg-purple-500',
    value: 6,
    statStyle: 'extraground',
  },
  {
    name: 'streak',
  icon: FontAwesome5, // FontAwesome5
  iconName: 'fire', // Represents streak as a continuous flame
  iconStyle: 'bg-orange-500',
  value: 1045,
  statStyle: 'extraground',
  },
];


const StatsSection = () =>{
  return(
    <Section>
      <Main className=' gap-5'>
        <Text className=' heading capitalize' type='heading'>my statistics</Text>
        <GridView
          data={statList}
          item={StatBox}
          column={2}
          row={6}
          />
      </Main>
    </Section>
  )
}

const SearchBar = () =>{
  return(
    <Section className=' !py-0'>
      <Main>
        <View className=' relative flex justify-center'>
          <Ionicons className=' absolute left-5 !text-xl lg:!text-4xl !z-10 !paragraph' name='search'/>
          <TextInput className=' rounded-full extraground  pl-14 heading p-5 lg:p-5' placeholder='Search something what you want'/>
        </View>
      </Main>
    </Section>
  )
}

const PerformanceSection = () =>{
  return(
    <Section>
      <Main className=' gap-5'>
        <View className=' flex-row justify-between items-center'>
          <Text className=' heading capitalize' type='heading'>my performance</Text>
          {/* <Text className=' text-primary-default capitalize' type='link'>see more</Text> */}
        </View>
        <View>
          <MealBox/>
        </View>
      </Main>
    </Section>
  )
}

const index = () => {
  return (
    <SafeAreaView>
            <ScrollView className='background ' showsVerticalScrollIndicator={false}>
        {/* <SearchBar/> */}
        <DummyBox/>
        <StatsSection/>
        <PerformanceSection/>
        <View children={undefined} className=' p-10'/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index