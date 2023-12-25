import { View, Text, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

const HomeScreen = () => {
  return (
    <>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.headerImage}
            source={require("../assets/Custom-trip.png")}
          />
        </View>
        <View>
          <Text>Hello Chahine</Text>
          <Text>Beirut, Lebanon</Text>
        </View>
        <View style={styles.messageIcon}>
        <Icon name="comment-dots" solid size={30} color="black" />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.search}></View>
        <View style={styles.cardWrapper}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "pink",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "20%",
    paddingHorizontal: 16,
  },
  search: {
    width: "100%",
    height: "10%",
    backgroundColor: "red",
  },
  cardWrapper: {
    width: "80%",
    height: "35%",
    backgroundColor: "teal",
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 20
  },
  messageIcon: {
    width: 140,
    height: 60,
    justifyContent: "center",
    alignItems: 'flex-end',
    
  }
});

export default HomeScreen;
