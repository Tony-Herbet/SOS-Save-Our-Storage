import { FunctionComponent } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { RouteParams } from './navigation/types';
import { RootNavigator } from './navigation/RootNavigator';

const App: FunctionComponent = () => {
  const initialRoute: keyof RouteParams = 'Home';

  return (
    <NavigationContainer>
      <RootNavigator initialRoute={initialRoute} />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
