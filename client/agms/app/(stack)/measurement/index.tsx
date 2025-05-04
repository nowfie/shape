import GridView from "@/components/custom tags/GridView"
import Main from "@/components/custom tags/Main"
import Section from "@/components/custom tags/Section"
import Text from "@/components/custom tags/Text"
import View from "@/components/custom tags/View"
import MeasureBox from "@/components/items/MeasureBox"
import StatBox from "@/components/items/StatBox"
import StackHeader from "@/static_components/StackHeader"
import { Feather, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { SafeAreaView, ScrollView } from "react-native"

const index = () => {
    const MeasurementSection = () =>{
        const measureList = [
            {
              name: 'bicep right',
              icon: MaterialCommunityIcons,
              iconName: 'arm-flex', // Represents arm flex/bicep
              iconStyle: 'bg-red-500',
              value: 16.8,
              statStyle: 'extraground',
            },
            {
              name: 'bicep left',
              icon: MaterialCommunityIcons,
              iconName: 'arm-flex', // Represents arm flex/bicep
              iconStyle: 'bg-yellow-500',
              value: 17.3,
              statStyle: 'extraground',
            },
            {
              name: 'chest',
              icon: MaterialCommunityIcons,
              iconName: 'human-male-height', // Represents chest or upper body
              iconStyle: 'bg-green-500',
              value: 42.3,
              statStyle: 'extraground',
            },
            {
              name: 'waist',
              icon: MaterialCommunityIcons,
              iconName: 'tape-measure', // Represents measurement/waist circumference
              iconStyle: 'bg-blue-500',
              value: 34.4,
              statStyle: 'extraground',
            },
            {
              name: 'thighs right',
              icon: MaterialCommunityIcons,
              iconName: 'seat-legroom-normal', // Represents legs/thighs
              iconStyle: 'bg-purple-500',
              value: 25.6,
              statStyle: 'extraground',
            },
            {
              name: 'thighs left',
              icon: MaterialCommunityIcons,
              iconName: 'seat-legroom-normal', // Represents legs/thighs
              iconStyle: 'bg-orange-500',
              value: 24.5,
              statStyle: 'extraground',
            },
            {
              name: 'calf right',
              icon: MaterialCommunityIcons,
              iconName: 'shoe-print', // Represents lower leg/calf
              iconStyle: 'bg-purple-500',
              value: 17.2,
              statStyle: 'extraground',
            },
            {
              name: 'calf left',
              icon: MaterialCommunityIcons,
              iconName: 'shoe-print', // Represents lower leg/calf
              iconStyle: 'bg-orange-500',
              value: 17.8,
              statStyle: 'extraground',
            },
          ];
          
        return(
            <Section>
                <Main>
                    <GridView
                    item={MeasureBox}
                    data={measureList}
                    column={2}
                    />
                </Main>
            </Section>
        )
    }
  return (
    <SafeAreaView className='background flex-1'>
        <ScrollView className='' showsVerticalScrollIndicator={false}>
            <StackHeader/>
            <MeasurementSection/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default index