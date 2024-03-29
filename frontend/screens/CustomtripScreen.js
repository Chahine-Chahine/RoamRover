import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../core/Redux/Actions/locationActions";
import {
  createBookmark,
  deleteBookmark,
  fetchBookmarks,
} from "../core/Redux/Actions/bookmarkActions";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/common/Card";
import NavigationBar from "../components/common/NavigationBar";
import LoadingScreen from "./LoadingScreen";
import Search from "../components/common/Search";
import ActionButton from "../components/ProfileScreen/ActionButton";
import {
  createTrip,
  resetTripCreationState,
} from "../core/Redux/Actions/tripActions";

const CustomtripScreen = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [startingLocation, setStartingLocation] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { locations, loading, error } = useSelector((state) => state.locations);
  const { bookmarks } = useSelector((state) => state.bookmark);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const USER_ID = user ? user.id : null;

  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchBookmarks());
  }, [dispatch]);

  const navigation = useNavigation();

  const navigateLocationPage = (location) => {
    console.log("Navigating to location:", location);
    if (location) {
      navigation.navigate("LocationDetailScreen", {
        location,
        onAddPress: handleAddLocation,
      });
    }
  };

  const handleAddLocation = (locationId) => {
    setSelectedLocations((prevLocations) => {
      const updatedLocations = [...prevLocations, locationId];
      console.log("Added location ID:", updatedLocations);
      return updatedLocations;
    });
  };

  const handleDonePress = () => {
    setIsModalVisible(true);
  };

  const handleSearch = (query) => {
    dispatch(fetchLocations(query));
  };

  const handleBookmarkToggle = (location) => {
    const existingBookmark = bookmarks.find(
      (bookmark) => bookmark.location_id === location.id
    );
    console.log(location.id);
    console.log(bookmarks);
    console.log(existingBookmark);
    if (existingBookmark) {
      dispatch(deleteBookmark(existingBookmark.id));
    } else {
      if (USER_ID) {
        dispatch(
          createBookmark({ userId: USER_ID, locationId: location.id, token })
        );
      }
    }
  };

  const [alertShown, setAlertShown] = useState(false);

  const { success, error: tripError } = useSelector((state) => state.trips);

  useEffect(() => {
    if (success && !alertShown) {
      Alert.alert("Success", "Thank you, the trip created successfully!", [
        {
          text: "OK",
          onPress: () => {
            dispatch(resetTripCreationState());
            setAlertShown(true);
          },
        },
      ]);
    } else if (tripError) {
      Alert.alert(
        "Failure",
        "Oops, an error occurred. Please try again later."
      );
    }
  }, [success, tripError, alertShown, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetTripCreationState());
      setAlertShown(false);
    };
  }, [dispatch]);

  const handleSubmit = () => {
    if (
      !startingLocation ||
      !roomName ||
      !roomDescription ||
      selectedLocations.length === 0
    ) {
      alert("Required fields are missing");
      setAlertShown(false);
      return;
    }
    const totalBudget = selectedLocations.reduce((total, locationId) => {
      const location = locations.find((loc) => loc.id === locationId);
      if (location && !isNaN(location.estimated_price)) {
        return total + parseFloat(location.estimated_price);
      }

      return total;
    }, 0);
    const tripData = {
      starting_location: startingLocation,
      room_name: roomName,
      room_description: roomDescription,
      stops: selectedLocations,
      total_budget: isNaN(totalBudget) ? 0 : totalBudget,
      receipt: "this is a receipt",
    };

    console.log("Sending trip data:", tripData, token);
    dispatch(createTrip(tripData, token));
  };

  if (loading) return <LoadingScreen />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}
      >
        <View style={styles.modalView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.modalTitle}>Create a Trip</Text>
            <TextInput
              placeholder="Starting Location"
              onChangeText={setStartingLocation}
              value={startingLocation}
              style={styles.input}
            />
            <TextInput
              placeholder="Room Name"
              onChangeText={setRoomName}
              value={roomName}
              style={styles.input}
            />
            <TextInput
              placeholder="Room Description"
              onChangeText={setRoomDescription}
              value={roomDescription}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setIsModalVisible(!isModalVisible);
                handleSubmit();
              }}
            >
              <Text style={styles.buttonText}>Create Trip</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.Search}>
        <Search onSearch={handleSearch} />
      </View>
          <Text style={styles.searchText}>
            Search for your favorite place in town
          </Text>
          {locations.map((location) => {
            const isBookmarkedInitially = bookmarks.some(
              (bookmark) => bookmark.location_id === location.id
            );

            return (
              <Card
                key={location.id}
                location_id={location.id}
                onPress={() => navigateLocationPage(location)}
                title={location.title}
                description={location.description}
                price={`$${location.estimated_price} per individual`}
                url={location.image}
                label={"add"}
                buttonColor={'#A78BFA'}
                onAddPress={handleAddLocation}
                showBookmark={true}
                isBookmarkedInitially={isBookmarkedInitially}
                onBookmarkPress={() => handleBookmarkToggle(location)}
              />
            );
          })}
        </ScrollView>
      </View>
      <ActionButton title={"Done"} onPress={handleDonePress} />
      <NavigationBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    height: 140,
  },
  outlinedButton: {
    width: 100,
    position: "absolute",
    left: 15,
    top: 5,
  },
  Categories: {
    marginTop: 20,
  },
  Search: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 18,
    marginTop: 10,
    zIndex: 2,
  },
  searchText: {
    position: "absolute",
    top: 28,
    left: 80,
    fontSize: 14,
    fontWeight: "700",
    color: "#969696",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 130,
    marginHorizontal: 10,
    width: "95%",
    height: "40%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    margin: 8,
    marginTop: 20
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
export default CustomtripScreen;
