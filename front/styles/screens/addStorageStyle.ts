import { StyleSheet } from 'react-native';

import { SIZES } from 'constants/Sizes';

const { fontText, lineHeightText } = SIZES;

export const addStorageStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    fontSize: fontText,
    lineHeight: lineHeightText,
  },
});
