import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import './global.css'
import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Bold: require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    BoldItalic: require('../assets/fonts/PlusJakartaSans-BoldItalic.ttf'),
    ExtraBold: require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    ExtraBoldItalic: require('../assets/fonts/PlusJakartaSans-ExtraBoldItalic.ttf'),
    ExtraLight: require('../assets/fonts/PlusJakartaSans-ExtraLight.ttf'),
    ExtraLightItalic: require('../assets/fonts/PlusJakartaSans-ExtraLightItalic.ttf'),
    Italic: require('../assets/fonts/PlusJakartaSans-Italic.ttf'),
    Light: require('../assets/fonts/PlusJakartaSans-Light.ttf'),
    LightItalic: require('../assets/fonts/PlusJakartaSans-LightItalic.ttf'),
    Regular: require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    Medium: require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    MediumItalic: require('../assets/fonts/PlusJakartaSans-MediumItalic.ttf'),
    SemiBold: require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    SemiBoldItalic: require('../assets/fonts/PlusJakartaSans-SemiBoldItalic.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, animation:'ios_from_right' }}   />
        <Stack.Screen name="(stack)/diet-list/index" options={{headerShown:false, animation:'ios_from_right'}}  />
        <Stack.Screen name="(stack)/workout-list/index" options={{headerShown:false, animation:'ios_from_right'}}  />
        <Stack.Screen name="(stack)/measurement/index" options={{headerShown:false, animation:'ios_from_right'}}  />
        <Stack.Screen name="(stack)/detail/food/[id]/index" options={{headerShown:false, animation:'ios_from_right'}}  />
        <Stack.Screen name="(stack)/detail/workout/[id]/index" options={{headerShown:false, animation:'ios_from_right'}}  />
        <Stack.Screen name="(stack)/detail/measurement/[id]/index" options={{headerShown:false, animation:'ios_from_right'}}  />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
      </ThemeProvider>
  );
}
