import { StyleSheet } from 'react-native';

import { FONTS } from '../../constants/Fonts';
import { SIZES } from 'constants/Sizes';

const { fontText, lineHeightText, fontDivider } = SIZES;
const { RobotoBold, RalewayMedium, RalewayBold } = FONTS;

export const storageListStyle = StyleSheet.create({
  viewContainer: {
    height: '90%',
    position: 'relative',
  },
  textStorageStyle: {
    fontSize: fontText,
    lineHeight: lineHeightText,
  },
  touchableStyle: {
    position: 'absolute',
    bottom: 3,
    left: '25%',
  },
  dividerTextStyle: {
    width: '70%',
    height: 'auto',
    textAlign: 'center',
    fontSize: fontDivider,
    fontFamily: RalewayBold,
    marginTop: 15,
  },
  textContainerStyle: {
    width: '100%',
    height: '100%',
  },
});
