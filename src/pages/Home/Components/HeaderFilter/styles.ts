import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    margin-top: 10px;
`;

export const Content = styled.View`
    padding-top: 30px;
`;

export const Button = styled(RectButton)`
    align-self: flex-end;
    right: 20px;
    position: absolute;
    z-index: 9999999999;
`;
