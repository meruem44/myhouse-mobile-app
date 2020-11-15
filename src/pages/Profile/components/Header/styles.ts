import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '../../../../styles';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

export const Button = styled(RectButton)`

`;


export const Text = styled.Text`
    font-size: 28px;
    font-family: font500;
    color: ${colors.font};
`;



