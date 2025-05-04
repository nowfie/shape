import { View as ExtendedView, Text, ViewProps } from 'react-native'
import React, { ReactNode } from 'react'

interface ViewPropsCustom extends ViewProps{
    children:ReactNode;
}

const View = ({children,className,...otherProps}:ViewPropsCustom) => {
  return (
    <ExtendedView className={className}>{children}</ExtendedView>
  )
}

export default View