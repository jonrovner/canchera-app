import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';


const ClubCard = (props) => {
//    console.log('props: ', props)

   const cardStyles =  StyleSheet.create({
       container: {
           flexDirection: 'row',
           flexGrow: 1,
           paddingBottom: 10,
           alignItems: 'center'
       },
       avatar: {
           width: 45,
           height: 45,
           borderRadius: 45/2
       },
       avatarContainer: {
           flexGrow: 1,
           paddingRight: 15,

       },
       infoContainer: {
           flexGrow: 2,
       },
       score:{
           flexGrow:1,
           
       }
   })
    
   

    return (
        <View style={cardStyles.container}>
            <Pressable onPress={() =>
                props.navigation.navigate('Detail', { name: props.name })}>

                <View style={cardStyles.avatarContainer}>   
                    <Image style={cardStyles.avatar} source={{uri: props.image}} />

                </View>
                <View style={cardStyles.infoContainer}>
                    <Text>{props.name}</Text>
                    <Text>{props.address}</Text>
                </View>
                <View style={cardStyles.score}>

                    <Text >{props.score} ⭐️</Text>
                </View>
          </Pressable>
            
        </View>
    );
}

export default ClubCard;
