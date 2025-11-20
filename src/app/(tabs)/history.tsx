import { Palette } from '@/shared/constants/Palette'
import { StyledText } from '@/shared/ui/StyledText'
import { router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Palette.background }}>
      <TouchableOpacity
        onPress={() => router.push('/notifications')}
        style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
      >
        <StyledText color="accent">Go to notifications screen</StyledText>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
