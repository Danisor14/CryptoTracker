import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet ,Image, SectionList, ActivityIndicator, FlatList, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {useTheme} from '@react-navigation/native';
import get from '../../libs/Http';
import MarketItems from './MarketItems';
import {addStorage, removeStorage, getStorage} from '../../libs/storage';
 
export default function CoinDetailsScreen(props) {
    const [market, setMarket] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const theme = useTheme();
    const coinData = props.route.params.coin;
    
    useEffect(() => {
        getFavorite();
        props.navigation.setOptions({title: coinData.symbol});

        setIsLoading(true);
        const marketData = get(`https://api.coinlore.net/api/coin/markets/?id=${coinData.id}`);
        marketData
            .then( result => {
                setMarket(result);
                setIsLoading(false);
            });   
    },[])

    const toggleFavorite = () => { 
        if(isFavorite){
            removeFavorite();
        }else{
            addFavorite();
        }
    }

    const addFavorite = async () => {
        const coin = JSON.stringify(coinData);
        const key = `favorite-${coinData.id}`;

        const stored = await addStorage(key, coin);

        if(stored) {
            setIsFavorite(true);
        }
    }

    const removeFavorite = async () => {
        Alert.alert('Remove favorite', 'Are you sure?', [
            {
                text:'Cancel',
                onPress: () => {},
                style: 'cancel'
            },
            {
                text:'Remove',
                onPress: async () => {
                    const key = `favorite-${coinData.id}`;
        
                    await removeStorage(key);
            
                    setIsFavorite(false);
                },
                style:'destructive'
            }
        ]);

 
    }

    const getFavorite = async () => {
        try {
            const key = `favorite-${coinData.id}`;

            const favStr = await getStorage(key);
            
            if(favStr != null){
                setIsFavorite(true);
            }  
            
        } catch (err) {
            console.log('get favorites err,', err);
        }
    }

    const getSections = (coin) => {
        const sections = [
            {
                title: 'Market cap',
                data: [coin.market_cap_usd]
            },
            {
                title: 'Volume 24h',
                data: [coin.volume24]
            },
            {
                title: 'Change 24h',
                data: [coin.percent_change_24h]
            }
        ];

        return sections;
    }
    

    return(
        <View style={[style.container,{backgroundColor: theme.colors.backgroundContainer}]}>
            <View style={[style.subHeader,{backgroundColor: 'rgba(0, 0, 0, 0.1)'}]}>
                <View style={style.row}>
                    <Image
                        source={{uri:`https://c1.coinlore.com/img/25x25/${coinData.nameid}.png`}}
                        style={style.coinImage}
                    />
                    <Text style={[style.titleText,{color: theme.colors.text}]}>{coinData.name}</Text>
                </View>
                <View>
                    <Icon
                        type='material-community'
                        name={isFavorite ? 'star' : 'star-outline'}
                        color={isFavorite ? '#cd5a51' : theme.colors.icon}
                        size={22}
                        onPress={() => toggleFavorite()}
                    />
                </View>
                
            </View>
        

            <SectionList
                style={style.section}
                sections={getSections(coinData)}
                keyExtractor={(item) => item}
                renderItem={({item}) => 
                    <View style={style.sectionItem}>
                        <Text style={[style.itemText, {color: theme.colors.text}]}>{item}</Text>
                    </View>    
                }

                renderSectionHeader={({section}) => 
                    <View style={style.sectionHeader}>
                        <Text style={[style.sectionText], {color: theme.colors.text}}>{section.title}</Text>
                    </View>
                }
            />

            <Text style={[style.marketTitle, {color:theme.colors.text}]}>Markets</Text>

            {isLoading ?( 
                <ActivityIndicator
                    size="large"
                    color={theme.colors.text}
                />):(
                    <FlatList
                    style={style.list}
                    horizontal={true}
                    data={market}
                    keyExtractor={(item) => `${item.base}-${item.name}-${item.quote}`}
                    renderItem={({item}) => <MarketItems item={item}/>}
                    />
                )}
           
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    subHeader: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
    },
    coinImage: {
        width: 25,
        height: 25,
        marginRight: 8,
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    section: {
        maxHeight: 200,
    },
    sectionHeader: {
        backgroundColor: 'rgba(0,0,0, 0.2)',
        padding: 8,
    },
    sectionItem: {
        padding: 8,
    },
    itemText: {
        fontSize: 14,
    },
    sectionText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    list: {
        maxHeight: 100,
        paddingLeft: 16,
    },
    marketTitle:{
        fontSize: 16,
        marginTop: 30,
        marginBottom: 16,
        marginLeft: 16,
        fontWeight: 'bold'
    }
});