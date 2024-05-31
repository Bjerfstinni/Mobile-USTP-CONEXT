import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './Navigation/AuthContext';
import { Image, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UserScreen from './Screens/UserScreen';
import Administrators from './Screens/Administrators';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';
import ModalComponent from './Components/ModalComponent';

// Import the icon image
import MenuIcon from './assets/menu.png';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const { isLoggedIn } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options={{
                title: "CITC CoNexT",
                headerStyle: { backgroundColor: '#044556' },
                headerTintColor: '#fff',
                headerRight: () => (
                  // Wrap the Image with TouchableOpacity
                  <TouchableOpacity onPress={toggleModal}>
                    <Image 
                      source={MenuIcon}
                      style={{ width: 25, height: 25, marginRight: 15 }}
                    />
                  </TouchableOpacity>
                ),
              }}  
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="Administrators" component={Administrators} />
          </>
        ) : (
          <>
            <Stack.Screen 
              name="HomePage" 
              component={HomePage} 
              options={{
                title: "CITC CoNexT",
                headerStyle: { backgroundColor: '#044556' },
                headerTintColor: '#fff',
              }}  
            />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
      <ModalComponent visible={modalVisible} onClose={toggleModal} />
    </>
  );
};

export default MainNavigator;
