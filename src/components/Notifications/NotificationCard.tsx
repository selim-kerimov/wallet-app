import { NotificationsData, NotificationType } from '@/mock/notificationsMockData'
import { Image } from 'expo-image'
import { StyleSheet, View } from 'react-native'
import TravelIcon from '@/assets/icons/services/travel.svg'
import PaymentIcon from '@/assets/icons/services/payment.svg'
import SecurityIcon from '@/assets/icons/services/security.svg'
import { Palette } from '@/shared/constants/Palette'
import { StyledText } from '@/shared/ui/StyledText'
import { ReactNode } from 'react'

interface Props {
  notification: NotificationsData['notifications'][number]
}

export const NotificationCard = ({ notification }: Props) => {
  const icon: { [_ in NotificationType]: ReactNode } = {
    Payments: <PaymentIcon />,
    Security: <SecurityIcon />,
    Travel: <TravelIcon width={20} height={20} />,
  }

  return (
    <View style={styles.main}>
      {notification.avatar ? (
        <Image source={notification.avatar} style={styles.image} />
      ) : (
        <View style={styles.image}>{icon[notification.type]}</View>
      )}

      <View style={styles.sections}>
        <View style={styles.section}>
          <StyledText type="bodyMedium">{notification.title}</StyledText>
          {notification?.amount && (
            <StyledText type="headlineLarge" color="accent" style={{ fontWeight: '600' }}>
              {notification.amount}
            </StyledText>
          )}
        </View>

        <View style={styles.section}>
          {notification?.message && (
            <StyledText color="textSecondary" style={styles.message}>
              {notification.message}
            </StyledText>
          )}
          {notification?.cardNumber && (
            <StyledText color="textSecondary" style={styles.message}>
              {notification.cardNumber}
            </StyledText>
          )}
          {notification?.cardBalance && (
            <StyledText color="textSecondary" style={styles.message}>
              {notification.cardBalance}
            </StyledText>
          )}
        </View>

        <StyledText type="bodySmall" color="gray">
          {notification.date} {notification.type}
        </StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    gap: 12,
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: Palette.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sections: {
    flex: 1,
    gap: 6,
  },
  section: {
    gap: 4,
  },
  message: {
    flex: 1,
    lineHeight: 21,
  },
})
