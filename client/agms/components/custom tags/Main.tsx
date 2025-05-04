import { View, Text, ViewProps } from 'react-native'
import React, { ReactNode } from 'react'

interface MainPropsCustom extends ViewProps{
    children:ReactNode;
}

const Main = ({children,className,...otherProps}:MainPropsCustom) => {
  return (
        <View className={`${className} main`}>{children}</View>
  )
}

export default Main