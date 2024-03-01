import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants/Fonts';
import { SIZES } from '../../constants/Sizes';

const { RobotoBold } = FONTS;
const { fontTitle, fontSubtitle } = SIZES;

export const screenContainerStyle = StyleSheet.create({
  bgImage: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingLeft: 55,
    paddingRight: 70,
    justifyContent: 'space-between',
  },
  styleContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  styleTitle: {
    fontFamily: RobotoBold,
    fontSize: fontTitle,
    marginBottom: 10,
  },
  styleSubtitle: {
    fontSize: fontSubtitle,
  },
  chlidrenContainerStyle: {
    marginTop: 18,
  },
});
