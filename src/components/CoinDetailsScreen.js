import React from 'react';
import {View, Text} from 'react-native';

export default function CoinDetailsScreen(props) {
    
    const coin = props.route.params.coin;
    console.log(coin);

    return(
        <View>
            <Text>Coin Detail Screen...</Text>
        </View>
    )
}