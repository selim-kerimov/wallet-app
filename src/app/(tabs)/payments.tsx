import { SafeAreaView } from 'react-native-safe-area-context'
import { LiquidGlassView, isLiquidGlassSupported } from '@callstack/liquid-glass'
import { StyleSheet, View } from 'react-native'
import { StyledText } from '@/shared/ui/StyledText'
import { Image } from 'expo-image'
import { Menu } from '@/components/Payments/Menu'

export default function Screen() {
  return (
    <View style={styles.main}>
      <Image
        source={require('@/assets/images/background.jpg')}
        style={styles.backgroundImage}
        contentFit="cover"
      />

      <SafeAreaView edges={['top']} style={{ paddingHorizontal: 16 }}>
        <LiquidGlassView
          style={[
            styles.liquidGlass,
            !isLiquidGlassSupported && { backgroundColor: 'rgba(255,255,255,0.5)' },
          ]}
          interactive
          effect="clear"
        >
          <StyledText type="headlineMedium">Hello World</StyledText>
        </LiquidGlassView>

        <Menu />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    position: 'relative',
    flex: 1,
  },
  liquidGlass: {
    width: 200,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
})
