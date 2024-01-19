import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { createQuestionnaire, fetchAIResponse } from '../core/Redux/Actions/generateaiActions';

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
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [type_question_response, setTripType] = useState('');
  const [time_question_response, setTripTime] = useState('');
  const [budget_question_response, setBudget] = useState('');
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

  const questionnaireState = useSelector(state => state.Questionnaire);

  const handleSubmit = async () => {
    const questionnaireData = {
      type_question_response,
      time_question_response,
      budget_question_response,
      room_name,
      room_description
    };
  
    try {
      await dispatch(createQuestionnaire({ QuestionnaireData: questionnaireData, token }));
      // Use a flag to determine if the room ID check should occur
      let checkForRoomId = true;
      // Define a function to check for the room ID in the updated state
      const checkRoomIdAndUpdate = () => {
        const latestState = questionnaireState.Questionnaire;
        const roomId = latestState.questionnaire?.room_id;
  
        if (roomId && checkForRoomId) {
          // Set flag to false to prevent further checks
          checkForRoomId = false;  
          dispatch(fetchAIResponse());
          navigation.navigate('ChatRoomScreen', { roomId });
        }
      };
      // Set up an interval to repeatedly check for the room ID
      const intervalId = setInterval(checkRoomIdAndUpdate, 500); 
  
      // Clear the interval when the component unmounts or when roomId is found
      return () => {
        checkForRoomId = false;
        clearInterval(intervalId);
      };
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
    }
  };
  
  
  

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length;

  return (
    <View style={styles.container}>
      {!isLastQuestion ? (
        <>
          <Text style={styles.questionTitle}>{currentQuestion.question}</Text>
          {currentQuestion.answers.map((answer) => (
            <TouchableOpacity
              key={answer}
              style={[
                styles.answerButton,
                type_question_response === answer && styles.selectedAnswer,
                time_question_response === answer && styles.selectedAnswer
              ]}
              onPress={() => handleSelectAnswer(answer)}
            >
              <Text 
                style={[
                  styles.answerText,
                  type_question_response === answer && styles.selectedAnswerText,
                  time_question_response === answer && styles.selectedAnswerText
                ]}
              >
                {answer}
              </Text>
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            value={budget_question_response}
            onChangeText={setBudget}
            placeholder="Enter your budget"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={room_name}
            onChangeText={setRoomName}
            placeholder="Enter room name"
          />
          <TextInput
            style={styles.input}
            value={room_description}
            onChangeText={setRoomDescription}
            placeholder="Enter room description"
          />
        </>
      )}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
        <Text style={styles.nextButtonText}>{isLastQuestion ? "Submit" : "Next"}</Text>
      </TouchableOpacity>
    </View>
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
  
});

export default Questionnaire;
