import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
    setHours,
    setMinutes,
    setSeconds,
    addDays,
    //subDays,
    //isToday,
  } from "date-fns";
import Calendar from './Calendar';


const Detail = ({route}) => {
    
    const styles = StyleSheet.create({
        container:{            
            flex:1,
            
        },
        image:{
            width: 300,
            height: 200
        }
    })

    const now = new Date();
    const today = setSeconds(setMinutes(setHours(now, 8), 0), 0);
    const [selectedDay] = useState(today);
    const days = [today];
   
    for (let i = 1; i < 15; i++) {
        days[i] = addDays(today, i);
    }
    

    const [details, setDetails] = useState({})
   // const [fields, setFields] = useState([])

    

    
    const handleHourClick = (e) => {
        console.log('click event', e)
        
      };

    useEffect(()=>{

        const fetchDetails = async () => {
            try{
              const response = await fetch(`https://canchera.herokuapp.com/club/${route.params.name}`)
              const json = await response.json()
              //console.log('json ', json)
              setDetails(json)
        
            } catch (error){
              console.log('error fetching club detail', error)       
           }
        }

        fetchDetails()
    
    },[])

    /* useEffect(()=>{
        setFields(details.Fields)
    },[details.Fields] ) */

    //console.log('club details : ', details)
    
    const {
        name, 
        description, 
        image, 
        openHour, 
        closeHour, 
        
        /* latitude, 
        longitude, 
        street,
        num, 
        ciudad, 
        province, 
        score, */ 
    } = details

    /* console.log('fields in state: ', fields)
    */
   console.log('hola detail')
   return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <View >   
              <Image style={styles.image} source={{uri: image}} />

            </View>
            
            
                {details.Fields && details.Fields.length && details.Fields.map( (field, i) => {
                    
                    return (<>
                        <Calendar 
                                key={i}
                                day={selectedDay}
                                field={field}
                                handleSelect={handleHourClick}
                                open={openHour}
                                close={closeHour}/>    
                    </>)
                    
                    }
                )}
            

        </View>
       
    );
}

export default Detail;

