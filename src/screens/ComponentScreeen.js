import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const CompenentScreen = () => {
    const name = 'My name is Gabriel'
    
    return (
        <View>
            <Text style={styles.TextHeader}>Creating my first react native component</Text>
            <Text style={styles.TextSubHeader}>{name}</Text>
        </View>
    )
}
       
const styles = StyleSheet.create({
    TextHeader: {
        fontSize: 45
    },

    TextSubHeader:{
        fontSize: 20
    }

})


export default CompenentScreen
