import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
    flex: 1;
    margin-top: ${metrics.heigthBar}px;
    background-color: ${colors.bg};
`;

export const Content = styled.ScrollView`
    padding: 10px 15px;
`;

export const Name = styled.Text`
    font-family: fontBold;
    font-size: 32px;
    color:${colors.font};
    margin-bottom: 8px;
`;

export const ContentText = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Address = styled.Text`
    font-family: font500;
    font-size: 22px;
    color:${colors.gray};
    margin-bottom: 8px;
    margin-right: 10px;
`;

export const Description = styled.Text`
    font-family: font400;
    font-size: 16px;
    color:${colors.gray_text};
    width: 100%;
    text-align: left;
    line-height: 24px;
    margin-bottom: 8px;
`;

export const Text = styled.Text`
    font-family: font400;
    font-size: 20px;
    color:${colors.font};
    margin-bottom: 8px;
`;


export const ContentButton = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 60px;
`;

export const Price = styled.Text`
    font-family: font500;
    font-size: 24px;
    color:${colors.font};
    margin-bottom: 8px;
`;

export const Button = styled(RectButton)`
    width: 50%;
    align-self: center;
    background-color: ${colors.primary};
    height: ${metrics.height * 0.07}px;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const TextButton = styled.Text`
    font-family: font400;
    font-size: 20px;
    color:${colors.bg};
    margin-bottom: 8px;
    margin-right: 10px;
`;


export const ButtonIcon = styled(RectButton)`
   height: 44px;
   width: 44px;
   border-radius: 22px;
   background-color: ${colors.bg};
   justify-content: center;
   align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: absolute;
  z-index: 9999999999999999999999999;
  width: 100%;
  top: 20px;
`;