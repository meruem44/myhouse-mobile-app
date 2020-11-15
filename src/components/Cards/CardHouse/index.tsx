import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import { 
  Container,
  ContentImage,
  Image,
  Content,
  Address,
  Area,
  GroupInfo,
  Name,
  Price,
  Button 
} from './styles';
import { colors } from '../../../styles';

interface CardHomeProps {
  isFavority?: boolean;
};

const CardHouse: React.FC<CardHomeProps> = ({ isFavority }) => {

  const { navigate } = useNavigation();


  const handleNavigateDetails = useCallback(() => {
    navigate('Details');
  }, []);

  return (
    <Container onPress={handleNavigateDetails}>

      {isFavority && (
        <Button>
          <Ionicons 
          name="ios-heart-dislike" 
          size={24} 
          color={colors.bg} />
        </Button>
      )}

      <ContentImage>
        <Image source={{ uri: 'https://www.spacofm.com.br/arquivos/cache/-de-nada-vale-uma-casa-bonita-se-nao-tiver-pessoa-crop_775_574_1551961040-8406-de-nada-vale-uma-casa-bonita-s.jpg' }} />
      </ContentImage>

      <Content>
        <Name>Suggar home</Name>
        <Address>Brodowski - SP</Address>

        <GroupInfo>
          <Area>70M²</Area>
          <Price>R$500,00/Mês</Price>
        </GroupInfo>
      </Content>
    </Container>
  );
};

export default CardHouse;
