import { Header } from '@/components/Home/Header'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={style.content}>
        <Header />
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
  },
})
