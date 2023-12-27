import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

const Questionnaire = () => {
  const questions = [
    {
      id: 1,
      question: "What kind of trip are you searching for?",
      answers: ["Beach and chill", "Camp Fire and camp", "Team Building", "Outdoor exercising"]
    },
    {
      id: 2,
      question: "How much time are you willing to put in the trip?",
      answers: ["2 hours", "4 hours", "Half day", "Full day"]
    },
    {
      id: 3,
      question: "Approx budget",
      input: true // This signifies that the third question requires an input field
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [budget, setBudget] = useState('');

  const handleSelectAnswer = (answer) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Submit the answers or navigate to the next screen
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>{currentQuestion.question}</Text>
      {currentQuestion.answers && currentQuestion.answers.map((answer) => (
        <TouchableOpacity
          key={answer}
          style={[
            styles.answerButton,
            selectedAnswers[currentQuestionIndex] === answer && styles.selectedAnswer
          ]}
          onPress={() => handleSelectAnswer(answer)}
        >
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
      {currentQuestion.input && (
        <TextInput
          style={styles.input}
          value={budget}
          onChangeText={setBudget}
          placeholder="Enter your budget"
          keyboardType="numeric"
        />
      )}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // styles for the container
  },
  questionTitle: {
    // styles for the question title
  },
  answerButton: {
    // styles for answer buttons
  },
  selectedAnswer: {
    // additional styles for a selected answer, such as backgroundColor: 'lightblue'
  },
  input: {
    // styles for the input field
  },
  nextButton: {
    // styles for the next button
  },
  nextButtonText: {
    // styles for the next button text
  }
});

export default Questionnaire;
