import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Perform logout actions here
    navigation.replace('Login');
  };

  const welcomeMessage = "Welcome to the Home Screen!";

  return (
    <View style={styles.container}>
      <Image source={require('./skate.png')} style={styles.image} />
      <Text style={styles.welcomeText}>{welcomeMessage}</Text>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: '#16558f' }]} // Change button color here
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  welcomeText: {
    color: '#16558f', // Change the text color here
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
