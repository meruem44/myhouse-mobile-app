import React from 'react';
import { FlatList } from 'react-native';

import Header from '../../components/Header';
import { CardHome } from '../../components/Cards';
import { Container, Span } from './styles';
import { HeaderFilter } from './Components';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <HeaderFilter />

      <Span>Sugestão para você:</Span>

      <FlatList 
        showsVerticalScrollIndicator={false}
        data={[1,2,3,4,5,6,7,8,10]}
        keyExtractor={(_, index) => String(index)}
        renderItem={() => (
          <CardHome />
        )}
      />
    </Container>
  );
};

export default Home;
