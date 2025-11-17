import { Cards } from '@/components/Home/Cards'
import { Expenses } from '@/components/Home/Expenses'
import { ExpensesChart } from '@/components/Home/ExpensesChart'
import { Header } from '@/components/Home/Header'
import { Services } from '@/components/Home/Services'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={style.content} showsVerticalScrollIndicator={false}>
        <Header />
        <Services />
        <Cards />
        <View style={style.expenses}>
          <ExpensesChart />
          <Expenses />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    gap: 24,
  },
  expenses: {
    gap: 32,
  },
})
