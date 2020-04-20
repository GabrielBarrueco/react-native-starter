import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Text style={styles.text}>Hello world</Text>
      <Button 
        onPress={() =>  navigation.navigate('Components')} 
        title="Go to components demo" 
      />
      <Button 
        title="Go to list demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title="Go to ImageScreen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button 
        title="Go to CounterScreen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title="Go to ColorScreen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button 
        title="Go to SquareScreen"
        onPress={() => navigation.navigate('Square')}
      />
      <Button 
        title="Go to TextScreen"
        onPress={() => navigation.navigate('Text')}
      />
      <Button 
        title="Go to BoxScreen"
        onPress={() => navigation.navigate('Box')}
      />
      
    </View>    
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
  
});

export default HomeScreen;
