import { Header } from '@/components/Notifications/Header'
import { Section } from '@/components/Notifications/Section'
import { NotificationType } from '@/mock/notificationsMockData'
import { useRef } from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { width: WINDOW_WIDTH } = Dimensions.get('window')

export default function Notifications() {
  const flatListRef = useRef<FlatList>(null)
  const insets = useSafeAreaInsets()
  const scrollX = useSharedValue(0)

  const handleScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x
  })

  const handleHeaderItemPress = (index: number) => {
    flatListRef.current?.scrollToIndex({ index })
  }

  return (
    <View>
      <Header sections={sections} scrollX={scrollX} onItemPress={handleHeaderItemPress} />

      <Animated.FlatList
        ref={flatListRef}
        data={sections}
        renderItem={({ item }) => <Section section={item} />}
        onScroll={handleScroll}
        horizontal
        pagingEnabled
        contentContainerStyle={{ paddingBottom: insets.bottom }}
        getItemLayout={(_, index) => ({
          index,
          length: WINDOW_WIDTH,
          offset: WINDOW_WIDTH * index,
        })}
      />
    </View>
  )
}

export type NotificationSection = 'All' | NotificationType
const sections: NotificationSection[] = ['All', 'Payments', 'Security', 'Travel', 'Delivery']
