import React from 'react';

import { 
  Container,
  Content,
  Name,
  Address,
  ContentText,
  Description,
  Text,
  ContentButton,
  Price,
  Button,
  TextButton,
  Header,
  ButtonIcon
 } from './styles';

import Carousel from '../../components/Carousel';

import { EvilIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles';

const data = [
  'https://www.plantapronta.com.br/projetos/140/01.jpg',
  'https://imagens-revista.vivadecora.com.br/uploads/2019/12/casas-lindas-com-piscina-e-varanda-ampla-Foto-Zozu.jpg',
  'https://imagens-revista.vivadecora.com.br/uploads/2019/12/casas-lindas-com-piscina-e-varanda-ampla-Foto-Zozu.jpg',
  'https://imagens-revista.vivadecora.com.br/uploads/2019/12/casas-lindas-com-piscina-e-varanda-ampla-Foto-Zozu.jpg'
]

const Details: React.FC = () => {
  return (
    <Container>
      <Header>
        <ButtonIcon>
        <AntDesign name="arrowleft" size={26} color={colors.font} />
        </ButtonIcon>

        <ButtonIcon>
        <AntDesign name="heart" size={26} color={colors.secundary} />
        </ButtonIcon>
      </Header>
      <Carousel data={data}/>

      <Content>
        <Name>Sugar Home</Name>
        <ContentText>
          <Address>Brodowski - SP</Address>
          <EvilIcons name="location" size={28} color={colors.secundary} />
        </ContentText>

        <Text>
          Descrição:
        </Text>

        <Description numberOfLines={6}>
            Uma casa muito linda e legal, voce pode gostar, é apenas um teste entendeu, então vamos lá meu amigo.
            Uma casa muito linda e legal, voce pode gostar, é apenas um teste entendeu, então vamos lá meu amigo.
            Uma casa muito linda e legal, voce pode gostar, é apenas um teste entendeu, então vamos lá meu amigo.
            Uma casa muito linda e legal, voce pode gostar, é apenas um teste entendeu, então vamos lá meu amigo.
          </Description>

          <ContentButton>
            <Price>R$ 500,00/Mês</Price>
            <Button>
              <TextButton>Contato</TextButton>
              <Ionicons name="logo-whatsapp" size={30} color="#fff" />
            </Button>
          </ContentButton>
      </Content>
    </Container>
  );
};

export default Details;
