import { Palette } from '@/shared/constants/Palette'
import { Stack } from 'expo-router'
import 'react-native-reanimated'
import { useFonts } from 'expo-font'
import { headerStyles } from '@/shared/utils/headerStyles'

export const unstable_settings = {
  anchor: '(tabs)',
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Main: require('../assets/fonts/Inter-VariableFont.ttf'),
  })

  if (!fontsLoaded) return null

  return (
    <Stack screenOptions={{ statusBarStyle: 'light' }}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Palette.background,
          },
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          ...headerStyles('Notifications'),
        }}
      />
    </Stack>
  )
}
