import React, {useState} from 'react'
import {Text, TextInput, StyleSheet, View} from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    return(
        <View>
            <Text>Text Screen</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={newName => setName(newName)}
                placeholder="your name"
            />
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={pass}
                onChangeText={newPass => setPass(newPass)}
                placeholder="password"
            />
            <Text>My name is {name}</Text>
            {pass.length < 5 ? <Text>Password should have more than 5 characters</Text> : null}
        </View>
        
    )
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        height: 30,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen