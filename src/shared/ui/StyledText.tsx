import { StyleSheet, Text, TextProps, TextStyle } from 'react-native'
import { Palette } from '../constants/Palette'

interface Props extends TextProps {
  type?: Typography
  style?: TextStyle
  color?: keyof typeof Palette
}

export const StyledText = ({ type = 'bodyRegular', color = 'textMain', style, ...rest }: Props) => {
  const textColor = Palette[color]
  return (
    <Text
      {...rest}
      style={{
        ...styles[type],
        color: textColor,
        fontFamily: 'Main',
        ...style,
      }}
    />
  )
}

const styles = StyleSheet.create<{ [_ in Typography]: TextStyle }>({
  headlineLarge: {
    fontSize: 21,
    fontWeight: 500,
  },
  headlineMedium: {
    fontSize: 18,
    fontWeight: 600,
  },
  headlineSmall: {
    fontSize: 16,
    fontWeight: 600,
  },
  bodyLarge: {
    fontSize: 16,
    fontWeight: 500,
  },
  bodyMedium: {
    fontSize: 14,
    fontWeight: 500,
  },
  bodyRegular: {
    fontSize: 14,
  },
  bodySmall: {
    fontSize: 12,
  },
  labelLarge: {
    fontSize: 14,
    fontWeight: 600,
  },
  labelMedium: {
    fontSize: 12,
    fontWeight: 500,
  },
  labelSmall: {
    fontSize: 12,
  },
})

type Typography =
  | 'headlineLarge'
  | 'headlineMedium'
  | 'headlineSmall'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodyRegular'
  | 'bodySmall'
  | 'labelLarge'
  | 'labelMedium'
  | 'labelSmall'
