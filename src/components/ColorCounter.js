import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return(
        <View>
            <Text>{color}</Text>
            <Button title={`inscrease ${color}`} onPress={() => onIncrease()}/>
            <Button title={`decrease ${color}`} onPress={() => onDecrease()}/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ColorCounter