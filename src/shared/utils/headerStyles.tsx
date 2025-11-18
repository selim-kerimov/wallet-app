import ChaveronIcon from '@/assets/icons/chaveron.svg'
import { ExtendedStackNavigationOptions } from 'expo-router/build/layouts/StackClient'
import { Pressable } from 'react-native'
import { StyledText } from '../ui/StyledText'
import { Palette } from '../constants/Palette'
import { router } from 'expo-router'

export const headerStyles = (title: string): ExtendedStackNavigationOptions => {
  return {
    headerShown: true,
    headerTitle: () => <StyledText type="headlineLarge">{title}</StyledText>,
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: Palette.background,
    },
    contentStyle: {
      backgroundColor: Palette.background,
    },
    headerLeft: () => (
      <Pressable onPress={() => router.back()} style={{ padding: 8, marginRight: 6 }}>
        <ChaveronIcon color={Palette.textMain} style={{ pointerEvents: 'none' }} />
      </Pressable>
    ),
  }
}
