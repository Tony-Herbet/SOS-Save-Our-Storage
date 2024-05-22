import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'react-native';
import { COLORS } from 'constants/Colors';

export const appStyle = StyleSheet.create({
  barStyle: {
    flex: 1,
    backgroundColor: COLORS.veryDarkGreen,
    paddingTop: (StatusBar.currentHeight ??= Constants.statusBarHeight),
  },
});
