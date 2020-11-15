import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo, Span } from './styles';
import { DefaultInput } from '../../components/Inputs';
import {  Primary, ButtonText } from '../../components/buttons';

const SignIn: React.FC = () => {

  const { navigate } = useNavigation();

  const handleNavigateSignUp = useCallback(() => {
    navigate('SignUp')
  }, []);

  return (
    <Container>
      <Logo resizeMode="contain"/>

      <DefaultInput name="email" icon="email" placeholder="Digite o seu e-mail" />
      <DefaultInput name="password" icon="account-key" placeholder="Digite a sua senha"/>

      <ButtonText textButton="Cadastre-se" onPress={handleNavigateSignUp} style={{ marginVertical: 20 }} />
      <Span>OU</Span>
      <Primary textButton="Entrar" />
    </Container>
  );
};

export default SignIn;
