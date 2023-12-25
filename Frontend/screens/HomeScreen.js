import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from '../components/common/Header';
import Search from '../components/common/Search';
import Card from '../components/common/Card';
import NavigationBar from '../components/common/NavigationBar';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateLocationPage = () => {
    navigation.navigate('LocationScreen');
  };

  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <Card onPress={navigateLocationPage} />
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  // Add any additional styles specific to HomeScreen if needed
});

export default HomeScreen;
