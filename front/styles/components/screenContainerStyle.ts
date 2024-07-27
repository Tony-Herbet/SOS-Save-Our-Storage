import { StyleSheet } from 'react-native';
import { FONTS } from 'constants/Fonts';
import { SIZES } from 'constants/Sizes';
import { paddingRightSize } from 'constants/Layouts';

const { RobotoBold } = FONTS;
const { fontTitle, fontSubtitle } = SIZES;

export const screenContainerStyle = StyleSheet.create({
  backgroundContainerImage: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 55,
    paddingRight: paddingRightSize,
    justifyContent: 'space-between',
    position: 'relative',
  },
  titleStyleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleTitle: {
    fontFamily: RobotoBold,
    fontSize: fontTitle,
    marginBottom: 10,
    height: 30,
  },
  styleSubtitle: {
    fontSize: fontSubtitle,
    textAlign: 'center',
    height: 25,
  },
  childrenContainerStyle: {
    marginTop: 15,
    height: '90%',
  },
});
