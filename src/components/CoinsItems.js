import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CoinsItems({item}) {
    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
