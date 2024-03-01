import { StyleSheet } from 'react-native';

import { SIZES } from '../../constants/Sizes';

const { fontText, lineHeightText } = SIZES;

export const storageStyle = StyleSheet.create({
  container: {},
  text: {
    fontSize: fontText,
    lineHeight: lineHeightText,
  },
});
