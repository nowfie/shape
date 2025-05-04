import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Section from '@/components/custom tags/Section'
import Main from '@/components/custom tags/Main'
import Text from '@/components/custom tags/Text'
import StackHeader from '@/static_components/StackHeader'
import View from '@/components/custom tags/View'
import { Link } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons'


const DaySwitchSection = () =>{
  const [select,setSelect] = useState(1)

  return(
    <Section>
      <Main className=' p-3 extraground rounded-3xl'>
          <View className='flex-row justify-between background rounded-3xl'>
            {['Yesterday','today','tomorrow'].map((item,index)=>(
              <TouchableOpacity key={index} onPress={()=>setSelect(index)} className={` ${select === index?' bg-primary-default dark:bg-primary-default border-4 border-extrashade-light dark:border-background-dark':' border-4 border-transparent'} w-[30%] p-3 rounded-3xl`}>
                <Text type='subHeading' className={` text-center !text-base capitalize ${select === index?'heading-invert':'paragraph'}`}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
      </Main>
    </Section>
  )
}

const DummyBox = () =>{
  return(
    <Section>
      <Main className=' p-4 xs:p-5 bg-primary-default rounded-3xl gap-4 h-44'>
        <View className=''>
          <Text className='capitalize text-primary-default text-center !text-2xl' type='heading'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, asperiores tempore!</Text>
        </View>
      </Main>
    </Section>
  )
}

const WorkoutSection = () =>{

  const WorkoutBox = () =>{
    return(
      <Link href={`/detail/workout/${3}`} className='extraground gap-9 w-full mr-3 xs:mr-4 flex-row justify-between p-4 xs:p-5 rounded-3xl '>
        <View className=' gap-y-4'>
          <Text className=' capitalize heading' type='subHeading'>wide push-ups</Text>
          <View className=' gap-3'>
            <Text className=' paragraph !text-xs xs:!text-sm capitalize ' type='para'>bicep, shoulder, triceps</Text>
            {/* <Text className=' heading !text-sm xs:!text-base capitalize ' type='subHeading'>10, 10, 12, 12  reps  |  4  sets</Text> */}
            <Text className=' text-primary-default !text-xs xs:!text-sm capitalize ' type='para'>click  for  more...</Text>
          </View>
        </View>
        <View className=' rounded-2xl bg-transparent'>
            <Text className=' !text-5xl xs:!text-6xl text-transparent'>check</Text>
        </View>
      </Link>
    )
  }
  return(
    <Section>
      <Main className=' gap-5'>
        <Text className=' heading capitalize' type='heading'>workouts</Text>
        <View className=' gap-5'>
          {Array.from({length:6}).map((item,index)=>(
            <WorkoutBox key={index}/>
          ))}
        </View>
      </Main>
    </Section>
  )
}

const index = () => {
  return (
    <SafeAreaView className='background flex-1'>
        <ScrollView className='' showsVerticalScrollIndicator={false}>
          <StackHeader/>
          <DaySwitchSection/>
          <DummyBox/>
          <WorkoutSection/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default index