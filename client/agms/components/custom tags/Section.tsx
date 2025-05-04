import { View, Text, ViewProps } from 'react-native'
import React, { ReactNode } from 'react'

interface SectionPropsCustom extends ViewProps{
    children:ReactNode;
}

const Section = ({children,className,...otherProps}:SectionPropsCustom) => {
  return (
        <View className={`${className} py-3`}>{children}</View>
  )
}

export default Section