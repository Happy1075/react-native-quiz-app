import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import quizData from "./data";
import { useNavigation } from "@react-navigation/native";

const Question = ({ route }) => {
  const { quizNumber } = route.params;
  const navigation = useNavigation();

  // Fetch quiz data based on quizNumber
  const questions = quizNumber === 1 ? quizData.quiz1 : quizData.quiz2;

  // States
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[index];

  // Check Answer
  const handleCheckAnswer = () => {
    if (selectedOption === null) return; 

    setIsAnswered(true); 

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  // Next Question
  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, i) => {
        let backgroundColor = "#f0f0f0";

        if (isAnswered) {
          if (i === currentQuestion.correctAnswer) backgroundColor = "green";
          else if (i === selectedOption) backgroundColor = "red";
        } else if (selectedOption === i) {
          backgroundColor = "#ccc";
        }

        return (
          <TouchableOpacity
            key={i}
            style={[styles.option, { backgroundColor }]}
            onPress={() => !isAnswered && setSelectedOption(i)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        );
      })}

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* Show "Check Answer" only if an option is selected */}
        {selectedOption !== null && !isAnswered && (
          <TouchableOpacity style={styles.checkButton} onPress={handleCheckAnswer}>
            <Text style={styles.buttonText}>Check Answer</Text>
          </TouchableOpacity>
        )}

        {/* Show "Next" button after checking the answer */}
        {isAnswered && index < questions.length - 1 && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}

        {/* Show "Check Score" on last question */}
        {isAnswered && index === questions.length - 1 && (
          <TouchableOpacity
            style={styles.checkButton}
            onPress={() => navigation.navigate("Score", { score, total: questions.length })}
          >
            <Text style={styles.buttonText}>Check Score</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  option: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  checkButton: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  nextButton: {
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
