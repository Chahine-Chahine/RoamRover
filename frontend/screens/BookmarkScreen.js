import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../components/common/NavigationBar';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { fetchBookmarks } from '../core/Redux/Actions/bookmarkActions'; 

const BookmarkScreen = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmark.bookmarks); 

  useEffect(() => {
    dispatch(fetchBookmarks());
  }, [dispatch]);
  
  // Right swipe actions
  const renderRightActions = (id) => {
    return (
      <View style={{ width: 190, flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => console.log('Add Pressed', id)} style={styles.rightAction}>
          <Text style={styles.actionText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Delete Pressed', id)} style={[styles.rightAction, { backgroundColor: '#FF8556' }]}>
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCard = ({ item }) => {
    if (!item || !item.location) {
        return null;
    }

    return (
        <Swipeable renderRightActions={() => renderRightActions(item.id)}>
            <View style={[styles.card, { height: 180 }]}>
                <Image source={{ uri: item.location.image }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                    <Text style={styles.title}>{item.location.title}</Text>
                    <Text style={styles.subtitle}>{item.location.description}</Text>
                    <Text style={styles.price}>{`${item.location.estimated_price}$`}</Text>
                </View>
            </View>
        </Swipeable>
    );
};
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          {/* <View>
            <Text style={styles.mainTitle}>Let’s Check What’s saved!</Text>
          </View> */}
          <FlatList
        data={bookmarks}
        renderItem={renderCard}
        keyExtractor={(item, index) => item && item.id ? item.id.toString() : `unknown-${index}`}
    />
        </SafeAreaView>
        <NavigationBar />
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: '12%',
    marginVertical: 20
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 18,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowOpacity: 0.1,
  },
  cardImage: {
    width: '50%',
    height: '100%',
  },
  cardContent: {
    padding: 20,
    justifyContent: 'space-around',
    width:'50%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 14,
  },
  rightAction: {
    height: 160,
    backgroundColor: '#A78BFA',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    top: 35
    
  
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
    padding: 20,
  },
});

export default BookmarkScreen;