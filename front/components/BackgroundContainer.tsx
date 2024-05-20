import { FunctionComponent, ReactNode } from 'react';
import { View, ImageBackground, ViewStyle, ImageStyle } from 'react-native';

import { backgroundContainerStyle as styles } from 'styles/components/backgroundContainerStyle';
import { PATH } from 'constants/Enums';

interface BackgroundContainerProps {
  children: ReactNode;
  backgroundContainerViewStyles?: ViewStyle;
  backgroundContainerImageStyles?: ImageStyle;
  location?: string;
}

const { HOME, CONNECTION, INSCRIPTION } = PATH;
const { container, image, viewContainer } = styles;

const BackgroundContainer: FunctionComponent<BackgroundContainerProps> = ({
  children,
  backgroundContainerViewStyles,
  backgroundContainerImageStyles,
  location,
}) => (
  <View style={{ ...container, ...backgroundContainerViewStyles }}>
    <ImageBackground
      style={{ ...image, ...backgroundContainerImageStyles }}
      source={
        location === HOME
          ? require('../assets/images/background-home-bags.webp')
          : location === CONNECTION
            ? require('../assets/images/background-home.webp')
            : location === INSCRIPTION
              ? require('../assets/images/background-home.webp')
              : require('../assets/images/background.webp')
      }
      resizeMode="stretch" // to work, resizeMode should be here and not in StyleSheet
    >
      <View style={viewContainer}>{children}</View>
    </ImageBackground>
  </View>
);

export default BackgroundContainer;
