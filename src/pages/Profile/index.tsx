import React from 'react';

import { Container, Content } from './styles';
import { Header, Avatar } from './components';
import { DefaultInput } from '../../components/Inputs';
import { Primary } from '../../components/buttons';

const Profile: React.FC = () => {
  return (
    <Container>
      <Header />
      <Avatar />

      <Content>
        <DefaultInput 
        placeholder="Digite seu nome"
        icon="account"
        name="name" />

      <DefaultInput 
        placeholder="Digite seu e-mail"
        icon="email"
        name="email" />

      <DefaultInput 
        placeholder="Digite seu cpf"
        icon="account-card-details"
        name="cpf" />

    <DefaultInput 
        placeholder="Sua senha atual"
        icon="account-key"
        name="password" />

        <Primary
          style={{ marginTop: 20 }}
        textButton="Confirmar mudanças" />
      </Content>
    </Container>
  );
};

export default Profile;
