import {  SafeAreaView, ScrollView, useColorScheme } from 'react-native'
import React from 'react'
import StackHeader from '@/static_components/StackHeader'
import Text from '@/components/custom tags/Text'
import Main from '@/components/custom tags/Main'
import View from '@/components/custom tags/View'
import Section from '@/components/custom tags/Section'
import Line from '@/components/custom tags/Line'
import { LineChart } from 'react-native-gifted-charts';
import { Dimensions } from 'react-native';
import TimeRange from '@/components/TimeRange'

const screenWidth = Dimensions.get('window').width;

const index = () => {
  const GraphSection = () => {

    const colorScheme = useColorScheme(); // 'light' or 'dark'

  const isDarkMode = colorScheme === 'dark';
  const labelColor = isDarkMode ? '#FFFFFF' : '#000000';
  const gridColor = isDarkMode ? '#4B5563' : '#E5E7EB'; // Tailwind gray-600 / gray-200


    const data = [
      { value: 120, label: 'Jan' },
      { value: 125, label: 'Feb' },
      { value: 130, label: 'Mar' },
      { value: 128, label: 'Apr' },
      { value: 132, label: 'May' },
      { value: 120, label: 'Jun' },
      { value: 125, label: 'Jul' },
    ];
  
    return (
      <Section>
        <Main>
          <View className="p-5 rounded-2xl extraground">
            <View className='overflow-hidden'>
            <LineChart 
             data={data}
             height={190}
             width={screenWidth - 40}
             isAnimated
             showValuesOnTopOfPoints
             color="#EAC05F"
             startFillColor="#EAC05F"
             endFillColor="#EAC05F"
             initialSpacing={20}
             spacing={70}
             showXAxisLabels={false} // 👈 hides x-axis labels
             yAxisTextStyle={{ color: isDarkMode ? '#a3a2a3' : '#a3a2a3' }}
             xAxisTextStyle={{ color: isDarkMode ? '#a3a2a3' : '#a3a2a3' }}
             xAxisLabelTextStyle={{ color: isDarkMode ? '#a3a2a3' : '#a3a2a3' }}
             noOfSections={4}
             rulesColor={isDarkMode ? '#374151' : '#e5e7eb'} // Tailwind gray-700 vs gray-200
             xAxisColor={'transparent'}
             yAxisColor={'transparent'}
            />
            </View>
          </View>
        </Main>
      </Section>
    );
  };

  const TableSection = () =>{

    const SetTable = () =>{
      return(
            <View className=' p-5 extraground  rounded-3xl w-full'>
              {/* Heading */}
              <View className=' flex-row justify-between'>
                {['s.no','date','weight'].map((item,index)=>(
                  <View key={index} className={ ` ${index == 0?'w-[20%]':'w-[40%]'} `}>
                    <Text type='subHeading' className=' text-center capitalize heading'>{item}</Text>
                  </View>
                ))}
              </View>
              <Line className={'my-4'}/>
              {/* Values */}
              <View className='gap-4'>
                {Array.from({length:26}).map((item,index)=>(
                  <View key={index} className=' flex-row justify-between'>
                      <Text type='subHeading' className=' w-[20%] text-center paragraph'>1</Text>
                      <Text type='subHeading' className=' w-[40%] text-center paragraph'>10.12.2025</Text>
                      <Text type='subHeading' className=' w-[40%] text-center paragraph'>130 kg</Text>
                  </View>
                ))}
              </View>
            </View>
      )
     } 
    return(
      <Section>
        <Main className='gap-5'>
          <Text type='heading' className='heading capitalize' >history</Text>
          <SetTable/>
        </Main>
      </Section>
    )
  }
  return (
    <SafeAreaView className='background flex-1'>
      <ScrollView className='' showsVerticalScrollIndicator={false}>
        <StackHeader/>
        <TimeRange/>
        <GraphSection/>
        <TableSection/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index