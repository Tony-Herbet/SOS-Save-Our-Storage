import { StyleSheet } from 'react-native';

import { FONTS } from '../../constants/Fonts';
import { SIZES } from 'constants/Sizes';

const { RalewayBold } = FONTS;

export const navContainerStyle = StyleSheet.create({
  touchableStyle: {
    transform: [{ rotate: '-90deg' }],
    alignItems: 'center',
  },
  dividerTextStyle: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    transform: [{ rotate: '180deg' }],
    fontFamily: RalewayBold,
  },
  textContainerStyle: {
    width: '100%',
    height: '100%',
  },
});
