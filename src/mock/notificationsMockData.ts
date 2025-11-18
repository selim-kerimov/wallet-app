export const notificationsMockData: NotificationsData[] = [
  {
    date: '17 JUNE, 2025',
    notifications: [
      {
        id: 1,
        avatar: require('./assets/girl-avatar.png'),
        title: 'Received from Anna',
        amount: '+$110',
        cardNumber: 'Debit •• 4385',
        cardBalance: '4,098.12',
        date: '17 June 2025, 17:49',
        type: 'Payments',
      },
    ],
  },
  {
    date: '16 JUNE, 2025',
    notifications: [
      {
        id: 2,
        title: 'See our limited offer!',
        message: 'Would you like to visit new countries? Maybe it’s your time!',
        date: '16 June 2025, 23:08',
        type: 'Travel',
      },
      {
        id: 3,
        title: 'Sent to •• 2041',
        amount: '-$14.62',
        cardNumber: 'Debit •• 4385',
        cardBalance: '3,987.5',
        date: '16 June 2025, 06:18',
        type: 'Payments',
      },
    ],
  },
  {
    date: '15 JUNE, 2025',
    notifications: [
      {
        id: 4,
        title: 'New login into account',
        message: 'You have logged in from a new location: iOS 26.0.1 · 109.255.84.7 · Spain',
        date: '24 March 2025, 15:44',
        type: 'Security',
      },
    ],
  },
]

export type NotificationsData = {
  date: string
  notifications: {
    id: number
    avatar?: any
    title: string
    amount?: string
    cardNumber?: string
    cardBalance?: string
    message?: string
    date: string
    type: NotificationType
  }[]
}

export type NotificationType = 'Payments' | 'Security' | 'Delivery' | 'Travel'
