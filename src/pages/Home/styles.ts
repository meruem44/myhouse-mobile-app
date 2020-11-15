import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.bg};
    margin-top: ${metrics.heigthBar}px;
    padding: 0 25px;
`;

export const Span = styled.Text`
    font-size: 19px;
    color: ${colors.secundary};
    font-family: font500;
    width: 80%;
    margin: 20px 0;
`;