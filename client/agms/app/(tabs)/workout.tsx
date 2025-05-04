import GridView from '@/components/custom tags/GridView'
import Main from '@/components/custom tags/Main'
import Section from '@/components/custom tags/Section'
import Text from '@/components/custom tags/Text'
import View from '@/components/custom tags/View'
import MealBox from '@/components/items/MealBox'
import SessionBox from '@/components/items/SessionBox'
import StatBox from '@/components/items/StatBox'
import ValNonGrid from '@/components/items/ValNonGrid'
import ValStatBox from '@/components/items/ValStatBox'
import HeaderProfile from '@/static_components/HeaderProfile'
import { Feather, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'

const workout = () => {
  const SearchBar = () =>{
    return(
      <Section>
        <Main>
          <View className=' relative flex justify-center'>
            <Ionicons className=' absolute left-5 !text-xl lg:!text-4xl !z-10 !paragraph' name='search'/>
            <TextInput className=' rounded-full extraground  pl-14 heading p-5 lg:p-5' placeholder='Search Workouts'/>
          </View>
        </Main>
      </Section>
    )
  }

  const SessionSetion = () =>{
    return(
      <Section>
        <Main className=' gap-5'>
          <View className=' flex-row justify-between items-center'>
            <Text className=' heading capitalize' type='heading'>today session</Text>
            {/* <Link href='/workout-list' className=' text-primary-default capitalize'>see more</Link> */}
          </View>
          <View>
            <SessionBox/>
          </View>
        </Main>
      </Section>
    )
  }

  const WorkoutBox = ()=>{
    return(
      <Link href={`/detail/workout/${3}`} className='extraground  gap-9 mr-3 xs:mr-4 flex-row justify-between p-4 xs:p-5 rounded-3xl '>
      <View className=' gap-y-4'>
        <Text className=' capitalize heading' type='subHeading'>wide push-ups</Text>
        <View>
          <Text className=' paragraph !text-xs xs:!text-sm capitalize ' type='para'>10  reps  |  4  sets</Text>
        </View>
        <View className=' hidden flex-row gap-2'>
          <View className=' extrashade rounded-3xl py-2 px-3 gap-2 self-start flex-row items-center'>
            <FontAwesome6 className='extraground p-1 rounded-full text-xs !paragraph' name='fire'/>
            <Text type='default' className='paragraph !text-xs xs:!text-sm' >175 kcal</Text>
          </View>
          {/* <View className=' extrashade rounded-3xl py-2 px-3 gap-2 self-start flex-row items-center'>
            <Ionicons className='extraground p-1 rounded-full text-xs !paragraph' name='time'/>
            <Text type='default' className='paragraph !text-xs xs:!text-sm' >15 min</Text>
          </View> */}
        </View>
      </View>
      <View className=' rounded-2xl bg-transparent'>
          <Text className=' !text-5xl xs:!text-6xl text-transparent'>check</Text>
      </View>
    </Link>
    )
  }

  
  const BrowseSection = () =>{
  const [select, setSelect] = useState(0)
    
    return(
      <Section className=' !overflow-visible'>
        <Main className=' gap-5 !overflow-visible'>
          <Text className=' heading capitalize' type='heading'>AI home workout</Text>
          <FlatList
          className='flex w-full !overflow-visible'
            data={['shoulder', 'biceps', 'triceps', 'chest', 'lat', 'waist', 'thighs', 'calf']}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item ,index}) => (
              <TouchableOpacity onPress={()=>{setSelect(index)}} className={`  ${select === index ?' bg-primary-default':' bg-extraground-light dark:bg-extraground-dark'}  flex-row items-center gap-3 p-3 xs:p-4 mr-3 xs:mr-4 rounded-2xl`}>
                <Ionicons name='fast-food' className={` !text-lg !heading ${select === index ?' heading-invert':''}`}/>
                <Text type='subHeading' className={`!text-sm xs:!text-base ${select === index ?' heading-invert':''} capitalize heading text-center`}>
                  {item}
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
          renderItem={(item)=>(<WorkoutBox/>)}
          />
        </Main>
      </Section>
    )
  }

  const statList = [
    {
      name: 'burn',
      icon: FontAwesome6,
      iconName: 'fire', // Represents calorie or energy intake
      barStyle: '#ef4444', // Vibrant color representing energy
      iconStyle:'bg-red-500',
      value: 273,
      target: 797,
    },
    {
      name: 'measure',
      icon: MaterialCommunityIcons, // MaterialCommunityIcons family
      iconName: 'calendar-check', // Represents attendance or presence
      iconStyle:'bg-green-500',
      barStyle: '#22c55e', // Green color symbolizing success or attendance
      value: 2,
      target: 12,
      statStyle: 'extraground',
    },
  ];

  const StatSection = () =>{
    return(
      <Section>
        <Main className=' gap-5'> 
          <Text className=' heading capitalize' type='heading'>today</Text>
          <View className=' flex-row justify-between'>
            <ValNonGrid item={statList[0]}/>
            <View className=' w-[48%] justify-between relative'>
              <Link href={`/measurement`}>
                <View  className={`relative flex gap-3 xs:!gap-3 extraground p-4 xs:p-5 rounded-3xl`}>
                  <View className="flex-row w-full justify-between items-center">
                      <Text className="heading capitalize" type="subHeading">measurement</Text>
                      <FontAwesome6
                      name='ruler'
                      className={` !bg-pink-500 !text-heading-dark p-[3%] rounded-full !text-xs`}
                      />
                  </View>
                  <Text className="paragraph capitalize" type="para">6 days to go</Text>
                </View>
              </Link>
              <Link href={`/measurement`}>
                <View  className={`relative flex gap-3 xs:!gap-3 extraground p-4 xs:p-5 rounded-3xl`}>
                  <View className="flex-row w-full justify-between items-center">
                      <Text className="heading capitalize" type="subHeading">entry</Text>
                      <FontAwesome
                      name='sign-in'
                      className={` !bg-purple-500 !text-heading-dark p-[3%] rounded-full !text-xs`}
                      />
                  </View>
                  <Text className="paragraph capitalize" type="para">15 hrs ago</Text>
                </View>
              </Link>
            </View>
          </View>
          {/* <GridView
          data={statList}
          item={ValStatBox}
          column={5}
          row={3}
          /> */}
        </Main>
      </Section>
    )
  }

  return (
      <ScrollView className=' background' showsVerticalScrollIndicator={false}>
        <SearchBar/>
        <BrowseSection/>
        <StatSection/>
        <SessionSetion/>
        <View children={undefined} className=' p-10'/>
      </ScrollView>
  )
}

export default workout