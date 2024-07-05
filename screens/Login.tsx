import React, { useState } from 'react';
import { Formik } from 'formik';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ViewStyle, TextInputProps, Touchable, TouchableOpacity } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  StyledButton,
  ButtonText,
  Colors,
  RightIcon,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent
} from '../components/styles';

const { brand, darkLight } = Colors;

const Login: React.FC = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/Images/Img1.png')} />
        <PageTitle>Link Up</PageTitle>
        <SubTitle>Login Account</SubTitle>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="angelb@icloud.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword
                hidePassword={hidePassword}
                setHidePassword={() => setHidePassword(!hidePassword)}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit as any}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              {/* <Line /> */}
              <ExtraView>
                <ExtraText>
                  Dont't have an account yet?
                </ExtraText>
                <TextLink>
                  <TextLinkContent>SignUp</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

interface MyTextInputProps extends TextInputProps {
  label: string;
  icon?: keyof typeof Octicons.glyphMap;
  isPassword?: boolean;
  hidePassword?: boolean;
  setHidePassword?: () => void;
  inputStyle?: ViewStyle;
  [x: string]: any;
}

const MyTextInput: React.FC<MyTextInputProps> = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View style={{ position: 'relative' }}>
      {icon && (
        <LeftIcon>
          <Octicons name={icon} size={30} color={brand} />
        </LeftIcon>
      )}
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={setHidePassword}>
          <Ionicons name={hidePassword ? 'eye-off-outline' : 'eye-outline'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
