import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.ViewOneStyle}/>
            <View style={styles.ViewTwoStyle}/>
            <View style={styles.ViewThreeStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },    

    ViewOneStyle : {
        height: 100,
        width: 100,
        backgroundColor: '#3366ff'
    },

    ViewTwoStyle : {
        height: 100,
        width: 100,
        backgroundColor: '#66ff99',
        marginTop: 100
    },

    ViewThreeStyle : {
        height: 100,
        width: 100,
        backgroundColor: '#ff3333'
    }
})

export default BoxScreen