import styled from 'styled-components/native';
import { colors, metrics } from '../../../styles';

export const Container = styled.View`
    height: ${metrics.height * 0.45}px;
    width: ${metrics.width}px;
`;

export const Image = styled.Image`
    flex: 1;
`;

export const Bullet = styled.View`
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    z-index: 999999999999999999;
    right: 25px;
    bottom: 10px;
`;

export const Text = styled.Text`
    color: ${colors.bg};
    font-family: font500;
    font-size: 20px;
`;

