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
    height: '10%', // TODO read TODO for childrenContainerStyle
    marginBottom: 15,
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
    marginTop: 18, // TODO remove? add a props to ScreenContainer for the children container style? Both marginTop and height from titleStyleContainer create a big gap between the title and the content when there is no subtitle. We could even reduce this gap when there is a subtitle.
  },
});
