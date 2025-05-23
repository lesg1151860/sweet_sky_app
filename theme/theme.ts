import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#FF69B4', // Rosa suave
      secondary: '#FFB6C1', // Rosa claro
      accent: '#FFC0CB', // Rosa pastel
      background: '#FFF0F5', // Rosa muy claro
      text: '#4A4A4A', // Gris oscuro para texto
    },
  },
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Poppins", sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.background',
        color: 'brand.text',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: 'semibold',
      },
      variants: {
        solid: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'brand.secondary',
          },
        },
      },
    },
  },
});

export default theme; 