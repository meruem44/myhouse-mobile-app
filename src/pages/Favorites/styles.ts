import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.bg};
    margin-top: ${metrics.heigthBar}px;
    padding: 0 5%;
`;

export const Span = styled.Text`
    font-size: 30px;
    color: ${colors.secundary};
    font-family: fontBold;
    width: 60%;
    margin: 20px 0;
`;