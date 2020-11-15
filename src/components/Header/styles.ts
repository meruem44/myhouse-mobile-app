import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 6%;
`;

export const ContentText = styled.View`
    
`;

export const Name = styled.Text`
    font-family: font500;
    font-size: 24px;
    color: ${colors.secundary};
`;


export const Description = styled.Text`
    font-family: font500;
    font-size: 20px;
    color: ${colors.gray};
    margin-top: 20px;
`;


export const Perfil = styled.Image`
    width: ${metrics.width * 0.16}px;
    height: ${metrics.width * 0.16}px;
    border-radius: ${metrics.width * 0.16 / 2}px;
`;

