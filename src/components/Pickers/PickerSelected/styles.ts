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
`;
