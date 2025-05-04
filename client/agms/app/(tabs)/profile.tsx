import {  SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Section from '@/components/custom tags/Section'
import Main from '@/components/custom tags/Main'
import Text from '@/components/custom tags/Text'
import View from '@/components/custom tags/View'
import Line from '@/components/custom tags/Line'

const profile = () => {
  return (
    <SafeAreaView className='background flex-1'>
      <ScrollView>
      <Section>
        <Main className=' flex gap-8'>
          <View className="flex gap-3">
            <Text className=' capitalize' type='heading'>text varieties</Text>
            <Text className=' capitalize heading' type='heading'>1. heading</Text>
            <Text className=' capitalize heading' type='subHeading'>2. sub heading</Text>
            <Text className=' capitalize para' type='para'>3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia non tenetur ipsam nostrum, molestias id.</Text>
            <Text className=' capitalize heading' type='default'>4. default</Text>
            <Text className=' capitalize text-primary-default ' type='link'>5. link</Text>
          </View>
          <Line className=''/>
          <View className=' flex gap-3'>
            <Text className=' capitalize' type='heading'>background colors</Text>
            <View className='p-5 foreground rounded-lg'>
              <Text className=' capitalize para' type='heading'>foreground</Text>
            </View>
            <View className='p-5 middleground rounded-lg'>
              <Text className=' capitalize heading' type='heading'>middleground</Text>
            </View>
            <View className='p-5 extraground rounded-lg'>
              <Text className=' capitalize heading-invert' type='heading'>extraground</Text>
            </View>
            <View className='p-5 middleshade rounded-lg'>
              <Text className=' capitalize heading' type='heading'>middleshade</Text>
            </View>
            <View className='p-5 extrashade rounded-lg'>
              <Text className=' capitalize heading-invert' type='heading'>extrashade</Text>
            </View>
            <View className='p-5 bg-primary-default rounded-lg'>
              <Text className=' capitalize heading-invert' type='heading'>primary</Text>
            </View>
          </View>
        </Main>
      </Section>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile