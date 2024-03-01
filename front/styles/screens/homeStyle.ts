import { StyleSheet } from 'react-native';

import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../constants/Colors';
import { SIZES } from '../../constants/Sizes';

const { RobotoBold, RalewayMedium, RalewayBold } = FONTS;
const { yellow, white } = COLORS;
const { fontTitleHome, fontTitle, fontButton, borderRadius } = SIZES;

export const homeStyle = StyleSheet.create({
  bgImage: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
  },
  title: {
    fontFamily: RobotoBold,
    fontSize: fontTitleHome,
    color: white,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: RalewayMedium,
    fontSize: fontTitle,
    color: white,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 150,
    alignItems: 'center',
  },
  button: {
    width: 200,
    backgroundColor: yellow,
    paddingVertical: 12,
    marginVertical: 12,
    borderRadius: borderRadius,
  },
  textBtn: {
    fontSize: fontButton,
    fontFamily: RalewayBold,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
