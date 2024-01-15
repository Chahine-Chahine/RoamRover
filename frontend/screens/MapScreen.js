import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
        region={region}
      >
        {location && (
          <Marker
            coordinate={location}
            title={"Starting Location"}
            description={"You are here"}
          />
        )}
      </MapView>
      {errorMsg && <Text style={{ textAlign: 'center', marginBottom: 10, color: 'red' }}>{errorMsg}</Text>}
    </View>
  );
};

export default MapScreen;
