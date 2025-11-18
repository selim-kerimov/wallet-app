import { StyledText } from '@/shared/ui/StyledText'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

export default function Screen() {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => router.push('/notifications')}
        style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
      >
        <StyledText color="accent">Go to notifications screen</StyledText>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
