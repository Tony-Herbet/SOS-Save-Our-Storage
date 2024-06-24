import { Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const rightColumnSize = screenWidth * 0.1249;
export const paddingRightSize = 70;

export const MediaQueries = {
  isXSmallWidth: screenWidth >= 320, // iPhone 5 / Galaxy S5,S8
  isSmallWidth: screenWidth >= 375, // iPhone SE,6,7,8,X,12 Pros / Pixel 2
  isMediumWidth: screenWidth >= 390, // iPhone 6,7,8 Plus, 12,14,15 Pro / Galaxy A51/71, S20 / Pixel 3,4,5
  isBigWidth: screenWidth >= 411, // iPhone 13,13 Pro, Nexus 5X
  isVeryBigWidth: screenWidth >= 428, // iPhone 13 Pro Max

  isXSmallHeight: screenHeight >= 568, // iPhone 5 / Galaxy S5,S8
  isSmallHeight: screenHeight >= 667, // iPhone 6,7,8,X,12 Pros / Pixel 2
  isMediumHeight: screenHeight >= 736, // iPhone 6,7,8 Plus / Galaxy A51/71, S20
};
