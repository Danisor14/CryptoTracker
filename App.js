import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DarkTheme, LightTheme} from './src/libs/Themes';
import ThemeContext from './src/context/ThemeContext';
import TabNavigation from './src/components/TabNavigation';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = isDarkTheme ? DarkTheme : LightTheme;
  const themeValues = {
    isDark : isDarkTheme,
    setIsDark : setIsDarkTheme
  }

  return (
    <ThemeContext.Provider value={themeValues}>
      <NavigationContainer theme={theme}>
        <TabNavigation />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
