import React from 'react';
import { TextProps } from 'react-native';

import { Container, Text } from './styles';

interface PropsText extends TextProps {
text: string;
}

const description: React.FC<PropsText> = ({ text, ...res }) => {
  return (
      <Container>
        <Text {...res}>
            {text}
        </Text>
      </Container>
  );
}

export default description;