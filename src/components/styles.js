import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';


const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: '#04620D',
    secondary: '#6c757d',
    tertiary: '#1f2937',
    darkLight: '#9aa5b1',
    brand: '#f9f9f9',
    green: '#10B981',
    white: '#ffffff',
};

const {primary, tertiary, darkLight, brand, green} = Colors;

export const StyledContainer = styled(View)`
    flex: 1;
    padding: ${StatusBarHeight + 10}px 25px 25px;
    background-color: ${primary};
`;

export const InnerContainer = styled(View)`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled(Image)`
    width: 250px;
    height: 200px;
`;

export const PageTitle = styled(Text)`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
`;

export const SubTitle = styled(Text)`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${brand};
`;

export const StyledFormArea = styled(View)`
    width: 90%;
`;

export const StyledTextInput = styled(TextInput)`
    background-color: ${tertiary};
    padding: 15px 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${darkLight};
`;

export const StyledInputLabel = styled(Text)`
    color: white;
    font-size: 15px;
    text-align: left;
`;

export const LeftIcon = styled(View)`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled(TouchableOpacity)`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled(TouchableOpacity)`
    padding: 15px;
    background-color: ${green};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google === true && `
    flex-direction: row;
    justify-content: space-evenly;
`}
`;

export const ButtonText = styled(Text)`
    color: ${brand};
    font-size: 16px;

    ${(props) => props.google === true && `
    `}
`;

export const MsgBox = styled(Text)`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled(View)`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled(View)`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled(Text)`
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 15px;
`;

export const TextLink = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled(Text)`
    color: darkblue;
    font-size: 15px;
`;