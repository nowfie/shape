import {Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Section from '@/components/custom tags/Section'
import Main from '@/components/custom tags/Main'
import Text from '@/components/custom tags/Text'
import StackHeader from '@/static_components/StackHeader'
import View from '@/components/custom tags/View'
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Line from '@/components/custom tags/Line'

const index = () => {
     const { id } = useLocalSearchParams()

     const BoxComponent = ({index,item}:{index:number,item:any})=>{
      let Icon = item.family
      return(
        <View className={` ${index === 1?' border-x border-slate-100 dark:border-para-default/25':''} gap-2 w-[32%] justify-center items-center`}>
                  <Icon name={item.icon} className=' !heading !text-primary-default !text-lg xs:!text-3xl'/>
                  <Text type='heading' className=' capitalize heading !text-sm xs:!text-base'>{item.main}</Text>
                  <Text type='para' className=' paragraph capitalize !text-xs xs:!text-sm'>{item.sub}</Text>
                </View>
      )
     }

     const HintBox = ({className}:{className?:string}) =>{
      return(
        <Section className={`${className}`}>
          <Main>
            <View className=' flex-row  justify-between items-center rounded-3xl extraground p-4'>
              {[{main:'strenght',sub:'activity',icon:'body',family:Ionicons},{main:'barbell',sub:'equipment',icon:'barbell',family:Ionicons},{main:'full body',sub:'body focus',icon:'arm-flex',family:MaterialCommunityIcons}].map((item,index)=>(
                <BoxComponent key={index} index={index} item={item}/>
              ))}
            </View>
          </Main>
        </Section>
      )
     }

     const SetTable = () =>{
      return(
            <View className=' p-5 extraground  rounded-3xl w-full'>
              {/* Heading */}
              <View className=' flex-row justify-between'>
                {['set','rep','weight'].map((item,index)=>(
                  <View key={index} className='w-[32%]'>
                    <Text type='subHeading' className=' text-center capitalize heading'>{item}</Text>
                  </View>
                ))}
              </View>
              <Line className={'my-4'}/>
              {/* Values */}
              <View className='gap-4'>
                {Array.from({length:4}).map((item,index)=>(
                  <View key={index} className=' flex-row justify-between'>
                      <Text type='subHeading' className=' w-[32%] text-center paragraph'>1</Text>
                      <Text type='subHeading' className=' w-[32%] text-center paragraph'>2</Text>
                      <Text type='subHeading' className=' w-[32%] text-center paragraph'>10 kg</Text>
                  </View>
                ))}
              </View>
            </View>
      )
     } 

     const BenifitSection = () =>{
      return(
        <Section>
          <Main>
            <View className=' gap-3'>
              <Text className=' heading capitalize' type='heading'>benifits</Text>
              <View>
                <Text type='para' className=' paragraph'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est odio similique non unde, maiores ut beatae sed odit labore optio?
                </Text>
              </View>
            </View>
          </Main>
        </Section>
      )
     }

     const RepSection = () =>{
      return(
        <Section>
          <Main>
            <View className=' gap-5'>
              <Text className=' heading capitalize' type='heading'>set & rep</Text>
              <SetTable/>
            </View>
          </Main>
        </Section>
      )
     }

     const NameSection = ()=>{
      return(
        <Section>
          <Main>
            <View className=' gap-5'>
              <Text type='heading' className=' capitalize !text-xl xs:!text-2xl heading'>barbell bicep curls</Text>
              <View className="flex-row gap-4 items-center">
                <View className=' extraground  rounded-3xl py-1 px-2 xs:py-2 xs:px-3  gap-2 self-start flex-row items-center'>
                  <FontAwesome6 className='extraground p-1 !text-red-400 rounded-full text-xs !paragraph' name='fire'/>
                  <Text type='default' className='paragraph !text-xs xs:!text-sm' >175 kcal</Text>
                </View>
                {/* <View className=' extraground rounded-3xl py-1 px-2 xs:py-2 xs:px-3  gap-2 self-start flex-row items-center'>
                  <FontAwesome6 className='extraground p-1 !text-red-400 rounded-full text-xs !paragraph' name='fire'/>
                  <Text type='default' className='paragraph !text-xs xs:!text-sm' >175 kcal</Text>
                </View> */}
              </View>
              <Text type='para' className=' paragraph'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est odio similique non unde, maiores ut beatae sed odit labore optio?
              </Text>
            </View>
          </Main>
        </Section>
      )
     }

     const FinalSection = () =>{
      const [select,setSelect] = useState(1)
      return(
        <Section>
          <Main>
            <View className=' gap-5'>
              <Text type='heading' className=' capitalize heading text-center'>did you finished?</Text>
              <View className=' flex-row justify-center items-center gap-4'>
                {['yes','no'].map((item,index)=>(
                  <TouchableOpacity onPress={()=>setSelect(index)} key={index} className={`  ${select === index  ? ' bg-primary-default border-primary-default':' bg-transparent border-slate-100 dark:border-para-default/25'} w-1/3 p-3 border rounded-3xl `}>
                    <Text className={` ${select === index ? 'heading-invert':'heading'} text-center capitalize`} type='subHeading'>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Main>
        </Section>
      )
     }

     const ImageSection = () =>{
      return(
        <Section className='flex pb-20'>
          <StackHeader className=' absolute z-10 top-5'/>
            <View className=' relative'>
              <View className='!relative h-[360px] rounded-b-2xl !overflow-hidden'>
                <Image className=' object-cover w-full h-full' source={require('../../../../../assets/images/test-food.jpg')}/>
              </View>            
              <HintBox className=' absolute -bottom-20 w-full'/>
            </View>
        </Section>
      )
     }

  return (
    <SafeAreaView className='background flex-1'>
          <ScrollView className='' showsVerticalScrollIndicator={false}>
            <ImageSection/>
            <NameSection/>
            <RepSection/>
            <Main>
              <Line className={'mt-8 mb-4'}/>
            </Main>
            <FinalSection/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default index