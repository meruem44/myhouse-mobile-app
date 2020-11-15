import styled from 'styled-components/native';
import { colors, metrics } from '../../../styles';

export const Container = styled.View`
    width: ${metrics.width * 0.9}px;
    align-self: center;
    background-color: ${colors.primary};
    height: ${metrics.height * 0.07}px;
    border-radius: 40px;
    background-color: ${colors.grayInput};
    justify-content: center;
    padding-left: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    font-size: 18px;
    font-family: font500;
`;
