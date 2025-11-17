import { Header } from '@/components/Home/Header'
import { Services } from '@/components/Home/Services'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={style.content} showsVerticalScrollIndicator={false}>
        <Header />
        <Services />
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    gap: 24,
  },
})
