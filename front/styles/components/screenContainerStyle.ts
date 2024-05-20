import { StyleSheet } from 'react-native';
import { FONTS } from '../../constants/Fonts';
import { SIZES } from '../../constants/Sizes';

const { RobotoBold } = FONTS;
const { fontTitle, fontSubtitle } = SIZES;

export const screenContainerStyle = StyleSheet.create({
  backgroundContainerImage: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 55,
    paddingRight: 70,
    justifyContent: 'space-between',
    position: 'relative',
  },
  titleStyleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    marginBottom: 15
  },
  styleTitle: {
    fontFamily: RobotoBold,
    fontSize: fontTitle,
    marginBottom: 10,
  },
  styleSubtitle: {
    fontSize: fontSubtitle,
  },
  childrenContainerStyle: {
    marginTop: 18,
  },
});
