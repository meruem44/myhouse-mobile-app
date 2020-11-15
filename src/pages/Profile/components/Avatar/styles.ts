import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors, metrics } from '../../../../styles';

export const Container = styled.View`
    align-items: center;
    margin-top: ${metrics.height * 0.02}px;
`;

export const Image = styled.Image`
    width: ${metrics.width * 0.45}px;
    height: ${metrics.width * 0.45}px;
    border-radius: ${metrics.width * 0.45 / 2}px;
`;

export const ContentImage = styled.View`
    width: ${metrics.width * 0.45}px;
    height: ${metrics.width * 0.45}px;
`;


export const Button = styled(RectButton)`
    background-color: ${colors.secundary};
    width: 60px;
    height: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 999999;
    bottom: 0px;
    right: 5px;
`;

