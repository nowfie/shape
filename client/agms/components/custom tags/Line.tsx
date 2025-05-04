import { View, Text } from 'react-native'
import React from 'react'

const Line = ({className}:{className:any}) => {
  return (
    <View className={`${className} bg-slate-100 dark:bg-para-default/25 w-full p-[.5px]`}/>
  )
}

export default Line