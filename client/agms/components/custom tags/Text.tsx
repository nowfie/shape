import { View, Text as ExtendedText, TextProps, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

interface TextPropsCustom extends TextProps{
    children:ReactNode;
    type?:'default'|'heading'|'subHeading'|'para'|'link';
}

const Text = ({children,className,type='default',...otherProps}:TextPropsCustom) => {
    const textStyle = `${
    type === 'heading'?' text-sm xs:text-lg sm:text-lg lg:text-xl xxl:text-3xl':
    type === 'subHeading'?'text-sm xs:text-lg sm:text-lg lg:text-xl xxl:text-3xl':
    type === 'para'?'text-xs xs:text-base sm:text-base leading-relaxed lg:text-lg xxl:text-2xl':
    type === 'link'?'text-xs xs:text-base sm:text-base lg:text-lg xxl:text-2xl':
    'text-sm sm:text-sm text-xs xs:text-base sm:text-base leading-relaxed lg:text-lg xxl:text-2xl'
    }`

    const fontStyle =[ 
      type === 'heading'?textFontStyle.ExtraBold:
      type === 'subHeading'?textFontStyle.Bold:
      type === 'para'?textFontStyle.Medium:
      type === 'default'?textFontStyle.Medium:
      type === 'link'?textFontStyle.Medium:
      textFontStyle.Medium]

  return (
    <ExtendedText style={[fontStyle]} className={`${className}  ${textStyle}`}>{children}</ExtendedText>
  )
}

const textFontStyle = StyleSheet.create({
  'ExtraLight':{
    fontFamily:'ExtraLight'
  },
  'Light':{
    fontFamily:'Light'
  },
  'Regular':{
    fontFamily:'Regular'
  },
  'Medium':{
    fontFamily:'Medium'
  },
  'Bold':{
    fontFamily:'Bold'
  },
  'ExtraBold':{
    fontFamily:'ExtraBold'
  },
})
export default Text