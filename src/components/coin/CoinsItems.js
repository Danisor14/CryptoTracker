import React from 'react';
import { StyleSheet, Text, View, Image, Platform, Pressable} from 'react-native';
import {useTheme} from '@react-navigation/native';


export default function CoinsItems({item, onPress}) {
    const theme = useTheme();
    const colorText = theme.colors.text;

    return (
        <Pressable 
            onPress={onPress} 
            style={[styles.container, {borderBottomColor: theme.colors.border}]}
        >
            <View style={styles.row}>
                <Text style={[styles.symbolText, {color: colorText }]}>{item.symbol}</Text>
                <Text style={[styles.nameText, {color: colorText}]}>{item.name}</Text>
                <Text style={[styles.priceText, {color: colorText}]}>{`$${item.price_usd}`}</Text>
            </View>

            <View style={styles.row}>
                <Text style={[styles.percentText, {color: colorText }]}>{item.percent_change_1h}</Text>
                <Image
                    source={item.percent_change_1h > 0 ? require('../../assets/arrow_up.png') : require('../../assets/arrow_down.png')}
                    style={styles.imgIcon}
                />
            </View>

        </Pressable>
    )
}

// PLatform para distingir el sistema operativo

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingLeft: Platform.OS === 'ios' ? 0 : 16,
        marginLeft: Platform.OS === 'ios' ? 16 : 0,
    },
    row: {
        flexDirection: 'row',
    },
    symbolText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 12
    },
    nameText: {
        fontSize: 14,
        marginRight: 16, 
    },
    priceText: {
        fontSize: 14,
    },
    percentText: {
        fontSize: 12,
        marginRight: 8
    },
    imgIcon:{
        width:22,
        height:22
    }
})
