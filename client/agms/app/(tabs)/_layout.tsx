import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import TabBar from '@/navigation/TabBar';
import { FontAwesome6, Ionicons, Octicons } from '@expo/vector-icons';
import StackHeader from '@/static_components/StackHeader';
import View from '@/components/custom tags/View';
import Text from '@/components/custom tags/Text';
import { SafeAreaView } from 'react-native';
import Section from '@/components/custom tags/Section';
import Main from '@/components/custom tags/Main';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  const HeaderProfile = () => {
    return (
      <Section className=' bg-transparent py-3'>
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

  return (
    <SafeAreaView className=' flex-1 background'>
    <HeaderProfile/>
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          animation:'shift',
          title: 'Home',
          tabBarAccessibilityLabel: 'Home Tab',
          iconFamily:Octicons,
          tabBarIconName: 'home', // Use this custom key
          tabBarTypeCenter: false, // Use this custom key
        }}
      />
      <Tabs.Screen
        name="diet"
        options={{
          animation:'shift',
          title: 'Diet',
          tabBarAccessibilityLabel: 'Diet Tab',
          iconFamily:FontAwesome6,
          tabBarIconName: 'bowl-food',
          tabBarTypeCenter: false,
        }}
      />
      <Tabs.Screen
        name="dummy"
        options={{
          animation:'shift',
          title: 'dummy',
          tabBarAccessibilityLabel: 'Workout Tab',
          iconFamily:Ionicons,
          tabBarIconName: 'add',
          tabBarTypeCenter: true,
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          animation:'shift',
          title: 'Workout',
          tabBarAccessibilityLabel: 'Workout Tab',
          iconFamily:FontAwesome6,
          tabBarIconName: 'dumbbell',
          tabBarTypeCenter: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          animation:'shift',
          title: 'Profile',
          tabBarAccessibilityLabel: 'Profile Tab',
          iconFamily:FontAwesome,
          tabBarIconName: 'user',
          tabBarTypeCenter: false,
        }}
      />
    </Tabs>
    </SafeAreaView>
  );
}
