import React from 'react';

import { Container, Button, Text } from './styles';

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../../../styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Button>
      <AntDesign name="arrowleft" size={35} color={colors.secundary} />
      </Button>

      <Text>Meu perfil</Text>

      <Button>
      <MaterialCommunityIcons name="location-exit" size={35} color={colors.secundary} />
      </Button>
    </Container>
  );
};

export default Header;
