import { MD2LightTheme as DefaultTheme } from 'react-native-paper';
import Colors from './Colors';

const theme = {
  ...DefaultTheme,
  version: 2,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    // accent: Colors.
    background: '#f6f6f6',
    surface: Colors.white,
    text: Colors.text,
    disabled: Colors.disabled,
    placeholder: Colors.placeholder,
    danger: Colors.danger,
  },
  fonts: {
    regular: {
      fontFamily: 'lato-regular',
    },
    medium: {
      fontFamily: 'lato-medium',
    },
    bold: {
      fontFamily: 'lato-bold',
    },
    light: {
      fontFamily: 'lato-regular',
    },
    thin: {
      fontFamily: 'lato-regular',
    },
  },
};

export default theme;
