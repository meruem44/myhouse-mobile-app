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

      <Span>Preencha os campos abaixo para criar a sua conta</Span>

      <DefaultInput name="name" icon="account" placeholder="Informe o seu nome" />
      <DefaultInput name="cpf" icon="account-card-details" placeholder="Digite o número do seu CPF"/>
      <DefaultInput name="email" icon="email" placeholder="Digite o seu endereço de e-mail" />
      <DefaultInput name="password" icon="account-key" placeholder="Escolha uma senha"/>

      <Primary textButton="Criar conta" style={{ marginTop: 22 }}/>
    </Container>
  );
};

export default SignIn;
