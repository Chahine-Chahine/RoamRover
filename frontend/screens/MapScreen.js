import React, { useEffect, useState } from "react";
import { View, Dimensions, Text, ActivityIndicator } from "react-native";
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
  const coordinates = JSON.parse(locationDetails.coordinates);
  latitude = coordinates.latitude;
  longitude = coordinates.longitude;
  const destination = { latitude, longitude };

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
      {data && (
        <Text
          style={{ textAlign: "center", marginTop: 10 }}
        >{`Estimated time: ${data.routes[0].legs[0].duration.text}`}</Text>
      )}
    </View>
  );
};

export default MapScreen;
