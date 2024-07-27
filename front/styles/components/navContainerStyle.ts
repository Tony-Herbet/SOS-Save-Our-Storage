import { StyleSheet } from 'react-native';

import { FONTS } from 'constants/Fonts';
import { screenHeight, screenWidth, rightColumnSize, paddingRightSize, MediaQueries } from 'constants/Layouts';

const { RalewayBold } = FONTS;

const getRightValue = () => {
  if (MediaQueries.isVeryBigWidth) return -1; // iPhone 12,13,14,15 Pro Max
  if (MediaQueries.isBigWidth) return -3; // iPhone 11,Xr, Nexus 5X
  if (MediaQueries.isMediumWidth) return -6; // iPhone 12,13,14,15, iPhone 12,13,15 Pro, Pixel 3,4,5

  return -7.5; // iPhone 5,8,X,SE,12 mini, iPhone 11 Pro
};

export const navContainerStyle = StyleSheet.create({
  navContainer: {
    width: rightColumnSize,
    height: screenHeight * 0.9,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: -10,
    right: -paddingRightSize,
    paddingBottom: 30,
  },
  touchableStyle: {
    height: rightColumnSize,
    transform: [{ rotate: '-90deg' }],
    justifyContent: 'flex-end',
    marginBottom: 35,
    right: getRightValue(),
  },
  dividerTextStyle: {
    textAlign: 'center',
    transform: [{ rotate: '180deg' }],
    fontFamily: RalewayBold,
  },
  textContainerStyle: {},
});
