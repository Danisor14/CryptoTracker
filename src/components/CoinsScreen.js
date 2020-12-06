import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet , Button} from 'react-native';
import get from '../libs/Http';

export default function CoinsScreen(props){
    const [coins, setCoins] = useState([]);
    console.log(coins);


    useEffect(() => {
        const data = get('https://api.coinlore.net/api/tickers/');
        data
            .then(result => {
                setCoins(result.data);
            })
        
           
    }, [])
            
    
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