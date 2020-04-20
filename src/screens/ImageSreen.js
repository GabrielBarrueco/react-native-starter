import React from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'

import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return(
        <View>
            <Text>Image Screen</Text>
            <ImageDetail 
                title="Beach" 
                imageSource={require('../../assets/beach.jpg')}
                Score="7"
            />
            <ImageDetail 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')}
                Score="9"
            />
            <ImageDetail 
                title="Forest" 
                imageSource={require('../../assets/forest.jpg')}
                Score="8"
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen