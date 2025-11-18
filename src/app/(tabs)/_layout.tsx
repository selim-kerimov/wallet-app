import { Tabs } from 'expo-router'
import HouseIcon from '@/assets/icons/house.svg'
import ExchangeIcon from '@/assets/icons/exchange.svg'
import ClockIcon from '@/assets/icons/clock.svg'
import PieIcon from '@/assets/icons/pie.svg'
import BubblesIcon from '@/assets/icons/bubbles.svg'
import { Palette } from '@/shared/constants/Palette'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyledText } from '@/shared/ui/StyledText'

export default function TabLayout() {
  const insets = useSafeAreaInsets()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Palette.accent,
        tabBarInactiveTintColor: 'white',
        sceneStyle: {
          backgroundColor: Palette.background,
        },
        tabBarStyle: {
          paddingTop: 4,
          height: 40 + insets.top,
          backgroundColor: Palette.background,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          paddingTop: 8,
        },
        tabBarIconStyle: {
          pointerEvents: 'none',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ color }) => (
            <StyledText type="labelMedium" style={{ color }}>
              Home
            </StyledText>
          ),
          tabBarIcon: ({ color }) => <HouseIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          tabBarLabel: ({ color }) => (
            <StyledText type="labelMedium" style={{ color }}>
              Payments
            </StyledText>
          ),
          tabBarIcon: ({ color }) => <ExchangeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarLabel: ({ color }) => (
            <StyledText type="labelMedium" style={{ color }}>
              History
            </StyledText>
          ),
          tabBarIcon: ({ color }) => <ClockIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarLabel: ({ color }) => (
            <StyledText type="labelMedium" style={{ color }}>
              Analytics
            </StyledText>
          ),
          tabBarIcon: ({ color }) => <PieIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          tabBarLabel: ({ color }) => (
            <StyledText type="labelMedium" style={{ color }}>
              Chats
            </StyledText>
          ),
          tabBarIcon: ({ color }) => <BubblesIcon color={color} />,
        }}
      />
    </Tabs>
  )
}
