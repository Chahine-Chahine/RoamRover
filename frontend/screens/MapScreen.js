import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [estimatedTime, setEstimatedTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const destination = { latitude: 34.1230, longitude: 35.6519 };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  useEffect(() => {
    const fetchRoute = async () => {
      if (location) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${location.latitude},${location.longitude}&destination=${destination.latitude},${destination.longitude}&key=AIzaSyDdIQ3GXG75xS54kXLVE7zAmMZKkJxP3EU`
          );
          const data = await response.json();
          if (data.routes.length) {
            const points = data.routes[0].overview_polyline.points;
            const decodedCoordinates = decodePolyline(points);
            setRouteCoordinates(decodedCoordinates);
            setEstimatedTime(data.routes[0].legs[0].duration.text);
          }
        } catch (error) {
          setErrorMsg('Failed to fetch route');
        }
        setIsLoading(false);
      }
    };

    fetchRoute();
  }, [location]);

  // Function to decode polyline points
  const decodePolyline = (encoded) => {
    if (!encoded) {
      return [];
    }
    const poly = [];
    let index = 0, len = encoded.length;
    let lat = 0, lng = 0;
    while (index < len) {
      let b, shift = 0, result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
        } while (b >= 0x20);
        let dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lat += dlat;
        shift = 0;
        result = 0;
        do {
          b = encoded.charCodeAt(index++) - 63;
          result |= (b & 0x1f) << shift;
          shift += 5;
        } while (b >= 0x20);
        let dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
        lng += dlng;
      
        const p = { latitude: (lat / 1e5), longitude: (lng / 1e5) };
        poly.push(p);
      }
      return poly;
    };

    return (
    <View style={{ flex: 1 }}>
    <MapView
    provider={PROVIDER_GOOGLE}
    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
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
           title="Destination"
           description="Jbeil, Lebanon"
         />
    {routeCoordinates.length > 0 && (
    <Polyline
             coordinates={routeCoordinates}
             strokeWidth={4}
             strokeColor="#6B46D9"
           />
    )}
    </MapView>
    {isLoading && (
    <ActivityIndicator size="large" color="#6B46D9" style={{ position: 'absolute', alignSelf: 'center', top: '50%' }} />
    )}
    {errorMsg && <Text style={{ textAlign: 'center', color: 'red', marginTop: 10 }}>{errorMsg}</Text>}
    {estimatedTime && <Text style={{ textAlign: 'center', marginTop: 10 }}>{`Estimated time: ${estimatedTime}`}</Text>}
    </View>
    );
    };
    
    export default MapScreen;      
