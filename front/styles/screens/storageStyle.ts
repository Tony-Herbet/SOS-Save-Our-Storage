import { StyleSheet } from 'react-native';

import { FONTS } from '../../constants/Fonts';
import { SIZES } from 'constants/Sizes';

const { fontText, lineHeightText, fontDivider } = SIZES;
const { RalewayBold } = FONTS;

export const storageStyle = StyleSheet.create({
  viewContainer: {
    height: '90%',
    position: 'relative',
  },
  textStorageStyle: {
    fontSize: fontText,
    lineHeight: lineHeightText,
  },
  touchableContainer: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    bottom: 3,
    left: 0,
  },
  dividerTextStyle: {
    width: '70%',
    height: 'auto',
    textAlign: 'center',
    fontSize: fontDivider,
    fontFamily: RalewayBold,
    marginTop: 5,
  },
  textContainerStyle: {
    width: '100%',
    height: '100%',
  },
});
