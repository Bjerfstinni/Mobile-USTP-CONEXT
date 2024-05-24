// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from './Navigation/AuthContext';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UserScreen from './Screens/UserScreen';
import Administrators from './Screens/Administrators';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

const MainNavigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title:"Home" }} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="User" component={UserScreen} />
          <Stack.Screen name="Administrators" component={Administrators} />
        </>
      ) : (
        <>
          <Stack.Screen name="HomePage" component={HomePage} options={{ title: "Home Page" }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default App;
