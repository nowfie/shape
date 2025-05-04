import React from 'react';
import View from '../custom tags/View';
import Text from '../custom tags/Text';
import { TouchableOpacity, Dimensions } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Link, usePathname } from 'expo-router';


interface ValNonGridProps {
  item: any;
}

const ValNonGrid = ({ item }: ValNonGridProps) => {
  let Icon = item.icon;

  const unitType = `${
    item.name == 'calories' ? 'kcal' :
    item.name == 'intake' ? 'kcal' :
    item.name == 'burn' ? 'kcal' :
    item.name == 'bmr' ? 'kcal' :
    item.name == 'weight' ? 'kg' :
    item.name == 'height' ? 'cm' :
    item.name == 'sleep' ? 'hours' :
    item.name == 'streak' ? 'days' :
    item.name == 'attendance' ? 'hrs' :
    item.name == 'water' ? 'glass' : ''
  }`;

  const statStyle = item.statStyle ? item.statStyle : 'extraground';
  const progrssBarColor = item.iconStyle

  const screenWidth = Dimensions.get('window').width;
  const progressSize =
    screenWidth <= 320 ? 80 :
    (screenWidth >= 321 && screenWidth <= 374) ? 100 :
    (screenWidth >= 375 && screenWidth <= 424) ? 120 :
    (screenWidth >= 425 && screenWidth <= 767) ? 150 :
    (screenWidth >= 768 && screenWidth <= 1023) ? 150 :
    (screenWidth >= 1024 && screenWidth <= 1199) ? 200 :
    (screenWidth >= 1200 && screenWidth <= 1399) ? 200 :
    (screenWidth >= 1400) ? 200 :
    200;
    
    const currentLocation = usePathname()

  return (
    <Link href={`/detail/measurement/${3}`} className={` w-[48.5%] `}>
      <View className={` relative w-full ${statStyle} p-4 xs:p-5 rounded-3xl gap-4`}>
        {item.name != 'measure'?(
            <>
                <View className="flex-row justify-between items-center">
                    <Text className="heading capitalize" type="subHeading">{item.name}</Text>
                    <Icon
                    name={item.iconName}
                    className={` ${item.iconStyle} !text-heading-dark p-[3%] rounded-full !text-xs`}
                    />
                </View>
                <View className="items-center relative justify-center">
                    <View className=" gap-3 m-auto absolute items-center justify-center flex-col ">
                        <Text type="heading" className="heading text-center !text-xl xs:!text-xl">{item.value}</Text>
                        <Text type="para" className="paragraph text-center ">{item.target} {unitType}</Text>
                    </View>
                    <CircularProgress
                    showProgressValue={false}
                    value={(item.value / item.target) * 100}
                    activeStrokeColor={item.barStyle}
                    inActiveStrokeColor={'#64748b'}
                    inActiveStrokeOpacity={0.2}
                    progressValueColor={'#fff'}
                    valueSuffix={'%'}
                    radius={progressSize / 2} 
                    activeStrokeWidth={progressSize / 15} 
                    inActiveStrokeWidth={progressSize / 25} 
                    />
                </View>
            </>
        ):(
            <Text className=' text-extraground-dark'>waity</Text>
        )}
      </View>
    </Link>
  );
};

export default ValNonGrid;
