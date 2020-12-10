import {DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationLightTheme} from '@react-navigation/native';
import colors from '../res/colors';

export const DarkTheme = {
    ...NavigationDarkTheme,
    colors : {
      ...NavigationDarkTheme.colors,
      text: "#ffffff",
      icon: "rgba(255, 255, 255, 0.68)",
      backgroundHeader: colors.blackPearl,
      backgroundContainer: colors.charade,
      border: colors.zircon,
      placeHolderSearch: '#d3d6d0',
    }
  }
  
export  const LightTheme = {
    ...NavigationLightTheme,
    colors : {
      ...NavigationLightTheme.colors,
      text: "#333333",
      icon: "rgba(28, 28, 30, 0.68)",
      backgroundHeader: "#ffffff",
      backgroundContainer: "#ffffff",
      border: colors.zircon,
      placeHolderSearch: 'rgb(51, 51, 51)',
    }
  }
  