import React from 'react';

import { Container, Image, Button, ContentImage } from './styles';

import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../../../styles';

const Avatar: React.FC = () => {
  return (
    <Container>
     <ContentImage>
     <Image source={{ uri: 'https://avatars0.githubusercontent.com/u/48477073?v=4' }}/>
      <Button>
      <AntDesign name="camerao" size={30} color={colors.font} />
      </Button>
     </ContentImage>
    </Container>
  );
};

export default Avatar;
