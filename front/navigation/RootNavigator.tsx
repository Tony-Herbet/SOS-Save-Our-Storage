import { FunctionComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteParams } from 'navigation/types';
import Home from 'screens/Home';
import Connection from 'screens/Connection';
import Inscription from 'screens/Inscription';
import StorageList from 'screens/StorageList';
import AddStorage from 'screens/AddStorage';

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
      <Stack.Group>
        <Stack.Screen name={initialRoute} component={Home} />
        <Stack.Screen name="Connection" component={Connection} />
        <Stack.Screen name="Inscription" component={Inscription} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="StorageList" component={StorageList} />
        <Stack.Screen name="AddStorage" component={AddStorage} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
