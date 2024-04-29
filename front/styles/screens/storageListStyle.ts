import { StyleSheet } from 'react-native';

import { SIZES } from 'constants/Sizes';

const { fontText, lineHeightText } = SIZES;

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
    height: 100,
    width: 150,
    position: 'absolute',
    bottom: 6,
    left: '20%',
  },
  dividerTextStyle: {
    width: '70%',
    height: 'auto',
    textAlign: 'center',
  },
  textContainerStyle: {
    width: 150,
    height: 100,
  },
});
