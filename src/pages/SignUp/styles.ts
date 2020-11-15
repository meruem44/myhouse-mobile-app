import styled from 'styled-components/native';

import logo from '../../assets/logo.png';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${colors.bg};
`;

export const Logo = styled.Image.attrs({
    source: logo
})`
    height: ${metrics.height * 0.2}px;
    width: ${metrics.width * 0.5}px;
`;

export const Span = styled.Text`
    font-size: 22px;
    color: ${colors.secundary};
    margin-bottom: 20px;
    font-family: font500;
    width: 80%;
`;

