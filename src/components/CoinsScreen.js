import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet , Button, FlatList, ActivityIndicator} from 'react-native';
import get from '../libs/Http';
import CoinsItems from './CoinsItems';

export default function CoinsScreen(props){
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


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
                renderItem={({item}) => <CoinsItems item={item}/>}
                keyExtractor={item => item.id}
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
    },
    loading: {
        marginTop:20
    }
})