import styled from 'styled-components/native';
import { colors, metrics } from '../../../styles';

export const Container = styled.View`
    width: ${metrics.width * 0.9}px;
    align-self: center;
    background-color: ${colors.grayInput};
    height: ${metrics.height * 0.07}px;
    border-radius: 40px;
    flex-direction: row;
    margin-top: 18px;
    align-items: center;
    padding: 0px 15px;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-family: font500;
    padding-left: 10px;
    color: #444;
    font-size: 16px;
`;
