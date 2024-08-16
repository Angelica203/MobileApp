// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

// // Import your screens
// import Login from '../screens/Login';
// import SignUp from '../screens/SignUp';
// import CreateEvent from '../screens/CreateEvent';

// // Create a Bottom Tab Navigator
// const Tab = createBottomTabNavigator();

// const MainNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === 'Login') {
//             iconName = 'log-in-outline';
//           } else if (route.name === 'SignUp') {
//             iconName = 'person-add-outline';
//           } else if (route.name === 'CreateEvent') {
//             iconName = 'add-circle-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;        },
//       })}
//     >
//       <Tab.Screen name="Login" component={Login} />
//       <Tab.Screen name="SignUp" component={SignUp} />
//       <Tab.Screen name="CreateEvent" component={CreateEvent} />
//     </Tab.Navigator>
//   );
// };

// export default MainNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import your screens
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import CreateEvent from '../screens/CreateEvent';
import EventList from '../screens/EventList';

// Create a Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          // Explicitly type the iconName and provide a default fallback
          let iconName: keyof typeof Ionicons.glyphMap = 'help-outline'; // Default fallback icon

          if (route.name === 'Login') {
            iconName = 'log-in-outline';
          } else if (route.name === 'SignUp') {
            iconName = 'person-add-outline';
          } else if (route.name === 'CreateEvent') {
            iconName = 'add-circle-outline';
          }else if (route.name === 'EventList') {
            iconName = 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="EventList" component={EventList} />
      <Tab.Screen name="CreateEvent" component={CreateEvent} />
    </Tab.Navigator>
  );
};

export default MainNavigator;