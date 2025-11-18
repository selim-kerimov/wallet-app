import { StyleSheet, View } from 'react-native'
import { ExpenseItem } from './data'
import { Image } from 'expo-image'
import { Palette } from '@/shared/constants/Palette'
import { StyledText } from '@/shared/ui/StyledText'

interface Props {
  expense: ExpenseItem
}

export const ExpenseCard = ({ expense }: Props) => {
  return (
    <View style={styles.main}>
      <Image source={expense.image} style={styles.image} />

      <View style={styles.mainTextContainer}>
        <StyledText type="bodyMedium">{expense.title}</StyledText>
        <View style={styles.category}>
          <View style={[styles.dot, { backgroundColor: expense.categoryColor }]} />
          <StyledText>{expense.category}</StyledText>
        </View>
      </View>

      <View style={styles.left}>
        <StyledText type="bodyMedium">${expense.amount}</StyledText>
        <StyledText type="bodyMedium" color="textSecondary">
          ${expense.date}
        </StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    backgroundColor: Palette.backgroundLight,
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 16,
  },
  mainTextContainer: {
    flex: 1,
    gap: 4,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  left: {
    gap: 4,
    alignItems: 'flex-end',
  },
})
