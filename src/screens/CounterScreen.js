import React, {useState, useReducer} from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'

const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            return {...state, value: state.value + action.payload}
        case 'decrement':
            return {...state, value: state.value - action.payload}
        default: 
            return state

    }
        

}

const CounterScreem = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0})
    
    return(
        <View>
            <Button title="Increase" 
            onPress={() => {dispatch({type:'increment', payload: 1})}}/>
            <Button title="Decrease"
            onPress={() => {dispatch({type:'decrement', payload: 1})}}/>
            
            <Text>Counter: {state.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CounterScreem