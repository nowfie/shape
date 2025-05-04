import {Dimensions, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Section from '@/components/custom tags/Section'
import Main from '@/components/custom tags/Main'
import Text from '@/components/custom tags/Text'
import StackHeader from '@/static_components/StackHeader'
import View from '@/components/custom tags/View'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import Line from '@/components/custom tags/Line'
import { PieChart } from 'react-native-chart-kit'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const index = () => {
     const { id } = useLocalSearchParams()

     const NutritionBox =({item}:{item:{name:string,value:number}}) =>{
        const unitType = item.name == 'calories'?'kcal':'gram'
        return(
          <View className='extrashade  justify-center w-[23%] gap-2 items-center p-3 rounded-xl'>
            <Text type='para' className=' paragraph !text-xs xs:!text-sm capitalize'>{item.name}</Text>
            <View className=' justify-center items-center'>
              <Text type='heading' className=' !text-base xs:!text-xl heading'>{item.value}</Text>
              <Text type='para' className=' paragraph !text-xs xs:!text-sm'>{unitType}</Text>
            </View>
          </View>
        )
      }
    
      const nutritionList = [
        {
          name: 'calories',
          value:2874
        },
        {
          name: 'carb',
          value:127.2
        },
        {
          name: 'protien',
          value:65.5
        },
        {
          name: 'fat',
          value:27.1
        },
      ];

     const NutritionSection = ({className}:{className?:string}) =>{
        return(
          <Section className={`${className}`}>
              <Main>
                  <View className=' extraground  p-4 xs:p-5 flex-row justify-between rounded-3xl'>
                      {nutritionList.map((item,index)=>(
                        <NutritionBox item={item} key={index}/>
                      ))}
                  </View>
              </Main>
          </Section>
        )
      }

     const SetTable = () =>{
      return(
            <View className=' p-5 extraground rounded-3xl w-full'>
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

     const NutritionGraph = () =>{
        const totalCalories = 3000;
      const nutritionList = [
        { name: 'calories', value: totalCalories, color: '#FF6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'carb', value: 1200, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'protein', value: 800, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'fat', value: 800, color: '#4BC0C0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'fat', value: 200, color: '#f5f5f5', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    
      ];
    
      const pieChartData = nutritionList
        .filter((item) => item.name !== 'calories') 
        .map((item) => ({
          name: item.name,
          value: item.value,
          color: item.color,
          legendFontColor: item.legendFontColor,
          legendFontSize: item.legendFontSize,
        }));
    
        const chartWidth = Dimensions.get('window').width * 0.8;
        return(
          <Section>
            <Main className=' gap-5'>
              <Text className=' heading capitalize' type='heading'>nutrition values</Text>
              <View className="extraground  p-4 xs:p-5 flex-row rounded-3xl">
                <View className="w-[50%] justify-between">
                  {['vitamin A','fiber','zinc','sugar','cholesterol'].map((item,index)=>(
                    <Text className=' paragraph capitalize' type='para' key={index}>{item} : 10 mg</Text>
                  ))}
                </View>
                <View className="w-[50%]">
                  <PieChart
                    data={pieChartData}
                    hasLegend={false}
                    width={chartWidth}
                    height={200}
                    chartConfig={{
                      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      labelColor: () => '#000',
                    }}
                    accessor="value"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                  />
                </View>
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
              <Text type='heading' className=' capitalize !text-xl xs:!text-2xl heading'>chicken rice</Text>
              <View className="flex-row gap-4 items-center">
                <View className=' extraground rounded-3xl py-1 px-2 xs:py-2 xs:px-3  gap-2 self-start flex-row items-center'>
                  <FontAwesome6 className='extraground p-1 !text-primary-default rounded-full text-xs !paragraph' name='fire'/>
                  <Text type='default' className='paragraph !text-xs xs:!text-sm' >450 gram</Text>
                </View>
                <View className=' extraground rounded-3xl py-1 px-2 xs:py-2 xs:px-3  gap-2 self-start flex-row items-center'>
                  <FontAwesome6 className='extraground p-1 !text-red-400 rounded-full text-xs !paragraph' name='fire'/>
                  <Text type='default' className='paragraph !text-xs xs:!text-sm' >175 kcal</Text>
                </View>
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
                  <TouchableOpacity className={`  p-3 bg-primary-default rounded-xl `}>
                    <Text className={` heading-invert text-center capitalize`} type='subHeading'>replace food</Text>
                  </TouchableOpacity>
            </View>
          </Main>
        </Section>
      )
     }

     const IncredientsSection = () =>{
        return(
            <Section>
                <Main className=' gap-5'>
                    <View>
                        <Text className=' heading capitalize' type='heading'>incredients</Text>
                    </View>
                    <View className=' flex-row flex-wrap gap-4'>
                        {['rice ( 100  gm )', 'chicken breast ( 250  gm )', 'ginger', 'pepper', 'salt', 'water', 'green vegitebles'].map((item,index)=>(
                            <Text type='para' key={index} className=' border border-slate-200 dark:border-para-default/25 p-3 rounded-3xl capitalize paragraph'>{item}</Text>
                        ))}
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
                <Image className='  w-full h-full object-cover' source={require('../../../../../assets/images/test-food.jpg')}/>
              </View>            
              <NutritionSection className=' absolute -bottom-20 w-full'/>
            </View>
        </Section>
      )
     }

  return (
    <SafeAreaView className='background flex-1'>
          <ScrollView className='' showsVerticalScrollIndicator={false}>
            <ImageSection/>
            {/* <StackHeader/>
            <NutritionSection/> */}
            <NameSection/>
            <NutritionGraph/>
            <IncredientsSection/>
            <Main>
              <Line className={'mt-8 mb-4'}/>
            </Main>
            <FinalSection/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default index