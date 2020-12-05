import React from 'react';
import {View, Text, StyleSheet , Button} from 'react-native';


export default function CoinsScreen(props){
    
    const handlePress = () => {
        props.navigation.navigate('CoinDetails');
    }
 
    return(
        <View style={style.view}>
            <Text style={style.text}>Coins screen ...</Text>
            <Button 
                title='Go to Detail' 
                onPress={() => handlePress()}
                color="green"
            />
        </View>
    )

}

const style = StyleSheet.create({
    view: {
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        marginBottom: 15
    }
})