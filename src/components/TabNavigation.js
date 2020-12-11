import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CoinsStack from './coin/CoinsStack'
import FavoriteStack from './favorite/FavoriteStack'
import {useTheme} from '@react-navigation/native'
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    const theme = useTheme();

    return (
        <Tab.Navigator
            tabBarOptions={{
                inactiveTintColor: theme.colors.icon,
                activeTintColor: theme.colors.activeIcon,
                style: {backgroundColor: theme.colors.backgroundHeader},
            }}

            screenOptions={({route}) => ({
                tabBarIcon: ({color, focused}) =>
                    makeTabIcon(route, color, focused)
            })}
        >

            <Tab.Screen
                name='Coins'
                component={CoinsStack}
            />

            <Tab.Screen
                name='Favorites'
                component={FavoriteStack}
            />

        </Tab.Navigator>
    )
}

function makeTabIcon(route, color, focused){
    let iconName;

    switch(route.name){
        case 'Coins':
            iconName = focused ? 'bank' : 'bank-outline';
            break;
        case 'Favorites':
            iconName = focused ? 'star' : 'star-outline';
            break;
    }

    return (
        <Icon 
            type='material-community' 
            name={iconName}
            size={22}
            color={color}
        />
    )

}