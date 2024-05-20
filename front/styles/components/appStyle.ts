import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'react-native';

export const appStyle = StyleSheet.create({
  barStyle: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: (StatusBar.currentHeight ??= Constants.statusBarHeight),
  },
});
