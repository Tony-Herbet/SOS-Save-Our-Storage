import { StyleSheet } from 'react-native';

import { FONTS } from '../../constants/Fonts';
import { COLORS } from '../../constants/Colors';
import { SIZES } from '../../constants/Sizes';

const { RobotoBold, RalewayMedium, RalewayBold } = FONTS;
const { yellow, white } = COLORS;
const { fontTitleHome, fontTitle, fontButton, borderRadius } = SIZES;

export const homeFormStyle = StyleSheet.create({
  bgImage: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
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
  form: {
    alignItems: 'center',
    marginVertical: 70,
  },
  input: {
    width: 290,
    height: 40,
    backgroundColor: white,
    borderRadius: borderRadius,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: 200,
    backgroundColor: yellow,
    paddingVertical: 12,
    borderRadius: borderRadius,
  },
  gobackButton: {
    marginTop: 20,
  },
  textBtn: {
    fontSize: fontButton,
    fontFamily: RalewayBold,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  textGobackBtn: {
    fontSize: fontButton,
    fontFamily: RalewayMedium,
    textAlign: 'center',
    color: yellow,
    alignItems: 'baseline',
  },
});
