import React, { useState } from 'react';
import { View, Text, TouchableOpacity , Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OutlinedButton from "./OutlinedButton";


const Card = ({ onPress, title , description , price , url, location, label,  showBookmark = false, style}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  let bookmarktoggle = () => {
    if (isBookmarked == true){
      return setIsBookmarked(false)
    }else{
      setIsBookmarked(true)
    }
  }
  return (
    <TouchableOpacity  onPress={() => onPress(location)} style={styles.fullScreen}>
      <View style={styles.containerStyle}>
      <View style={styles.cardWrapper}>
        <View >
          <Image source={{uri: url}} style={styles.cardImage}/>
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.leftCard}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
          </View>
          <View style={styles.rightCard}>
            {showBookmark && <Icon name='bookmark'  onPress={bookmarktoggle} solid={isBookmarked} size={22} style={styles.bookmark}  />}
            <OutlinedButton label={'join'} style={styles.OutlinedButton} onPress={() => console.log("working")} />
            </View>
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
    elevation: 2,
    flexDirection: "column",
    width: 300, 
    height: 200, 
    marginBottom: 40, 
    paddingVertical: 10
  },
  containerStyle: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    borderColor: '#524077',
    width: "90%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },

  cardImage: {
    width: '100%',
    height: '85%', 
    borderRadius: 20,
  },
  contentWrapper: {
    flexDirection: 'row',
    width: '100%',
    height: '20%', 
  },
  leftCard: {
    width: '60%',
    justifyContent: 'center', 
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingVertical: 8
  },
  rightCard: {
    padding: 10,
    width: '60%',
  },
  bookmark:{
    position:'absolute',
    right: 70,
    top: -140,

  },
  OutlinedButton: {
    width: 100,
    position: 'absolute',
    left: 20,
    top: 9,
    backgroundColor: '#A78BFA',
    borderWidth: 0
   }
};

export default Card;
