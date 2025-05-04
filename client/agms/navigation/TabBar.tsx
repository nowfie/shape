// TabBar.tsx
import {  TouchableOpacity, Platform, Modal, Keyboard } from 'react-native';
import React, { useEffect, useState } from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import View from '@/components/custom tags/View';
import Text from '@/components/custom tags/Text';
import Main from '@/components/custom tags/Main';

interface TabBarProp {
  state: any,
  descriptors: any,
  navigation: any,
}

const TabBar = ({ state, descriptors, navigation }: TabBarProp) => {
    const [modalVisible, setModalVisible] = useState(false);
    const TabIcon = ({ name, focus, typeCenter,family }: { name: any, focus: boolean, typeCenter: boolean,family:any }) => {
      focus = typeCenter ? false : focus;

      let Icon = family
      return (
        <Icon
          name={name}
          className={`${typeCenter ? '' : ''} ${typeCenter?' !text-white dark:!text-white !text-2xl xs:!text-3xl bottom-6 xs:bottom-5':' !text-xl xs:!text-2xl'}  ${focus?' !text-primary-default':' !text-para-default'}`}
          
        />
      );
    };
  
    const [keyboardVisible, setKeyboardVisible] = useState(false);
  
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardVisible(true);
      });
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardVisible(false);
      });
  
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, []);
  
    return (
      <View
        className={`${
          keyboardVisible && Platform.OS === 'android' ? 'hidden' : 'flex'
        } justify-center items-center`}
      >
        <View className=' w-full h-14 justify-center items-center !background ' >
            <Main
            className={` extraground flex flex-row py-1 rounded-3xl absolute ${
                Platform.OS === 'ios' ? 'bottom-1' : 'bottom-4'
            }`} 
            >{/* shaddow */}
            {state.routes.map((item: any, index: any) => {
                const { options } = descriptors[item.key];
                const isFocus = state.index === index;
    
                const handleTabRoute = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: item.key,
                    canPreventDefault: true,
                });
    
                if (!isFocus && !event.defaultPrevented) {
                    if (options.tabBarTypeCenter) {
                    setModalVisible(true);
                    } else {
                    navigation.navigate(item.name);
                    }
                }
                };
    
                return (
                <TouchableOpacity
                    key={index}
                    accessibilityRole="button"
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={handleTabRoute}
                    className={`flex-1 items-center justify-center gap-1 ${
                    options.tabBarTypeCenter ? 'relative p-6' : 'bg-transparent'
                    }`}
                    style={{ bottom: options.tabBarTypeCenter ? 10 : 0 }}
                >
                    {options.tabBarTypeCenter && (
                    <View className=" absolute bottom-4 rounded-full p-2 background">
                        <View className=" bg-primary-default shadow rounded-full w-20 h-20 justify-center items-center  " children={undefined} />
                    </View>
                    )}
                    <TabIcon
                    family={options.iconFamily}
                    name={options.tabBarIconName}
                    typeCenter={options.tabBarTypeCenter}
                    focus={isFocus}
                    />
                    {!options.tabBarTypeCenter && (
                    <Text
                        className={` ${isFocus?' text-primary-default':' text-para-default'} hidden !text-xs capitalize `}
                    >
                        {options.title}
                    </Text>
                    )}
                </TouchableOpacity>
                );
            })}
            </Main>
        </View>
      </View>
    );
  };
  
  export default TabBar;
  