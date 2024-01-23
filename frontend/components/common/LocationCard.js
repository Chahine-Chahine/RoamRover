import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const LocationCard = ({
  title,
  subtitle,
  description,
  imageSource,
  estPrice,
  onCheckMap,
  onAdd,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageCard}>
        <Image style={styles.image} source={{ uri: imageSource }} />
      </View>
      <View style={styles.textCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>Est. Price</Text>
        <Text style={styles.priceValue}>{estPrice}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonEqual]}
          onPress={onCheckMap}
        >
          <Text style={styles.buttonText}>Check on Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonEqual]}
          onPress={onAdd}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 0,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  imageCard: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  textCard: {
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#656262",
    marginBottom: 10,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#6F6F6F",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  priceValue: {
    fontSize: 16,
    color: "#6F6F6F",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 35
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A399DC",
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 2,
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  buttonEqual: {
    marginHorizontal: 5,
  },
});

export default LocationCard;
