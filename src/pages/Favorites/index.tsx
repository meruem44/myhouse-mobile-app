import React from 'react';
import { FlatList } from 'react-native';

import { CardHome } from '../../components/Cards';
import { Container, Span } from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>

      <Span>Meus Favoritos</Span>

      <FlatList 
      showsVerticalScrollIndicator={false}
        data={[1,2,3,4,5,6,7,8,10]}
        keyExtractor={(_, index) => String(index)}
        renderItem={() => (
          <CardHome 
            isFavority={true}
          />
        )}
      />
    </Container>
  );
};

export default Favorites;
