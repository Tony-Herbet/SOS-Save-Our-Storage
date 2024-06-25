import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { PATH } from 'constants/Enums';

const { HOME, CONNECTION, INSCRIPTION, STORAGELIST, STORAGE, PRODUCTS, DATES, SHOPPING, RESIDENCES, MEMBERS, PROFILE } =
  PATH;

export type RouteParams = {
  [HOME]: undefined;
  [CONNECTION]: undefined;
  [INSCRIPTION]: undefined;
  [STORAGELIST]: undefined;
  [STORAGE]: { storageName: string };
  [PRODUCTS]: undefined;
  [DATES]: undefined;
  [SHOPPING]: undefined;
  [RESIDENCES]: undefined;
  [MEMBERS]: undefined;
  [PROFILE]: undefined;
};

export interface NavigatorModel {
  navigation: NativeStackNavigationProp<RouteParams>;
}
