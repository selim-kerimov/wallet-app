import { NotificationSection } from '@/app/notifications'
import { Palette } from '@/shared/constants/Palette'
import { Dimensions, StyleSheet, View } from 'react-native'
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { HeaderItem } from './HeaderItem'

const { width: WINDOW_WIDTH } = Dimensions.get('window')

interface Props {
  sections: NotificationSection[]
  scrollX: SharedValue<number>
  onItemPress: (index: number) => void
}

export const Header = ({ sections, scrollX, onItemPress }: Props) => {
  const activeLineAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: scrollX.value / 5 }],
    }
  })

  return (
    <View style={styles.main}>
      {sections.map((item, index) => (
        <HeaderItem
          key={item}
          index={index}
          text={item}
          scrollX={scrollX}
          onPress={() => onItemPress(index)}
        />
      ))}

      <Animated.View style={[styles.activeLine, activeLineAnimatedStyles]} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  activeLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: Palette.accent,
    height: 2,
    width: WINDOW_WIDTH / 5,
  },
})
