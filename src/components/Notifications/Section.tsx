import { NotificationSection } from '@/app/notifications'
import { notificationsMockData } from '@/mock/notificationsMockData'
import { StyledText } from '@/shared/ui/StyledText'
import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import { NotificationCard } from './NotificationCard'
import { Palette } from '@/shared/constants/Palette'

const { width: WINDOW_WIDTH } = Dimensions.get('window')

export const Section = ({ section }: { section: NotificationSection }) => {
  const data = notificationsMockData.map((item) => ({
    ...item,
    notifications: item.notifications.filter((i) => i.type === section),
  }))

  return (
    <FlatList
      data={section === 'All' ? notificationsMockData : data}
      renderItem={({ item }) => {
        if (!item.notifications.length) return <View style={{ width: WINDOW_WIDTH }} />
        return (
          <View style={styles.section}>
            <StyledText type="labelMedium" color="textSecondary">
              {item.date}
            </StyledText>
            <View style={styles.notifications}>
              {item.notifications.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
            </View>
          </View>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  section: {
    width: WINDOW_WIDTH,
    borderTopColor: Palette.border,
    borderTopWidth: 1,
    gap: 16,
    padding: 16,
  },
  notifications: {
    gap: 24,
  },
})
