import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
<NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} options={{
          title:"Home Page"
        }}  />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Administrators" component={Administrators}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="User" component={UserScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
