import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, TextButton } from './styles';

interface ButtonProps extends RectButtonProperties {
  textButton: string;
};

const Primary: React.FC<ButtonProps> = ({ textButton, ...res }) => {
  return (
    <Container {...res}>
      <TextButton>
        {textButton}
      </TextButton>
    </Container>
  );
};

export default Primary;
