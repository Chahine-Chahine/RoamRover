import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OutlinedButton from "./OutlinedButton";

const Card = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardWrapper}>
        <View style={styles.cardImage}></View>
        <View style={styles.contentWrapper}>
          <View style={styles.leftCard}>
            <Text>3azme caffe</Text>
            <Text>coffee shop in Beirut</Text>
            <Text>20$/individual</Text>
          </View>
          <View style={styles.rightCard}>
            <Icon name='bookmark' size={20} marginBottom={15} />
            <OutlinedButton label="Add to List" onPress={() => console.log("working")} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  cardWrapper: {
    flexDirection: "column",
    width: "85%",
    height: "35%",
  },
  cardImage: {
    width: '100%',
    height: '60%',
    backgroundColor: 'black',
    borderRadius: 30,
  },
  contentWrapper: {
    flexDirection: 'row',
    width: '100%',
    height: '80%',
  },
  leftCard: {
    padding: 10,
    width: '50%',
    height: '60%',
  },
  rightCard: {
    padding: 10,
    alignItems: 'flex-end',
    width: '50%',
    height: '60%',
  },
};

export default Card;
