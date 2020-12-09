import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useTheme} from '@react-navigation/native';
import colors from '../../res/colors';

export default function MarketItems({item}) {
    const theme =useTheme();
    const colorText = theme.colors.text;
    return (
        <View style={styles.container}>
            <Text style={[styles.nameText, {color:colorText}]}>{item.name}</Text>
            <Text style={[{color:colorText}]}>{`$${item.price_usd}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: colors.zircon,
        borderWidth: 1,
        padding: 16,
        marginRight: 8,
        alignItems: "center"
    },
    nameText: {
        fontWeight: 'bold'
    },

})
