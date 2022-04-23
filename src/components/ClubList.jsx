import React from 'react';
import ClubCard from './clubCard';

const ClubList = ({clubs, navigation}) => {
    
    return (
        <>
        {clubs && clubs.map(club => <ClubCard 
            navigation={navigation}
            key={club.name} 
            name={club.name}
            image={club.image}
            description={club.description}
            score={club.score}
            address={`${club.street} ${club.num} ${club.ciudad}`}/>)}
        </>

    );
}

export default ClubList;
