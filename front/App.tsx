import { FunctionComponent, useCallback } from 'react';
import { View } from 'react-native';
import { StatusBar as StatusBarExpo } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_700Bold,
} from '@expo-google-fonts/dev';

import { RouteParams } from 'navigation/types';
import { RootNavigator } from 'navigation/RootNavigator';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { PATH } from 'constants/Enums';
import { appStyle as styles } from 'styles/components/appStyle';

SplashScreen.preventAutoHideAsync();

const App: FunctionComponent = () => {
  const initialRoute: keyof RouteParams = PATH.HOME;

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // TODO use a Loader instead?
    return null;
  }

  onLayoutRootView();

  return (
    <Provider store={store}>
      <View style={styles.barStyle}>
        <NavigationContainer>
          <RootNavigator initialRoute={initialRoute} />
          <StatusBarExpo style="light" />
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;
