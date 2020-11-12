import 'react-native-gesture-handler';

import React from 'react';
import { AppLoading } from 'expo';

import { 
  Ubuntu_300Light, 
  Ubuntu_400Regular, 
  Ubuntu_500Medium, 
  Ubuntu_700Bold,
  useFonts
} from '@expo-google-fonts/ubuntu';

import Aplication from './src';

export default function App() {

  const [isLoaded] = useFonts({
    font300: Ubuntu_300Light,
    font400: Ubuntu_400Regular,
    font500: Ubuntu_500Medium,
    fontBold: Ubuntu_700Bold
  });

  if (!isLoaded) return <AppLoading />

  return <Aplication />
}

