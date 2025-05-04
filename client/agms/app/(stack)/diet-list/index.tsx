import {Dimensions, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Section from '@/components/custom tags/Section'
import Main from '@/components/custom tags/Main'
import Text from '@/components/custom tags/Text'
import StackHeader from '@/static_components/StackHeader'
import View from '@/components/custom tags/View'
import GridView from '@/components/custom tags/GridView'
import MealDietBox from '@/components/items/MealDietBox'
import { Ionicons } from '@expo/vector-icons'
import { PieChart } from 'react-native-chart-kit'

const index = () => {

  const NutritionBox =({item}:{item:{name:string,value:number}}) =>{
    const unitType = item.name == 'calories'?'kcal':'gram'
    return(
      <View className='extrashade justify-center w-[23%] gap-2 items-center p-3 rounded-xl'>
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

  const NutritionSection = () =>{
    return(
      <Section>
          <Main>
              <View className=' extraground p-4 xs:p-5 flex-row justify-between rounded-3xl'>
                  {nutritionList.map((item,index)=>(
                    <NutritionBox item={item} key={index}/>
                  ))}
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
          <View className="extraground p-4 xs:p-5 flex-row rounded-3xl">
            <View className="w-[50%] justify-between">
              {['carb','protein','fat','fiber','zinc','sugar','cholesterol'].map((item,index)=>(
                <Text className=' paragraph capitalize' type='para' key={index}>{item} : 10 gram</Text>
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

  const FoodSection = ()=>{
    const [done,setDone] = useState(false)
    return(
      <Section>
        <Main className=' gap-5'>
          {Array.from({length:5}).map((item,index)=>(
            <View key={index} className=' gap-5'>
              <View className=' flex-row justify-between items-center'>
                <Text className=' heading capitalize' type='heading'>breakfast</Text>
                <TouchableOpacity onPress={()=>setDone(!done)} className=' text-primary-default'>
                  {done?(
                  <Ionicons className=' !text-primary-default !text-2xl' name='checkmark-circle-sharp'/>

                  ):(
                  <Ionicons className=' !text-primary-default !text-2xl' name='checkmark-circle-outline'/>

                  )}
                </TouchableOpacity>
              </View>
              <MealDietBox/>
            </View>
          ))}
        </Main>
      </Section>
    )
  }

  return (
    <SafeAreaView className='background flex-1'>
        <ScrollView className='' showsVerticalScrollIndicator={false}>
          <StackHeader/>
          <DaySwitchSection/>
          <NutritionSection/>
          <NutritionGraph/>
          <FoodSection/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default index