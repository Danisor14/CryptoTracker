import {DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationLightTheme} from '@react-navigation/native';

export const DarkTheme = {
    ...NavigationDarkTheme,
    colors : {
      ...NavigationDarkTheme.colors,
      text: "#ffffff",
      icon: "rgba(255, 255, 255, 0.68)",
    }
  }
  
export  const LightTheme = {
    ...NavigationLightTheme,
    colors : {
      ...NavigationLightTheme.colors,
      text: "#333333",
      icon: "rgba(28, 28, 30, 0.68)",
    }
  }
  