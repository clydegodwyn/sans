import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={require('./skate.png')} style={styles.image} />
        <Text style={styles.skeeterzText}>Skeeterz</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.fullWidthButton}>
            <CustomButton
              title="Login"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
          <View style={styles.fullWidthButton}>
            <CustomButton
              title="Signup"
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  skeeterzText: {
    fontSize: 48, // Adjust the font size as needed
    fontWeight: 'bold',
    fontStyle: 'italic', // Add italic style
    color: '#16558f',
    marginTop: 20, // Adjust margin top as needed
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  fullWidthButton: {
    width: '70%',
    marginBottom: 10,
    alignSelf: 'center',
  },
  buttonStyle: {
    backgroundColor: '#16558f',
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandingScreen;
