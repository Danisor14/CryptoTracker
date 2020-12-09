import React, {useContext} from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import CoinsScreen from './CoinsScreen';
import CoinDetailsScreen from '../coinDetail/CoinDetailsScreen';
import ThemeContext from '../../context/ThemeContext';
import {useTheme} from '@react-navigation/native'

const Stack = createStackNavigator();

export default function CoinsStack(){
    const themeValues = useContext(ThemeContext)
    const theme = useTheme();

    const iconTheme = () =>{
        return (
            <Icon 
                name='theme-light-dark' 
                type='material-community' 
                size={28}
                onPress={() => themeValues.setIsDark(!themeValues.isDark)}
                containerStyle={{marginRight: 18}}
                color={theme.colors.icon}
            />
        )
    }

    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: theme.colors.backgroundHeader,
                    shadowOpacity:theme.colors.backgroundHeader,
                }
            }}
        > 
            
            <Stack.Screen
                name="Coins"
                component={CoinsScreen}
                options={{headerRight: () => iconTheme()}}
            />

            <Stack.Screen
                name="CoinDetails"
                component={CoinDetailsScreen}
            />

        </Stack.Navigator>
    );
}