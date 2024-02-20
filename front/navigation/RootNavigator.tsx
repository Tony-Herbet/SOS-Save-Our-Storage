import { FunctionComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteParams } from './types';

import Home from '../screens/Home';

interface RootNavigator {
  initialRoute: keyof RouteParams;
}

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator: FunctionComponent<RootNavigator> = ({ initialRoute }) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={initialRoute} component={Home} />
    </Stack.Navigator>
  );
};
