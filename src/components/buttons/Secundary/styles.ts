import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { colors, metrics } from '../../../styles';

export const Container = styled(RectButton)`
    width: ${metrics.width * 0.75}px;
    align-self: center;
    background-color: ${colors.primary};
    height: ${metrics.height * 0.07}px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    color: ${colors.bg};
    font-size: 22px;
    font-family: fontBold;
`;
