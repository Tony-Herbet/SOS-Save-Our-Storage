import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { PATH } from 'constants/Enums';

const { HOME, CONNECTION, INSCRIPTION, STORAGELIST, STORAGE } = PATH;

export type RouteParams = {
  [HOME]: undefined;
  [CONNECTION]: undefined;
  [INSCRIPTION]: undefined;
  [STORAGELIST]: undefined;
  [STORAGE]: { storageName: string };
};

export interface NavigatorModel {
  navigation: NativeStackNavigationProp<RouteParams>;
}
