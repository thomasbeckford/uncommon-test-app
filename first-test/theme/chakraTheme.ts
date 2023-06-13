import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const chakraTheme = extendTheme(
  {
    colors: {
      backgroundBlack: '#1E1E1E',
      uncommonBlack: '#020202',
      uncommonWhite: '#FFFEFE',
      uncommonHBlue: '#6C7AF5',
      gray: {
        100: '#ABACAD',
        200: '#ABACAD',
        300: '#ABACAD',
        400: '#ABACAD',
        500: '#ABACAD',
        600: '#8F9092',
        700: '#696B6D',
        800: '#444649',
        900: '#1E1E1E',
      },
    },
    components: {
      Button: {
        defaultProps: {
          colorScheme: 'gray',
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'gray' })
)

export default chakraTheme
