import React, { useState } from 'react';
import { Formik } from 'formik';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ViewStyle, TextInputProps, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';
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

const CreateEvent: React.FC = () => {
  const [hidePassword, setHidePassword] = useState(true);

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
              <PageTitle>Create Event</PageTitle>
              <SubTitle>Fill in the details to create a new event</SubTitle>

              <Formik
                initialValues={{ eventName: '', eventDescription: '', eventDate: '' }}
                onSubmit={(values) => {
                  console.log(values);
                  // You can add your event creation logic here
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <StyledFormArea>
                    <MyTextInput
                      label="Event Name"
                      icon="calendar"
                      placeholder="Event Name"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('eventName')}
                      onBlur={handleBlur('eventName')}
                      value={values.eventName}
                    />
                    <MyTextInput
                      label="Event Description"
                      icon="note"
                      placeholder="Event Description"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('eventDescription')}
                      onBlur={handleBlur('eventDescription')}
                      value={values.eventDescription}
                    />
                    <MyTextInput
                      label="Event Date"
                      icon="calendar"
                      placeholder="YYYY-MM-DD"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('eventDate')}
                      onBlur={handleBlur('eventDate')}
                      value={values.eventDate}
                    />
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress={handleSubmit as any}>
                      <ButtonText>Create Event</ButtonText>
                    </StyledButton>
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
  inputStyle?: ViewStyle;
  [x: string]: any;
}

const MyTextInput: React.FC<MyTextInputProps> = ({
  label,
  icon,
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
    </View>
  );
};

export default CreateEvent;
