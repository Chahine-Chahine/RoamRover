import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';


const LoadingScreen = () => {
    return (
        <>
        <View style={styles.container}>
      <LottieView 
        source={require('../assets/Animation - 1704993709185.json')} 
        autoPlay 
        loop 
        style={{ width: 400, height: 400 }}
      />
      </View>
      </>
    );
  };

  const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
  })
  
  export default LoadingScreen;