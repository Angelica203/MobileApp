import React, { useState } from 'react';
import { Formik } from 'formik';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ViewStyle, TextInputProps, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootStack';
import {
  StyledContainer,
  InnerContainer,
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
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from '../components/styles';

const { brand, darkLight } = Colors;
type SignUpScreenNavigationProp = NavigationProp<RootStackParamList, 'SignUp'>;


const SignUp: React.FC = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
              <PageTitle>Link Up</PageTitle>
              <SubTitle>Sign Up</SubTitle>

              <Formik
                initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
                onSubmit={(values) => {
                  console.log(values);
                  // navigation.navigate('Welcome');
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <StyledFormArea>
                    <MyTextInput
                      label="Full Name"
                      icon="person"
                      placeholder="Jane Doe"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      value={values.fullName}
                    />
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
                    <MyTextInput
                      label="Confirm Password"
                      icon="lock"
                      placeholder="* * * * * * * *"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      secureTextEntry={hideConfirmPassword}
                      isPassword
                      hidePassword={hideConfirmPassword}
                      setHidePassword={() => setHideConfirmPassword(!hideConfirmPassword)}
                    />
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress={handleSubmit as any}>
                      <ButtonText>Sign Up</ButtonText>
                    </StyledButton>
                    <ExtraView>
                      <ExtraText>Already have an account?</ExtraText>
                      <TextLink>
                        <TextLinkContent>Login</TextLinkContent>
                      </TextLink>
                    </ExtraView>
                  </StyledFormArea>
                )}
              </Formik>
            </InnerContainer>
          </StyledContainer>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
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

export default SignUp;
