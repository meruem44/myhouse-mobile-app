import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';
import { Picker } from 'native-base';

import { Container } from './styles';

import { Entypo } from '@expo/vector-icons';

interface ItemData {
  value: number;
  label: string;
};

interface PickerProps {
  data:  ItemData[];
  place: string;
};

const PickerSelected: React.FC<PickerProps> = ({ data, place }) => {
  return (
    <Container>

      <Entypo 
        name="chevron-small-down"
        color={colors.secundary}
        size={30}
        style={styles.icon}
      />

     <Picker 
     mode="dropdown" 
     style={styles.picker}
     itemStyle={{ fontSize: 18, fontFamily: 'font500' }}
     placeholder={place}
     itemTextStyle={{ fontSize: 30, color: colors.secundary }}
     >
        <Picker.Item 
          color={colors.gray_text}
          value={null} 
          label={place} />

        {data.map(item => (
          <Picker.Item 
          color={colors.gray_text}
          value={item.value} 
          label={item.label} />
        ))}
     </Picker>
    </Container>
  );
};

export default PickerSelected;

const styles = StyleSheet.create({
  picker: {
    width: '100%',
    backgroundColor:'transparent',
    fontSize: 18, 
    fontFamily: 'font500'
  },
  icon: {
    position: 'absolute',
    right: 10
  }
});
