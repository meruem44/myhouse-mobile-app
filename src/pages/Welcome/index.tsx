import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Image, Text } from './styles';
import { Description } from '../../components/texts';
import { Primary } from '../../components/buttons';

const Welcome: React.FC = () => {

  const { navigate } = useNavigation();

  const handleNextSignIn = useCallback(() => {
    navigate('SignIn');
  }, []);

  return (
      <Container>
          <Image resizeMode="contain" />

          <Text>Bem-vindo ao MyHouse</Text>
          <Description 
          style={{ marginTop: 20 }}
          text="O app que facilita e te ajuda a encontrar a sua casa dos sonhos" />

          <Primary 
          onPress={handleNextSignIn}
          style={{ marginTop: '10%' }}
          textButton="Vamos lá" />
      </Container>
  );
}

export default Welcome;