import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Image } from 'expo-image'
import PlusIcon from '@/assets/icons/plus.svg'
import { Palette } from '@/shared/constants/Palette'
import { StyledText } from '@/shared/ui/StyledText'

export const Cards = () => {
  return (
    <View style={styles.main}>
      <Card balance="4,098.12" cardNumber="4385" type="Debit" />
      <Card balance="14.71" cardNumber="9081" type="Virtual" />
      <TouchableOpacity style={styles.plus}>
        <PlusIcon color={Palette.textMain} />
      </TouchableOpacity>
    </View>
  )
}

interface CardProps {
  balance: string
  type: 'Debit' | 'Virtual'
  cardNumber: string
}

const Card = ({ balance, cardNumber, type }: CardProps) => {
  const imageSource =
    type === 'Debit'
      ? require('@/assets/images/orange-card.png')
      : require('@/assets/images/gray-card.png')

  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.card} />

      <View style={styles.textContainer}>
        <StyledText type="headlineMedium">${balance}</StyledText>
        <View style={styles.textBottom}>
          <StyledText>{type}</StyledText>
          <StyledText>•• ${cardNumber}</StyledText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    gap: 8,
  },
  cardContainer: {
    position: 'relative',
    flex: 1,
    aspectRatio: 1.44,
  },
  card: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 12,
    gap: 6,
    paddingHorizontal: 12,
  },
  textBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plus: {
    width: 40,
    backgroundColor: Palette.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
})
