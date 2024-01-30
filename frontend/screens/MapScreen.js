import React, { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { fetchRoute } from "../core/Redux/Actions/mapActions";
import CustomMarker from "../components/common/CustomMarker";

// Function to decode polyline points
const decodePolyline = (encoded) => {
  if (!encoded) {
    return [];
  }
  const poly = [];
  let index = 0,
    len = encoded.length;
  let lat = 0,
    lng = 0;
  while (index < len) {
    let b,
      shift = 0,
      result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    let dlat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += dlat;
    shift = 0;
    result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    let dlng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    const p = { latitude: lat / 1e5, longitude: lng / 1e5 };
    poly.push(p);
  }
  return poly;
};

const MapScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.route);
  const [location, setLocation] = useState(null);
  const [isMarkerPressed, setIsMarkerPressed] = useState(false);

  const locationDetails = route.params.location;
  console.log("locationDetails : ".locationDetails);
  console.log("locationDetails.coordinates : ", locationDetails.coordinates);
  const coordinates = locationDetails.coordinates;

  const destination = {
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      dispatch(fetchRoute(location, destination));
    }
  }, [location, dispatch]);

  const routeCoordinates = data
    ? decodePolyline(data.routes[0].overview_polyline.points)
    : [];

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        region={{
          latitude: location ? location.latitude : destination.latitude,
          longitude: location ? location.longitude : destination.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && (
          <Marker
            coordinate={location}
            title="Starting Location"
            description="You are here"
          />
        )}
        <Marker
          coordinate={destination}
          onPress={() => setIsMarkerPressed(!isMarkerPressed)}
        >
          {isMarkerPressed && (
            <CustomMarker
              rating={locationDetails.rating}
              title={locationDetails.title}
              description={locationDetails.area}
            />
          )}
        </Marker>
        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeWidth={4}
            strokeColor="#6B46D9"
          />
        )}
      </MapView>

      {data && (
        <View style={styles.estimatedTimeContainer}>
          <Text style={styles.estimatedTimeText}>
            Estimated Time: {data.routes[0].legs[0].duration.text}
          </Text>
        </View>
      )}

      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#6B46D9"
          style={{ position: "absolute", alignSelf: "center", top: "50%" }}
        />
      )}

      {error && (
        <Text style={{ textAlign: "center", color: "red", marginTop: 10 }}>
          {error.message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  estimatedTimeContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 8,
    borderRadius: 5,
    elevation: 5, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  estimatedTimeText: {
    fontSize: 16,
    color: "#000",
  },
});

export default MapScreen;
