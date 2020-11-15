import React from 'react';
import { TextInputProps } from 'react-native';
import { colors } from '../../../styles';

import { Container, TextInput } from './styles';

import { Entypo } from '@expo/vector-icons';

interface InputProps extends TextInputProps {

};

const InputFilter: React.FC<InputProps> = ({ ...res }) => {
  return (
    <Container>
      <TextInput 
      placeholderTextColor={colors.gray_text}
      {...res}/>

    <Entypo 
    style={{ position: 'absolute', right: 10 }}
    name="location-pin" 
    size={24} 
    color={colors.secundary} />  
    </Container>
  );
};

export default InputFilter;
