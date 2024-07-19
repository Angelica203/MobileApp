import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  WelcomeContainer,
  Avatar
} from '../components/styles';

// const { brand, darkLight } = Colors;

const Welcome: React.FC = () => {
  return (
    <>
      <StatusBar style="light" />
        <InnerContainer>
        <Avatar resizeMode="cover" source={require('./../assets/Images/Img1.png')} />

          <WelcomeContainer>
          <PageTitle>Welcome</PageTitle>
          <SubTitle></SubTitle>
            <StyledFormArea>         
               {/* <Avatar resizeMode="cover" source={require('./../assets/Images/Img1.png')} /> */}
              <StyledButton onPress={() => {}}>
                <ButtonText>LogOut</ButtonText>
              </StyledButton>
              {/* <ExtraView>
                <ExtraText>Don't have an account yet?</ExtraText>
                <TextLink onPress={() => {}}>
                  <TextLinkContent>Sign Up</TextLinkContent>
                </TextLink>
              </ExtraView> */}
            </StyledFormArea>
          </WelcomeContainer>
        </InnerContainer>
    </>
  );
};

export default Welcome;
