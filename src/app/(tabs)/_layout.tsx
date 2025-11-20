import { Palette } from '@/shared/constants/Palette'
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs'
import { DynamicColorIOS, Platform } from 'react-native'

export default function TabLayout() {
  return (
    <NativeTabs
      backgroundColor={Palette.background}
      labelStyle={{
        selected: { color: getColor('accent') },
        color: getColor('textMain'),
      }}
      iconColor={{
        selected: getColor('accent'),
        default: getColor('textMain'),
      }}
      badgeBackgroundColor={Palette.accent}
    >
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="ic_menu_mylocation" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="payments">
        <Icon sf="creditcard" drawable="ic_menu_directions" />
        <Label>Payments</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="analytics">
        <Icon sf="chart.bar" drawable="ic_input_get" />
        <Label>Analytics</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="history">
        <Icon sf="clock" drawable="ic_menu_call" />
        <Label>History</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="chats">
        <Icon sf="bubble.left" drawable="ic_menu_my_calendar" />
        <Label>Chats</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}

const getColor = (color: keyof typeof Palette) => {
  if (Platform.OS === 'ios') {
    return DynamicColorIOS({
      dark: Palette[color],
      light: Palette[color],
    })
  } else {
    return Palette[color]
  }
}
