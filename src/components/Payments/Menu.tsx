import { Palette } from '@/shared/constants/Palette'
import { ContextMenu, Host, Button, Picker } from '@expo/ui/swift-ui'
import { useState } from 'react'
import { Platform } from 'react-native'

export const Menu = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  if (Platform.OS !== 'ios') return

  return (
    <Host style={{ width: 200, height: 50 }}>
      <ContextMenu>
        <ContextMenu.Items>
          <Button
            systemImage="person.crop.circle.badge.xmark"
            onPress={() => console.log('Pressed1')}
          >
            Option 1
          </Button>
          <Button variant="bordered" systemImage="heart" onPress={() => console.log('Pressed2')}>
            Option 2
          </Button>
          <Picker
            label="More..."
            options={['Option 3', 'Option 4', 'Option 5', 'Option 6']}
            variant="menu"
            selectedIndex={selectedIndex}
            onOptionSelected={({ nativeEvent: { index } }) => setSelectedIndex(index)}
          />
        </ContextMenu.Items>

        <ContextMenu.Trigger>
          <Button variant="bordered" color={Palette.textMain}>
            Liquid Glass Menu
          </Button>
        </ContextMenu.Trigger>
      </ContextMenu>
    </Host>
  )
}
