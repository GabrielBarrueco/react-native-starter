import React, {useReducer} from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'

import Colorcounter from '../components/ColorCounter'

const COLOR_INCREMENT = 10

const reducer = (state, action) => {
     switch(action.type){
        case 'change_red':
            return state.red + state.payload > 255 || state.red + state.payload < 0
            ? state
            : {...state, red: state.red + action.payload}
        case 'change_blue':   
        return state.bluee + state.payload > 255 || state.bluee + state.payload < 0
            ? state
            : {...state, blue: state.blue + action.payload}
        case 'change_green':
            return state.green + state.payload > 255 || state.green + state.payload < 0
            ? state
            : {...state, green: state.green + action.payload}
        default:  state
     }
}

const SquareScreen = () => {   
        const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
        const {red, green, blue} = state;




    return (
        <View>
            <Colorcounter 
                color="Red"
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}            
            />
            <Colorcounter 
                color="Blue"    
                onIncrease={() => dispatch({type:'change_blue', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type:'change_blue', payload: -1 * COLOR_INCREMENT})}
            />
            <Colorcounter 
                color="Green"
                onIncrease={() => dispatch({type:'change_green', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type:'change_green', payload: -1 * COLOR_INCREMENT})}
            />
            <View style={{
                height: 200,
                width: 200,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }}/>
        </View>
    )
}


const styles = StyleSheet.create({
    
})


export default SquareScreen