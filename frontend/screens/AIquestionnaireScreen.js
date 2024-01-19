import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { createQuestionnaire } from '../core/Redux/Actions/generateaiActions';

const Questionnaire = () => {
  const questions = [
    {
      id: 1,
      question: "What kind of trip are you searching for?",
      answers: ["Beach and Chill", "Camp Fire and Camp", "Team Building", "Outdoor Exercising"]
    },
    {
      id: 2,
      question: "How much time are you willing to put in the trip?",
      answers: ["2 Hours", "4 Hours", "Half Day", "Full Day"]
    },
    {
      id: 3,
      question: "Approx budget",
      input: true 
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [ type_question_response, setTripType] = useState('');
  const [ time_question_response, setTripTime] = useState('');
  const [ budget_question_response, setBudget] = useState('');
  const [room_name, setRoomName] = useState('');
  const [room_description, setRoomDescription] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = useSelector((state) => state.auth.token); 

  const handleSelectAnswer = (answer) => {
    if (currentQuestionIndex === 0) {
      setTripType(answer);
    } else if (currentQuestionIndex === 1) {
      setTripTime(answer);
    }
  };

  const navigateChat = () => {
    navigation.navigate('HomeScreen');
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const finalBudget = parseFloat( budget_question_response); 
      const finalAnswers = {  type_question_response,  time_question_response,  budget_question_response: finalBudget };
      console.log(`Trip Type: ${ type_question_response}, Trip Time: ${ time_question_response}, Budget: ${finalBudget}`); 
      dispatch(createQuestionnaire(finalAnswers, token));
      navigateChat();
    }
  };
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <><Modal
    animationType="slide"
    transparent={true}
    visible={isModalVisible}
    onRequestClose={() => setIsModalVisible(!isModalVisible)}
  >
    <View style={styles.modalView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.modalTitle}>Create a Trip</Text>
        <TextInput
          placeholder="Room Name"
          onChangeText={setRoomName}
          value={room_name}
          style={styles.input}
        />
        <TextInput
          placeholder="Room Description"
          onChangeText={setRoomDescription}
          value={room_description}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Create Trip</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </Modal>
    <View style={styles.container}>
      <Text style={styles.questionTitle}>{currentQuestion.question}</Text>
      {currentQuestion.answers && currentQuestion.answers.map((answer) => (
        <TouchableOpacity
        key={answer}
        style={[
            styles.answerButton,
            currentQuestionIndex === 0 &&  type_question_response === answer && styles.selectedAnswer,
            currentQuestionIndex === 1 &&  time_question_response === answer && styles.selectedAnswer
          ]}
          onPress={() => handleSelectAnswer(answer)}
          >
          <Text 
            style={[
              styles.answerText,
              currentQuestionIndex === 0 &&  type_question_response === answer && styles.selectedAnswerText,
              currentQuestionIndex === 1 &&  time_question_response === answer && styles.selectedAnswerText
            ]}
            >
            {answer}
          </Text>
        </TouchableOpacity>
      ))}
      {currentQuestion.input && (
        <TextInput
        style={styles.input}
        value={ budget_question_response}
        onChangeText={setBudget}
        placeholder="Enter your budget"
        keyboardType="numeric"
        />
        )}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
        <Text style={styles.nextButtonText}>{currentQuestionIndex === questions.length - 1 ? "Done" : "Next"}</Text>
      </TouchableOpacity>
    </View>
</>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
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
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 120,
    marginHorizontal: 10,
    width: "95%",
    height: "40%",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
  },
  input: {
    height: 60,
    margin: 6,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#A78BFA",
  },
  button: {
    backgroundColor: "#A78BFA",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    margin: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default Questionnaire;
