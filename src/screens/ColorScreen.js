import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'

const ColorScreen = () => {   
    const [Colors, setColors] = useState([])

    return(
        <View>
            <Text>Color Screen</Text>
            <Button title="Add color" onPress={() =>{
                setColors([...Colors, randomRGB()])
            }}/>
            
            <FlatList 
                keyExtractor={item => item}
                data={Colors}
                renderItem={({item}) =>{
                    return (
                        <View style={{height: 100, width: 100, backgroundColor: item }}/>
                    )
                }}
            />    
        </View>
    )
}

const randomRGB = () => {
    const red = Math.floor(Math.random()* 256)
    const blue = Math.floor(Math.random()* 256)
    const green = Math.floor(Math.random()* 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
    
})


export default ColorScreen