import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Input } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../../styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
};

const DefaultInput: React.FC<InputProps> = ({ name, icon, ...res }) => {
  return (
    <Container>

      <MaterialCommunityIcons 
      name={icon} 
      size={24} 
      color={colors.grayText} />

     <Input {...res} />
    </Container>
  );
};

export default DefaultInput;
