import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import FavoriteScreen from './FavoriteScreen'
import {useTheme} from '@react-navigation/native'

const Stack = createStackNavigator();

export default function FavoriteStack() {
    const theme = useTheme();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: theme.colors.backgroundHeader,
                    shadowOpacity:theme.colors.backgroundHeader,
                }   
            }}
        >
            <Stack.Screen
                name='Favorite'
                component={FavoriteScreen}
            />
        </Stack.Navigator>
    )
}
