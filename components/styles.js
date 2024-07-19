import styled from 'styled-components/native';  // Use 'styled-components/native' for React Native
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export const Colors = {
  primary: "#B2E5F1",
  secondary: "#D3D3D3",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#6D28D9",
  green: "#10B981",
  red: "#EF4444",
};
const StatusBarHeight = Constants.statusBarHeight;

const { primary, secondary, tertiary, darkLight, brand } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 20}px;
  background-color: ${primary};
`;

export const InnerContainer = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 30px;
  padding-top: 5px;
  justify-content: center;
`;

export const PageLogo = styled(Image)`
  width: 100%;
  height: 250px;
  margin-top: 0px;
  margin-bottom: 5px;
  border-radius: 5px
`;

export const Avatar = styled(Image)`
  width: 100%;
  height: 300px;
  margin-top: 0px;
  margin-bottom: 10px;
  border-radius: 5px;
  border-width: 2px;
  border-color: ${secondary};
`;

export const PageTitle = styled(Text).attrs((props) => ({
  welcome: props.welcome,
}))`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 5px;

  ${(props) => props.welcome && `
    font-size: 35px;
  `}
`;

export const SubTitle = styled(Text)`
  font-size: 15px;
  margin-bottom: 5px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) => props.welcome &&`
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledFormArea = styled(View)`
  width: 90%;
`;

export const StyledTextInput = styled(TextInput)`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled(Text)`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
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
  align-items: center;
  background-color: ${brand};
  justify-content: center;
  border-radius: 20px;
  margin-vertical: 5px;
  height: 60px;
`;

export const ButtonText = styled(Text)`
  color: ${primary};
  font-size: 16px;
`;

export const MsgBox = styled(Text)`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled(View)`
  height: 1px;
  width: 300px;
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
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled(Text)`
  color: ${brand};
  font-size: 13px;
`;
