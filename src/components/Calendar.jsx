import React from 'react';
import { View, Text, Pressable, StyleSheet} from 'react-native-web';
import { setHours, eachHourOfInterval, getHours, isBefore } from "date-fns";

const Calendar = ({field, day, open, close, handleSelect }) => {

const styles = StyleSheet.create({
    container:{        
      margin: 5

    },
    btn:{
        height: 32,
       backgroundColor:'gray'
    
    },
    row:{
        display: 'grid',
        gridGap: 2,
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
    }

})
  //const [now] = useState(new Date());

   const hours = eachHourOfInterval({
    start: setHours(day, open),
    end: setHours(day, close),
  }); 
    

  //const bookingDates = field.Bookings.map((b) => new Date(b.time));
  // const users = user==='owner' && bookings.map( b => ({name: b.User.name, email: b.User.email}))
  //const bookingStrings = bookingDates.map((b) => b.toString());
    const hourStrings = hours.map((h) => h.toString());

    console.log('hola calendar:')
    console.log('hourstrings:', hourStrings)

    return (
        <View style={styles.container}>
            <Text>
                Cancha de {field.players}                
            </Text>
            <Text>
                precio: {field.price}                
            </Text>
            <View style={styles.row}>
               {
               
                hourStrings.map( (h, i) => <Text style={styles.btn} key={i}>{getHours(hours[i])}</Text>)
               
               /*  {hourStrings && hourStrings.map( (date, i) => {
                       <View style={styles.btn}>
                    <Pressable key={i} onPress={(e)=>{handleSelect(e,date,field.fieldId, field.price)}}>
                        <Text>{getHours(hours[i])}</Text>
                    </Pressable>
                       </View>
                })
                }   */} 
            </View>


            
        </View>
    );
}

export default Calendar;
