import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Score = ({ route, navigation }) => {
  const { score } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Completed! 🎉</Text>
      <Text style={styles.scoreText}>Your Score: {score} / 5</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 30,
    color: "#555",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
