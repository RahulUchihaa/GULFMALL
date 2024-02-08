import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import type {MD2Theme} from 'react-native-paper';
import Navigation from './App/navigation/Navigation';
import theme from './App/constants/theme';
import {StatusBar} from 'react-native';
import useColorScheme from './App/hooks/useColorScheme';
import ConnectionListener from './App/components/ConnectionListener';
import AnimatedSplash from './App/screens/AnimatedSplash';

const Main = () => {
  const colorScheme = useColorScheme();
  return (
    
     <>
      <Navigation colorScheme={colorScheme} />
      <ConnectionListener />
      <StatusBar />
     </>
    
   
  );
};

export default function App() {
  return (
    <PaperProvider theme={theme as MD2Theme}>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
