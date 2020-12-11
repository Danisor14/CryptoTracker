import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {useTheme} from '@react-navigation/native'

export default function FavoriteEmpty() {
    const theme = useTheme();

    return (
        <View style={[styles.container,{backgroundColor: theme.colors.backgroundContainer}]}>
            <Image
                source={require('../../assets/star-grey.png')}
                style={styles.img}
            />
            <Text style={{color:theme.colors.text}}>you dont have any favorites yet...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        marginBottom: 30,
        width: 250,
        height: 240,
    }
})
