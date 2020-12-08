import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet , Button, FlatList, ActivityIndicator} from 'react-native';
import {useTheme} from '@react-navigation/native';
import get from '../libs/Http';
import CoinsItems from './CoinsItems';

export default function CoinsScreen(props){
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const theme = useTheme();


    // API REQUEST
    useEffect(() => {
        setIsLoading(true);
        const data = get('https://api.coinlore.net/api/tickers/');
        data
            .then(result => {
                setCoins(result.data);
                setIsLoading(false);
            }) 
    }, [])
            
    //nos dirigimos y mandamos la informacion de la moneda seleccionada a cointDetails 
    const handlePress = (coin) => {
        props.navigation.navigate('CoinDetails', {coin});
    }
 

    return(
        <View style={[style.container,{backgroundColor: theme.colors.backgroundContainer}]}>

            {isLoading ?(
                <ActivityIndicator 
                    color="green"     
                    size="large"
                    style={style.loading} 
                />
                ): null
            } 
               
            
            <FlatList
                data={coins}
                renderItem={({item}) => 
                    <CoinsItems 
                        item={item} 
                        onPress={() => handlePress(item)} 
                    />
                } 
                keyExtractor={item => item.id}
            />
        </View>
    )

}   


const style = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 20,
        marginBottom: 15
    },
    loading: {
        marginTop:20
    }
})