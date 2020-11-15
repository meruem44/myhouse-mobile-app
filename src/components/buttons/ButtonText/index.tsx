import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  textButton: string;
};

const ButtonText: React.FC<ButtonProps> = ({ textButton, ...res }) => {
  return (
    <Container {...res}>
      <Text>{textButton}</Text>
    </Container>
  );
};

export default ButtonText;
