import React from 'react'
import Section from '@/components/custom tags/Section'
import Main from '@/components/custom tags/Main'
import View from '@/components/custom tags/View'
import Text from '@/components/custom tags/Text'
import { Octicons } from '@expo/vector-icons'

const HeaderProfile = () => {
  return (
    <Section className=' py-3'>
      <Main className='flex flex-row justify-between items-center '>
        <View className=' flex flex-row gap-4'>
          <View className=' bg-gray-200 rounded-[100%] p-[10%] flex justify-center items-center relative'>
            <Text className=' absolute' >i</Text>
          </View>
          <View className='flex gap-1'>
            <Text type='heading' className=' capitalize heading'>mohammed nowfal</Text>
            <Text type='para' className=' capitalize paragraph !text-xs'>body building</Text>
          </View>
        </View>
        <Octicons className=' !text-xl xs:!text-2xl sm:!text-xl lg:!text-3xl xxl:!text-4xl !heading' name='bell'/>
      </Main>
    </Section>
  )
}

export default HeaderProfile