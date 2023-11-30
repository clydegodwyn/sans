import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming Ionicons is installed

const AccountRecoveryScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendResetCode = () => {
    // Here you can implement logic to send a password reset code to the provided email
    // For the sake of this example, let's assume the code is sent successfully
    alert(`Password reset code sent to ${email}`);
  };

  const handleGoBack = () => {
    navigation.goBack(); // Navigate back to the previous screen (Login)
  };

  return (
    <View style={styles.container}>
      <Image source={require('./skate.png')} style={styles.image} />
      <Text style={styles.text}>Skeeterz recover your account</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSendResetCode} style={styles.button}>
        <Text style={styles.buttonText}>Send Password Reset Code</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoBack} style={styles.goBackContainer}>
        <Ionicons name="ios-arrow-back" size={20} color="#16558f" />
        <Text style={styles.goBackText}>Back to Login Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#16558f',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#16558f',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goBackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  goBackText: {
    color: '#16558f',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default AccountRecoveryScreen;
