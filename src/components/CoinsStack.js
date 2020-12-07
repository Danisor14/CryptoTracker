import React, {useContext} from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import CoinsScreen from './CoinsScreen';
import CoinDetailsScreen from './CoinDetailsScreen';
import ThemeContext from '../context/ThemeContext';
import {useTheme} from '@react-navigation/native'

const Stack = createStackNavigator();

export default function CoinsStack(){
    const themeValues = useContext(ThemeContext)
    const theme = useTheme();

    return(
        <Stack.Navigator>
            
            <Stack.Screen
                name="Coins"
                component={CoinsScreen}
                options={{
                    headerRight: () => (
                        <Icon 
                            name='theme-light-dark' 
                            type='material-community' 
                            size={28}
                            onPress={() => themeValues.setIsDark(!themeValues.isDark)}
                            containerStyle={{marginRight: 18}}
                            color={theme.colors.icon}
                        />
                    )
                }}
            />

            <Stack.Screen
                name="CoinDetails"
                component={CoinDetailsScreen}
            />

        </Stack.Navigator>
    );
}