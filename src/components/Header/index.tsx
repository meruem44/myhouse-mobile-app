import React from 'react';

import { Container, Perfil, Name, Description, ContentText } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
     
     <ContentText>
     <Name>Bom-dia Leandro</Name>
     <Description>O que deseja procurar ?</Description>
     </ContentText>

     <Perfil source={{ uri: 'https://avatars0.githubusercontent.com/u/48477073?v=4' }} />
    </Container>
  );
};

export default Header;
