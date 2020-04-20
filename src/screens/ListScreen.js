import React from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'Gabi', age: 20 },
        {name: 'Ler', age: 18},
        {name: 'Max', age: 21},
        {name: 'Tiago', age: 36 },
        {name: 'Renata', age: 50 },
        {name: 'Kyara', age: 10}
    ]

    return(
        <FlatList 
            showsVerticalScrollIndicator={false}
            keyExtractor={(friend) => friend.name }
            data={friends}
            renderItem={({item}) => {
            return (
                <Text style={styles.textStyle}>
                    {item.name} - Idade {item.age}
                </Text>
            )
            }} 
        />
    )
} 

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50,
        fontSize: 30
    }
})

export default ListScreen