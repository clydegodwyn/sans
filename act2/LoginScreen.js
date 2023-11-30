import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here (compare with stored credentials)
    // For simplicity, let's assume authentication is successful
    navigation.replace('Home');
  };

  const handleSignup = () => {
    navigation.navigate('Signup'); // Navigate to Signup page
  };

  const handleAccountRecovery = () => {
    navigation.navigate('AccountRecovery'); // Navigate to Account Recovery page
  };

  return (
    <View style={styles.container}>
      <Image source={require('./skate.png')} style={styles.image} />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={handleSignup}>
        Don't have an account? <Text style={[styles.linkText, { color: '#16558f' }]}>Sign Up</Text>
      </Text>
      <Text style={styles.link} onPress={handleAccountRecovery}>
        <Text style={[styles.linkText, { color: '#16558f' }]}>Forgot Password?</Text>
      </Text>
    </View>
  );
};

const primaryColor = '#16558f'; // Define primary color

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content at the top
    alignItems: 'center',
    paddingTop: 100, // Adjust the paddingTop to move content higher
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: primaryColor,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
    width: '60%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default LoginScreen;
