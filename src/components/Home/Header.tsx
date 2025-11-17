import { StyleSheet, TouchableOpacity, View } from 'react-native'
import PersonIcon from '@/assets/icons/person.svg'
import QrIcon from '@/assets/icons/qr.svg'
import ChaveronIcon from '@/assets/icons/chaveron.svg'
import { StyledText } from '@/shared/ui/StyledText'
import { Palette } from '@/shared/constants/Palette'

export const Header = () => {
  return (
    <View style={styles.main}>
      <View style={styles.left}>
        <View style={styles.person}>
          <PersonIcon color={Palette.textMain} />
        </View>

        <TouchableOpacity style={styles.nameContainer}>
          <StyledText type="bodyLarge">Charlotte</StyledText>
          <ChaveronIcon color={Palette.textMain} style={{ marginTop: 3 }} />
        </TouchableOpacity>
      </View>

      <QrIcon color={Palette.textMain} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  person: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Palette.backgroundLight,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
})
