import { StyleSheet, View } from 'react-native'
import TravelIcon from '@/assets/icons/services/travel.svg'
import DeliveryIcon from '@/assets/icons/services/delivery.svg'
import BonusesIcon from '@/assets/icons/services/bonuses.svg'
import SupportIcon from '@/assets/icons/services/support.svg'
import { StyledText } from '@/shared/ui/StyledText'

export const Services = () => {
  const services = [
    { title: 'Travel', icon: <TravelIcon /> },
    { title: 'Delivery', icon: <DeliveryIcon /> },
    { title: 'Bonuses', icon: <BonusesIcon /> },
    { title: 'Support', icon: <SupportIcon /> },
  ]

  return (
    <View style={styles.main}>
      {services.map((service) => (
        <View key={service.title} style={styles.item}>
          {service.icon}
          <StyledText type="bodyMedium">{service.title}</StyledText>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    gap: 8,
    alignItems: 'center',
    paddingVertical: 7.5,
    paddingHorizontal: 11.5,
  },
})
