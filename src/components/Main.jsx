import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import ClubList from './ClubList'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const [clubs, setClubs] = useState([])
  
  const fetchClubs = async () => {
    try{
      const response = await fetch('https://canchera.herokuapp.com/club')
      const json = await response.json()
      setClubs(json)

    } catch (error){
      console.log('error fetching clubes', error)       
   }
  }
  useEffect(()=>{
    fetchClubs()
  }, [])

  console.log('clubs : ', clubs)

  return (
    <View style={styles.container}>
      <Text>Canchera</Text>
      <ClubList clubs={clubs} />
      
    </View>
  );
};

export default Main;