import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../components/common/NavigationBar';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { fetchBookmarks, deleteBookmark } from '../core/Redux/Actions/bookmarkActions'; 
import EmptyStateImage from '../assets/magnifier.png';
import { useNavigation } from '@react-navigation/native';

const BookmarkScreen = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector(state => state.bookmark.bookmarks); 
  const token = useSelector((state) => state.auth.token); 
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchBookmarks(token));
  }, [dispatch, token]);

  const navigateBookmark = (location) => {
    navigation.navigate('LocationDetailScreen', { location });
  }
  
  const renderRightActions = (bookmark) => (
    <View style={{ width: 190, flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => navigateBookmark(bookmark.location)} style={styles.rightAction}>
        <Text style={styles.actionText}>View</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => dispatch(deleteBookmark(bookmark.id, token))} 
        style={[styles.rightAction, { backgroundColor: '#FF8556' }]}
      >
        <Text style={styles.actionText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCard = ({ item }) => (
    <Swipeable renderRightActions={() => renderRightActions(item)}>
        <View style={[styles.card, { height: 180 }]}>
          <Image source={{ uri: item.location.image }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{item.location.title}</Text>
            <Text style={styles.subtitle}>{item.location.description}</Text>
            <Text style={styles.price}>{`$${item.location.estimated_price}`}</Text>
          </View>
        </View>
    </Swipeable>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyStateContainer}>
      <Image source={EmptyStateImage} style={styles.emptyStateImage} />
      <Text style={styles.emptyStateText}>No Bookmarks Yet</Text>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={bookmarks}
          renderItem={renderCard}
          keyExtractor={(item, index) => item && item.id ? item.id.toString() : `unknown-${index}`}
          ListEmptyComponent={renderEmptyState}
        />
      </SafeAreaView>
      <NavigationBar />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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
    top: 12,
    right:20
  },
  actionText: {
    color: 'white',
    fontWeight: '600',
    padding: 20,
  },
  emptyStateContainer: {
    flex: 1,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyStateImage: {
    width: 200, 
    height: 180, 
  },
  emptyStateText: {
    fontSize: 18,
    color: 'gray'
  }
});

export default BookmarkScreen;
