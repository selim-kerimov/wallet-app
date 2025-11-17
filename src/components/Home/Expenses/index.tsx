import { StyledText } from '@/shared/ui/StyledText'
import { StyleSheet, View } from 'react-native'
import { expensesMockData } from './data'
import { ExpenseCard } from './ExpenseCard'

export const Expenses = () => {
  return (
    <View style={styles.main}>
      {expensesMockData.map((item) => (
        <View key={item.day} style={styles.listItem}>
          <StyledText type="bodyLarge">{item.day}</StyledText>
          <View style={styles.cards}>
            {item.expenses.map((expense) => (
              <ExpenseCard key={expense.title} expense={expense} />
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    gap: 24,
  },
  listItem: {
    gap: 10,
  },
  cards: {
    gap: 4,
  },
})
