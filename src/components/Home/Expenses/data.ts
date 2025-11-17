import { Palette } from '@/shared/constants/Palette'

export const expensesMockData = [
  {
    day: 'Today',
    expenses: [
      {
        image: require('@/assets/mock/expense1.png'),
        title: 'Matthew Billson',
        category: 'Money Transfer',
        categoryColor: Palette.orange700,
        amount: '56.19',
        date: 'Jun 9, 12:08',
      },
    ],
  },
  {
    day: 'Yesterday',
    expenses: [
      {
        image: require('@/assets/mock/expense2.png'),
        title: 'Starbucks',
        category: 'Food',
        categoryColor: Palette.accent,
        amount: '122.47',
        date: 'Jun 8, 19:21',
      },
      {
        image: require('@/assets/mock/expense3.png'),
        title: 'Netflix',
        category: 'Entertainment',
        categoryColor: Palette.orange400,
        amount: '13.17',
        date: 'Jun 8, 08:53',
      },
    ],
  },
  {
    day: '16.11.2025',
    expenses: [
      {
        image: require('@/assets/mock/expense1.png'),
        title: 'Matthew Billson',
        category: 'Money Transfer',
        categoryColor: Palette.orange700,
        amount: '56.19',
        date: 'Jun 9, 12:08',
      },
    ],
  },
  {
    day: '15.11.2025',
    expenses: [
      {
        image: require('@/assets/mock/expense2.png'),
        title: 'Starbucks',
        category: 'Food',
        categoryColor: Palette.accent,
        amount: '122.47',
        date: 'Jun 8, 19:21',
      },
      {
        image: require('@/assets/mock/expense3.png'),
        title: 'Netflix',
        category: 'Entertainment',
        categoryColor: Palette.orange400,
        amount: '13.17',
        date: 'Jun 8, 08:53',
      },
    ],
  },
]

export type ExpenseItem = (typeof expensesMockData)[number]['expenses'][number]
