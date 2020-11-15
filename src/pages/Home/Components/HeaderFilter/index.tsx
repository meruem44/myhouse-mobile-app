import React, { useState, useCallback } from 'react';
import Collapse from 'react-native-collapsible';

import { Container, Button, Content } from './styles';

import { PickerSelected } from '../../../../components/Pickers';
import { InputFilter } from '../../../../components/Inputs';
import { Secundary } from '../../../../components/buttons';

import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../../../styles';

const data = [{
  value: 0,
  label: 'Casa'
}]

const HeaderFilter: React.FC = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Container>

    <Button 
    onPress={() => setIsCollapsed(!isCollapsed)}>
    <FontAwesome5 name="filter" size={20} color={colors.secundary} />
    </Button>

     <Collapse 
     collapsed={isCollapsed}>
     <Content>
     <PickerSelected 
     data={data} place="Comprar ou alugar ?" />
      <InputFilter
       placeholder="Digite o nome da Cidade" />
       <PickerSelected data={data} place="Tipo" />

       <Secundary style={{ marginTop: 10 }} textButton="Pesquisar" />
     </Content>
      </Collapse>
    </Container>
  );
};

export default HeaderFilter;
