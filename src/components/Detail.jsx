import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native-web';



const Detail = ({route}) => {
    
    const styles = StyleSheet.create({
        image:{
            width: 100,
            height: 100
        }
    })


    const [details, setDetails] = useState({})

    useEffect(()=>{

        const fetchDetails = async () => {
            try{
              const response = await fetch(`https://canchera.herokuapp.com/club/${route.params.name}`)
              const json = await response.json()
              console.log('json ', json)
              setDetails(json)
        
            } catch (error){
              console.log('error fetching club detail', error)       
           }
        }

        fetchDetails()
    
    },[])

    console.log('club details : ', details)
    
    const {
        Fields, 
        name, 
        description, 
        image, 
        /* latitude, 
        longitude, 
        street,
        num, 
        ciudad, 
        province, 
        openHour, 
        clouseHour, 
        score, */ 
    } = details

    console.log('fields: ', Fields)
    
    return (
        <View>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <View >   
              <Image style={styles.image} source={{uri: image}} />

            </View>

        </View>
       
    );
}

export default Detail;

