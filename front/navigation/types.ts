import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

export type RouteParams = {
  Home: undefined;
  Connection: undefined;
  Inscription: undefined;
};

export interface NavigatorModel {
  navigation: NativeStackNavigationProp<RouteParams>;
}
