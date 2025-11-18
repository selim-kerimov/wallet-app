import { Palette } from '@/shared/constants/Palette'
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import Animated, { interpolateColor, SharedValue, useAnimatedStyle } from 'react-native-reanimated'

const { width: WINDOW_WIDTH } = Dimensions.get('window')

interface ItemProps {
  index: number
  text: string
  scrollX: SharedValue<number>
  onPress: () => void
}

export const HeaderItem = ({ index, text, scrollX, onPress }: ItemProps) => {
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollX.value,
        [WINDOW_WIDTH * (index - 1), WINDOW_WIDTH * index, WINDOW_WIDTH * (index + 1)],
        [Palette.textSecondary, Palette.accent, Palette.textSecondary],
      ),
    }
  })

  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <Animated.Text style={[animatedTextStyle]}>{text}</Animated.Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
