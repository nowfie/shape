import React, { useState } from 'react'
import Section from './custom tags/Section'
import Main from './custom tags/Main'
import View from './custom tags/View'
import { TouchableOpacity } from 'react-native'
import Text from './custom tags/Text'

const TimeRange = () =>{
    const [select,setSelect] = useState(1)
    return(
      <Section>
        <Main className=' p-3 extraground rounded-3xl'>
            <View className='flex-row justify-between background rounded-3xl'>
              {['weekly','monthly','yearly'].map((item,index)=>(
                <TouchableOpacity key={index} onPress={()=>setSelect(index)} className={` ${select === index?' bg-primary-default dark:bg-primary-default border-4 border-extrashade-light dark:border-background-dark':' border-4 border-transparent'} w-[30%] p-3 rounded-3xl`}>
                  <Text type='subHeading' className={` text-center !text-base capitalize ${select === index?'heading-invert':'paragraph'}`}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
        </Main>
      </Section>
    )
  }

export default TimeRange