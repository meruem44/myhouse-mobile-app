import styled from 'styled-components/native';
import { colors, metrics } from '../../../styles';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    height: ${metrics.height * 0.15}px;
    flex-direction: row;
    width: 100%;
    align-self: center;
    margin-bottom: 3%;
    border-radius: 20px;
    justify-content: center;
    padding: 5px;
`;

export const ContentImage = styled.View`
    flex: 1;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`;

export const Content = styled.View`
    flex: 2;
    justify-content:space-around;
    padding-left: 5%;
`;

export const Name = styled.Text`
    font-family: font500;
    font-size: 22px;
    color:${colors.font};
`;

export const Address = styled.Text`
    font-family: font400;
    font-size: 18px;
    color:${colors.gray};
`;

export const GroupInfo = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const Area = styled.Text`
    width: 30%;
    color:${colors.font};
    font-family: fontBold;
    font-size: 18px;

`;

export const Price = styled.Text`
 width: 70%;
 font-size: 18px;
 color:${colors.font};
 font-family: fontBold;
`;

export const Button = styled(RectButton)`
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: ${colors.red};
    height: 35px;
    width: 35px;
    align-items: center;
    justify-content: center;
    border-radius: 17px;
`;

