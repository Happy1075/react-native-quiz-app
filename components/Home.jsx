import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image 
        source={{ uri: "http://apptraitsolutions.com/wp-content/uploads/2021/01/C88IZyEo7g-1-768x768.jpg" }} 
        style={styles.image} 
      />

      {/* Instructions Box */}
      <View style={styles.instructions}>
        <Text style={styles.instructionText}>📌 Answer all questions carefully.</Text>
        <Text style={styles.instructionText}>📌 You can select only one option.</Text>
        <Text style={styles.instructionText}>📌 Your score will be shown at the end.</Text>
      </View>

      {/* Quiz Buttons */}
      <TouchableOpacity 
        style={styles.quizButton} 
        onPress={() => navigation.navigate('Question', { quizNumber: 1 })}
      >
        <Text style={styles.buttonText}>Start Quiz 1</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.quizButton} 
        onPress={() => navigation.navigate('Question', { quizNumber: 2 })}
      >
        <Text style={styles.buttonText}>Start Quiz 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  instructions: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  quizButton: {
    width: '80%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
