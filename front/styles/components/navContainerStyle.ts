import { StyleSheet } from 'react-native';

import { FONTS } from '../../constants/Fonts';

const { RalewayBold } = FONTS;

export const navContainerStyle = StyleSheet.create({
  navContainer: {
    height: 700,
    position: 'absolute',
    right: -82,
    top: -10,
  },
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
