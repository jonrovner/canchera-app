import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  
  return (
    <View style={styles.container}>
      <Text>Canchera</Text>
    </View>
  );
};

export default Main;