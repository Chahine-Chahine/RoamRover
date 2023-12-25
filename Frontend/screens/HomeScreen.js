import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import OutlinedButton from "../components/common/OutlinedButton";

const HomeScreen = () => {
  return (
    <>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.headerImage}
            source={require("../assets/img.png")}
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
        <View style={styles.search}>
          <View style={styles.searchBar}>
            <Icon name= "search" size= {15} color= "black" marginRight= {10}/>
            <TextInput placeholder='Search'/>
          </View>
          <View style={styles.filterIcon}>
            <Icon name= "filter" size={25}/>
          </View>
        </View>
        <View style={styles.cardWrapper}>
          <View style={styles.cardImage}></View>
          <View style={styles.contentWrapper}>
          <View style={styles.leftCard}>
          <Text>3azme caffe</Text>
          <Text>coffee shop in Beirut</Text>
          <Text>20$/individual</Text>
          </View>
          <View style={styles.rightCard}>
            <Icon name= 'bookmark' size={20} marginBottom={15}/>
            <OutlinedButton label="Add to List" onPress={() => console.log("working")} />
          </View>
          </View>
        </View>
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "20%",
    paddingHorizontal: 16,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "85%",
    height: "10%",
    marginBottom: 30
  },
  searchBar: {
    padding:10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: '90%',
    borderRadius: 30,
    backgroundColor: '#D9D9D9'
  },
  cardWrapper: {
    flexDirection: "column",
    width: "85%",
    height: "35%",
  },
  cardImage: {
    width: '100%',
    height: '60%',
    backgroundColor: 'black',
    borderRadius: 30
  },
  contentWrapper: {
    flexDirection: 'row',
    width: '100%',
    height: '80%'
  },
  leftCard: {
    padding: 10,
    width: '50%',
    height: '60%',
  },
  rightCard: {
    padding: 10,
    alignItems: 'flex-end',
    width: '50%',
    height: '60%',
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
