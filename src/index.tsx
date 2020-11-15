import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';
import { colors } from './styles';

const App: React.FC = () => {
  return (
    <>
    <StatusBar 
    barStyle="light-content"
    translucent 
    backgroundColor={colors.secundary} />
    <Routes />
    </>
  );
} 

export default App;