import { FunctionComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteParams } from 'navigation/types';
import { PATH } from 'constants/Enums';
import Home from 'screens/Home';
import Connection from 'screens/Connection';
import Inscription from 'screens/Inscription';
import StorageList from 'screens/StorageList';
import Storage from 'screens/Storage';
import Products from 'screens/Products';
import Dates from 'screens/Dates';
import Shopping from 'screens/Shopping';
import Residences from 'screens/Residences';
import Members from 'screens/Members';
import Profile from 'screens/Profile';

const { CONNECTION, INSCRIPTION, STORAGELIST, STORAGE, PRODUCTS, DATES, SHOPPING, RESIDENCES, MEMBERS, PROFILE } = PATH;

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
        <Stack.Screen name={PRODUCTS} component={Products} />
        <Stack.Screen name={DATES} component={Dates} />
        <Stack.Screen name={SHOPPING} component={Shopping} />
        <Stack.Screen name={RESIDENCES} component={Residences} />
        <Stack.Screen name={MEMBERS} component={Members} />
        <Stack.Screen name={PROFILE} component={Profile} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
