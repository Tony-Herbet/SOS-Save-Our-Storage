import { FunctionComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteParams } from 'navigation/types';
import { PATH } from 'constants/Enums';
import Home from 'screens/Home';
import Connection from 'screens/Connection';
import Inscription from 'screens/Inscription';
import StorageList from 'screens/StorageList';
import Storage from 'screens/Storage';

const { CONNECTION, INSCRIPTION, STORAGELIST, STORAGE } = PATH;

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
        <Stack.Screen name={CONNECTION} component={Connection} />
        <Stack.Screen name={INSCRIPTION} component={Inscription} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name={STORAGELIST} component={StorageList} />
        <Stack.Screen name={STORAGE} component={Storage} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
