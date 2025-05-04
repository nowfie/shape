import {  FlatList, Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Section from '@/components/custom tags/Section'
import Main from '@/components/custom tags/Main'
import Text from '@/components/custom tags/Text'
import HeaderProfile from '@/static_components/HeaderProfile'
import View from '@/components/custom tags/View'
import MealBox from '@/components/items/MealBox'
import { Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import StatBox from '@/components/items/StatBox'
import GridView from '@/components/custom tags/GridView'
import ValStatBox from '@/components/items/ValStatBox'
import { Link, useNavigation } from 'expo-router'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const diet = () => {

  const SearchBar = () =>{
    return(
      <Section>
        <Main>
          <View className=' relative flex justify-center'>
            <Ionicons className=' absolute left-5 !text-xl lg:!text-4xl !z-10 !paragraph' name='search'/>
            <TextInput className=' rounded-full extraground  pl-14 heading p-5 lg:p-5' placeholder='Search Foods'/>
          </View>
        </Main>
      </Section>
    )
  }

  const MealSection = () =>{
    return(
      <Section>
        <Main className=' gap-5'>
          <View className=' flex-row justify-between items-center'>
            <Text className=' heading capitalize' type='heading'>my meal</Text>
            <Link href={'/diet-list'}  className=' text-primary-default capitalize'>see more</Link>
          </View>
          <View>
            <MealBox/>
          </View>
        </Main>
      </Section>
    )
  }

  const TestBox = ()=>{
    return(
      <Link href={`/detail/food/${3}`} className='mr-3 xs:mr-4 '>
      <View className='extraground gap-9  flex-row justify-between p-4 xs:p-5 rounded-3xl '>
      <View className=' gap-y-4'>
        <Text className=' capitalize heading' type='subHeading'>chicken rice</Text>
        <View>
          <Text className=' paragraph !text-xs xs:!text-sm capitalize ' type='para'>25g  protien  |  76g  carb</Text>
        </View>
        <View className=' flex-row gap-2'>
          <View className=' extrashade rounded-3xl py-2 px-3 gap-2 self-start flex-row items-center'>
            <FontAwesome6 className='extraground p-1 rounded-full !text-primary-default text-xs ' name='fire'/>
            <Text type='default' className='paragraph !text-xs xs:!text-sm' >175 kcal</Text>
          </View>
          {/* <View className=' extrashade rounded-3xl py-2 px-3 gap-2 self-start flex-row items-center'>
            <Ionicons className='extraground p-1 rounded-full text-xs !paragraph' name='time'/>
            <Text type='default' className='paragraph !text-xs xs:!text-sm' >15 min</Text>
          </View> */}
        </View>
      </View>
      <View className=' rounded-2xl relative bg-transparent overflow-hidden '>
         <Image className=' w-full h-full' style={{ width: widthPercentageToDP(40) }}  source={require('../../assets/images/test-food.jpg')}/>  
      </View>
      </View>
    </Link>
    )
  }

  
  const BrowseSection = () =>{
  const [select, setSelect] = useState(0)

  const TimeData = [
    {
      name: 'breakfast',
      icon: Ionicons, // Ionicons vector icon for breakfast
      iconName: 'fast-food', // Fast food icon for breakfast
    },
    {
      name: 'snack',
      icon: MaterialIcons, // MaterialIcons vector icon for snack
      iconName: 'local-cafe', // Local cafe (coffee) icon for snack
    },
    {
      name: 'lunch',
      icon: MaterialCommunityIcons, // MaterialCommunityIcons vector icon for lunch
      iconName: 'silverware-fork-knife', // Fork and knife for lunch
    },
    {
      name: 'dinner',
      icon: MaterialCommunityIcons, // MaterialCommunityIcons vector icon for dinner
      iconName: 'silverware', // Silverware icon for dinner (better representation)
    },
  ];
    
    return(
      <Section className=' !overflow-visible'>
        <Main className=' gap-5 !overflow-visible'>
          <Text className=' heading capitalize' type='heading'>AI suggestion</Text>
          <FlatList
          className='flex w-full !overflow-visible'
            data={TimeData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item ,index}) => (
              <TouchableOpacity onPress={()=>{setSelect(index)}} className={`  ${select === index ?' bg-primary-default':' bg-extraground-light dark:bg-extraground-dark'}  flex-row items-center gap-3 p-3 xs:p-4 mr-3 xs:mr-4 rounded-2xl`}>
                <item.icon name={item.iconName} className={` !text-lg !heading ${select === index ?' heading-invert':''}`}/>
                <Text type='subHeading' className={`!text-sm xs:!text-base ${select === index ?' heading-invert':''} capitalize heading text-center`}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
          <FlatList
          data={['breakfast', 'snack', 'lunch', 'dinner']}
          className=' !overflow-visible'
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item,index)=>index.toString()}
          renderItem={(item)=>(<TestBox/>)}
          />
        </Main>
      </Section>
    )
  }

  const statList = [
    {
      name: 'intake',
      icon: Ionicons, // Ionicons family
      iconName: 'flame', // Represents calorie or energy intake
      iconStyle:'bg-orange-500',
      barStyle: '#f97316', // Vibrant color representing energy
      value: 1324,
      target: 3000,
    },
    {
      name: 'water',
      icon: MaterialCommunityIcons, // MaterialCommunityIcons family
      iconName: 'cup-water', // Represents water consumption
      iconStyle:'bg-blue-500',
      barStyle: '#3b82f6', // Blue for hydration
      value: 10,
      target: 12,
      statStyle: 'extraground',
    },
  ];
  

  const StatSection = () =>{
    return(
      <Section>
        <Main className=' gap-5'> 
          <Text className=' heading capitalize' type='heading'>today</Text>
          <GridView
          data={statList}
          item={ValStatBox}
          column={5}
          row={3}
          />
        </Main>
      </Section>
    )
  }

  return (
      <ScrollView className='background' showsVerticalScrollIndicator={false}>
        <SearchBar/>
        <BrowseSection/>
        <StatSection/>
        <MealSection/>
        <View children={undefined} className=' p-10'/>
      </ScrollView>
  )
}

export default diet