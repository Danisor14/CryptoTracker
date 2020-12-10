import React from 'react';
import { StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';

export default function CoinSearch({setSearch, search, getFilteredCoins}) {
    const theme = useTheme();

    const onChangeSearch = (e) =>{
        setSearch(e);
        getFilteredCoins();
    }

    return (
        <Searchbar
            placeholder='Search coin...'
            // la e es el evento lo que se digita
            onChangeText={(e) => onChangeSearch(e)}
            value={search}
            style={[styles.search,{backgroundColor: theme.colors.backgroundContainer}]}
            inputStyle={{color: theme.colors.text}}
            placeholderTextColor={theme.colors.placeHolderSearch}
            iconColor={theme.colors.icon}
            //containerStyle={{backgroundColor: theme.colors.background}}
           
        />
    )
}

const styles = StyleSheet.create({
    search: {
        height: 46
    }
})
