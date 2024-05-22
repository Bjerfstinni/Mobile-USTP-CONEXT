// DrawerContent.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useAuth } from './AuthContext';

const DrawerContent = (props) => {
  const { setIsLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsLoggedIn(false);
    props.navigation.replace('Login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://example.com/profile-picture.png' }} // Replace with your profile picture URL
          style={styles.profilePic}
        />
        <View>
          <Text style={styles.name}>John Doe</Text> {/* Replace with dynamic name */}
          <Text style={styles.email}>john.doe@example.com</Text> {/* Replace with dynamic email */}
        </View>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.logoutButton}>
        <Button title="Logout" onPress={handleLogout} color="#d9534f" />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  logoutButton: {
    marginTop: 'auto',
    marginBottom: 20,
    marginHorizontal: 16,
  },
});
