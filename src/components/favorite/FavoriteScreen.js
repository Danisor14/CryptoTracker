import React, {useEffect, useState} from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import {useTheme} from '@react-navigation/native'
import FavoriteEmpty from './FavoriteEmpty'
import {getAllkeys, multiGet} from '../../libs/storage'
import CoinsItems from '../coin/CoinsItems'

export default function FavoriteScreen(props) {
    const [favorites, setFavorites] = useState([]);
    const theme = useTheme();

    const getFavorites = async () =>{
        try {
            const allKeys = await getAllkeys();
             
            // filtrar para solo traer las llaves de los favoritos
            const keys = allKeys.filter(key => key.includes('favorite-'));

            const fav = await multiGet(keys);
            const favoritesStorage = fav.map(fav => JSON.parse(fav[1])); 

            setFavorites(favoritesStorage);

        } catch (err) {
            console.log('get favorites err', err);
        }
    }

    useEffect(() => {
        props.navigation.addListener('focus', getFavorites);

        // ejecuta cuando el componente se demonta equivalente a componenteWillUmmount
        return() => {
            props.navigation.removeListener('focus', getFavorites);
        }

    }, [])

    const handlePress = (coin) => {
        props.navigation.navigate('CoinDetails', {coin});
    }

    return (
        <View style={{flex: 1, backgroundColor: theme.colors.backgroundContainer}}>
            { favorites.length == 0 ?
                <FavoriteEmpty/>
              :<FlatList
                    data={favorites}
                    renderItem={({item}) => 
                        <CoinsItems 
                            item={item} 
                            onPress={() => handlePress(item)} 
                        />
                    }
                />
            }
        </View>
        
    )
}

const styles = StyleSheet.create({})
