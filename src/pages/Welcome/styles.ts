import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

import welcome from '../../assets/welcome.png';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.bg};
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image.attrs({
    source: welcome
})`

  height: ${metrics.height * 0.45}px;
`;

export const Text = styled.Text`
  font-size: 28px;
  color: ${colors.font};
  font-family: font500;
`;
