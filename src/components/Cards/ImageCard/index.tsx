import React from 'react';

import { Container, Image, Bullet, Text } from './styles';

interface ImageCardProps {
  uri: string;
  index: number;
  max: number;
};

const ImageCard: React.FC<ImageCardProps> = ({ uri, index, max }) => {
  return (
    <Container>
      <Image  source={{ uri }}/>
      <Bullet>
      <Text>{`${index}/${max}`}</Text>
      </Bullet>
    </Container>
  );
};

export default ImageCard;
