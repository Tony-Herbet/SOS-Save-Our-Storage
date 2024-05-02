import { FunctionComponent, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { RouteParams } from 'navigation/types';
import { RootNavigator } from 'navigation/RootNavigator';
import { Provider } from 'react-redux';
import store from 'redux/store';

SplashScreen.preventAutoHideAsync();

const App: FunctionComponent = () => {
  const initialRoute: keyof RouteParams = 'HOME';

  // fonts import and declaration
  const [fontsLoaded, fontError] = useFonts({
    'Raleway-Regular': require('assets/fonts/Raleway/Raleway-Regular.ttf'),
    'Raleway-Medium': require('assets/fonts/Raleway/Raleway-Medium.ttf'),
    'Raleway-Bold': require('assets/fonts/Raleway/Raleway-Bold.ttf'),
    'Roboto-Regular': require('assets/fonts/Roboto/Roboto-Regular.ttf'), // only titles
    'Roboto-Medium': require('assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  onLayoutRootView();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator initialRoute={initialRoute} />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
