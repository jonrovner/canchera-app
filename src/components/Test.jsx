import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const Test = () => {

    const styles =  StyleSheet.create({
        container: {
            flexDirection: 'row',
            flexGrow: 1,
            paddingBottom: 10,
            alignItems: 'center'
        },
        content:{
            flexGrow:1,
            
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.content}>HOLA</Text>
        </View>
    );
}

export default Test;
