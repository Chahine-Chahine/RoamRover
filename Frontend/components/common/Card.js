import React from 'react';
import { View, Text, TouchableOpacity , Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OutlinedButton from "./OutlinedButton";

const Card = ({ onPress ,title , description , price , uri}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fullScreen}>
      <View style={styles.cardWrapper}>
        <View >
          <Image source={uri} style={styles.cardImage}/>
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.leftCard}>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
          </View>
          <View style={styles.rightCard}>
            <Icon name='bookmark' size={20} style={styles.bookmark} />
            <OutlinedButton label="Add to List" onPress={() => console.log("working")} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrapper: {
    flexDirection: "column",
    width: 300, 
    height: 200, 
    marginBottom: 90, 
  },
  cardImage: {
    width: '100%',
    height: '85%', 
    borderRadius: 30,
  },
  contentWrapper: {
    flexDirection: 'row',
    width: '100%',
    height: '20%', 
  },
  leftCard: {
    padding: 10,
    width: '60%',
    justifyContent: 'center', 
  },
  rightCard: {
    padding: 10,
    width: '60%',
  },
  bookmark:{
    position:'absolute',
    right: 70,
    top: -10,
  }
};

export default Card;
