// import { registerRootComponent } from 'expo';
// import { NavigationContainer } from '@react-navigation/native';
// import RootStack from '@/navigation/RootStack';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <RootStack />
//     </NavigationContainer>
//   );
// }

// registerRootComponent(App);

import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '@/navigation/MainNavigator';  // Updated to the new navigator
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-auth-domain",
//   projectId: "your-project-id",
//   storageBucket: "your-storage-bucket",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id",
// };

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <MainNavigator />  // Updated to use the new MainNavigator
    </NavigationContainer>
  );
};

registerRootComponent(App);

export default App;