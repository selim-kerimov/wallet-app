import { Palette } from '@/shared/constants/Palette'
import { StyledText } from '@/shared/ui/StyledText'
import { StyleSheet, View } from 'react-native'

export const ExpensesChart = () => {
  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <StyledText type="headlineLarge">
          Expenses in{' '}
          <StyledText color="accent" type="headlineLarge">
            June
          </StyledText>
        </StyledText>

        <StyledText type="headlineMedium" color="textSecondary">
          $5,091
        </StyledText>
      </View>

      <View style={styles.chartItems}>
        <View style={[styles.chartItem, { flex: 3, backgroundColor: Palette.orange700 }]} />
        <View style={[styles.chartItem, { flex: 2, backgroundColor: Palette.accent }]} />
        <View style={[styles.chartItem, { flex: 2, backgroundColor: Palette.orange400 }]} />
        <View style={[styles.chartItem, { flex: 1.5, backgroundColor: Palette.orange200 }]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    gap: 16,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chartItems: {
    flexDirection: 'row',
    gap: 2,
  },
  chartItem: {
    height: 8,
    borderRadius: 3,
  },
})
