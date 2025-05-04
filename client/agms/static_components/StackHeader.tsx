import Main from '@/components/custom tags/Main'
import Section from '@/components/custom tags/Section'
import Text from '@/components/custom tags/Text'
import View from '@/components/custom tags/View'
import { Ionicons } from '@expo/vector-icons'
import { Link, usePathname, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const StackHeader = ({className}:{className?:string}) => {
  const router = useRouter()
  const location = usePathname()

  
  const headerList = [
    {
      path:'/diet-list',
      header:'grab your meal'
    },
    {
      path:'/workout-list',
      header:'session'
    },
    {
      path:'/measurement',
      header:'your  measurement'
    }
  ]

  const currentheader = headerList.filter(item=>item.path === location)[0]?.header || null
  
  const [like,setLike] = useState(false)
  return (
    <Section className={`${className} w-full`}>
        <Main>
            <View className=' relative flex flex-row  items-center w-full '>
                <TouchableOpacity onPress={()=>router.back()}  className=' absolute left-0'>
                  <Ionicons className=' !heading !text-xl xs:!text-3xl' name='chevron-back'/>
                </TouchableOpacity>
                <Text type='heading' className=' capitalize  !heading m-auto'>{currentheader}</Text>
                <TouchableOpacity onPress={()=>setLike(!like)} style={{borderRadius:'100%'}} className={` extraground py-2 px-3   absolute right-0`}>
                  {like?(
                    <Ionicons className='!heading !text-xl xs:!text-2xl !text-primary-default ' name='heart'/>
                  ):(
                    <Ionicons className='!heading !text-xl xs:!text-2xl ' name='heart-outline'/>
                  )}
                </TouchableOpacity>
            </View>
        </Main>
    </Section>
  )
}

export default StackHeader