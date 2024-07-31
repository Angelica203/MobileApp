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
import { NavigationContainer } from '@react-navigation/native';
import RootStack from '@/navigation/RootStack';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQIRRKFTQv9VaxU1R3qXgRGis90cuOf1c",
  authDomain: "link-up-9c6db.firebaseapp.com",
  projectId: "link-up-9c6db",
  storageBucket: "link-up-9c6db.appspot.com",
  messagingSenderId: "583101681450",
  appId: "1:583101681450:ios:a7c62c8f2375313cf9d853",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
