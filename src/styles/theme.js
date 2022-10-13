import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  components: {
    Text: {
      variants: {
        subtitle: {
          color: 'gray.500',
          fontWeight: '14px',
        },
      }
    }
  }
};

const breakpoints = {
    sm: '320px',
    md: '800px',
    lg: '960px',
    xl: '1200px',
  }

const theme = extendTheme(customTheme, {breakpoints});

export default theme;