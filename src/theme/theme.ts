import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Quicksand, sans-serif',
    body: 'Quicksand, sans-serif',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    light: {
      bg: '#e8fff3',
      primary: '#294f0b',
    },
    dark: {
      bg: '#121212',
      primary: '#609C25',
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#121212' : '#e8fff3',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        fontFamily: 'Quicksand, sans-serif',
      },
    }),
  },
  components: {
    Button: {
      variants: {
        solid: (props: { colorMode: string }) => ({
          bg: props.colorMode === 'dark' ? '#609C25' : '#294f0b',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? '#7CB82F' : '#1e3808',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          transition: 'all 0.2s',
        }),
      },
    },
    Card: {
      baseStyle: (props: { colorMode: string }) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
          boxShadow: props.colorMode === 'dark' ? 'dark-lg' : 'lg',
          borderRadius: 'xl',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: props.colorMode === 'dark' ? '2xl' : 'xl',
          },
        },
      }),
    },
  },
});

export default theme;