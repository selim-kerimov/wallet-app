import { NotificationCard } from '@/components/Notifications/NotificationCard'
import { notificationsMockData } from '@/mock/notificationsMockData'
import { StyledText } from '@/shared/ui/StyledText'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Notifications() {
  const insets = useSafeAreaInsets()

  return (
    <FlatList
      data={notificationsMockData}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <StyledText type="labelMedium" color="textSecondary">
            {item.date}
          </StyledText>
          <View style={styles.notifications}>
            {item.notifications.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </View>
        </View>
      )}
      contentContainerStyle={{ paddingBottom: insets.bottom }}
    />
  )
}

const styles = StyleSheet.create({
  listItem: {
    gap: 16,
    padding: 16,
  },
  notifications: {
    gap: 24,
  },
})
