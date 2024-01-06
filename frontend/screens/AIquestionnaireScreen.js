import { useNavigation } from "@react-navigation/native";
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
      input: true 
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [budget, setBudget] = useState('');

  const handleSelectAnswer = (answer) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
  };

  const navigation = useNavigation();
  const navigateChat = () =>{
      navigation.navigate('HomeScreen');
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigateChat()
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
    <Text 
      style={[
        styles.answerText,
        selectedAnswers[currentQuestionIndex] === answer && styles.selectedAnswerText
      ]}
    >
      {answer}
    </Text>
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
        <Text style={styles.nextButtonText}>{currentQuestionIndex === questions.length - 1 ? "Done" : "Next"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  questionTitle: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  answerButton: {
    borderWidth: 1,
    borderColor: '#524077',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedAnswer: {
    backgroundColor: '#FF8566', 
    borderColor: '#FF8566',
  },
  selectedAnswerText: {
    color: 'white',
    fontWeight: 'bold'
  },
  answerText: {
    fontSize: 16,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#524077',
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#A78BFA',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
});

export default Questionnaire;
