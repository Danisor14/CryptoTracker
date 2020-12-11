import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet , Button, FlatList, ActivityIndicator} from 'react-native';
import {useTheme} from '@react-navigation/native';
import get from '../../libs/Http';
import CoinsItems from './CoinsItems';
import CoinSearch from './CoinSearch';

export default function CoinsScreen(props){
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [allCoins, setAllCoins] = useState([]);
    const theme = useTheme();


    // API REQUEST
    useEffect(() => {
        setIsLoading(true);
        const data = get('https://api.coinlore.net/api/tickers/');
        data
            .then(result => {
                setCoins(result.data);
                setAllCoins(result.data);
                setIsLoading(false);
            }) 
    }, [])
            
    //nos dirigimos y mandamos la informacion de la moneda seleccionada a cointDetails 
    const handlePress = (coin) => {
        props.navigation.navigate('CoinDetails', {coin});
    }
 
    const getFilteredCoins = () =>{
        if(search === ""){
            setCoins(allCoins);
        }else{
            const coinsFiltered = allCoins.filter((coin) => {
                return coin.name.toLowerCase().includes(search.toLowerCase()) || 
                coin.symbol.toLowerCase().includes(search.toLowerCase());
            })
            setCoins(coinsFiltered);
        }
        
    }

    return(
        <View style={[style.container,{backgroundColor: theme.colors.backgroundContainer}]}>

            <CoinSearch setSearch={setSearch} search={search} getFilteredCoins={getFilteredCoins}/>

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
                keyExtractor={(item) => item.id}
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