import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OutlinedButton from "./OutlinedButton";

const Card = ({ location_id , onPress, title, description, price, url, label ,location, showBookmark = false, onBookmarkPress, isBookmarkedInitially, onAddPress  }) => {
    const [isBookmarked, setIsBookmarked] = useState(isBookmarkedInitially);

    useEffect(() => {
        setIsBookmarked(isBookmarkedInitially);
    }, [isBookmarkedInitially]);

    const handleBookmarkToggle = () => {
        setIsBookmarked(!isBookmarked);
        if (onBookmarkPress) {
            onBookmarkPress();
        }
    };

    return (
        <TouchableOpacity onPress={() => onPress(location)} style={styles.fullScreen} activeOpacity={0.8}>
            <View style={styles.containerStyle}>
                <View style={styles.cardWrapper}>
                    <View>
                        <Image source={{ uri: url }} style={styles.cardImage} />
                    </View>
                    <View style={styles.contentWrapper}>
                        <View style={styles.leftCard}>
                            <Text style={styles.title}>{title}</Text>
                            <Text>{description}</Text>
                            <Text>{price}</Text>
                        </View>
                        <View style={styles.rightCard}>
                            {showBookmark && (
                                <Icon
                                    name='bookmark'
                                    onPress={handleBookmarkToggle}
                                    solid={isBookmarked}
                                    size={22}
                                    style={styles.bookmark}
                                />
                            )}
                            <OutlinedButton label={label} style={styles.OutlinedButton} onPress={() => onAddPress(location_id)}  />
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
    flexDirection: "column",
    width: 300, 
    height: 200, 
    marginBottom: 40, 
    paddingVertical: 10,
  },
  containerStyle: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    width: "90%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 6, 
    shadowColor: '#A78BFA', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 0.94, 
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
