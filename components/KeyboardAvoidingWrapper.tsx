import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';

interface KeyboardAvoidingWrapperProps {
  children: ReactNode;
}

const KeyboardAvoidingWrapper: React.FC<KeyboardAvoidingWrapperProps> = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
