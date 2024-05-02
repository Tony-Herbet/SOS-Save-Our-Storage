import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

export type RouteParams = {
  HOME: undefined;
  CONNECTION: undefined;
  INSCRIPTION: undefined;
  STORAGELIST: undefined;
  ADDSTORAGE: undefined;
};

export interface NavigatorModel {
  navigation: NativeStackNavigationProp<RouteParams>;
}
