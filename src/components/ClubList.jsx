import React from 'react';
import { View, Text } from 'react-native';

const ClubList = ({clubs}) => {
    
    return (
        <>
        {clubs && clubs.map(club => (
        <View key={club.id}>
            <Text>
             {club.name} 
            </Text>
            </View>))}
        </>

    );
}

export default ClubList;
