import { StyleSheet } from 'react-native';

import { FONTS } from 'constants/Fonts';
import { screenHeight, screenWidth, rightColumnSize, paddingRightSize, MediaQueries } from 'constants/Layouts';

const { RalewayBold } = FONTS;

const getRightValue = () => {
  console.log(screenWidth);
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
    // borderWidth: 1,
    // borderColor: 'red',
  },
  touchableStyle: {
    width: rightColumnSize,
    height: rightColumnSize,
    transform: [{ rotate: '-90deg' }],
    // alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 30,
    // borderWidth: 1,
    // borderColor: 'blue',
    right: getRightValue(),
  },
  dividerTextStyle: {
    // width: '100%',
    // height: 'auto',
    textAlign: 'center',
    transform: [{ rotate: '180deg' }],
    fontFamily: RalewayBold,
  },
  textContainerStyle: {
    // width: '100%',
    // height: '100%',
  },
});
