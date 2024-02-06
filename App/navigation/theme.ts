import { DefaultTheme, Theme } from '@react-navigation/native';
import Colors from '../constants/Colors';

const navigationTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.background,
    card: '#fff',
    border: 'rgba(0,0,0,0)',
    text: Colors.text,
  },
};

export default navigationTheme;
