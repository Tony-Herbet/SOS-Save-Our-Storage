import { FunctionComponent, ReactNode } from 'react';
import { View, ImageBackground, ViewStyle, ImageStyle } from 'react-native';

import { backgroundContainerStyle as styles } from 'styles/components/backgroundContainerStyle';
import { PATH } from 'constants/Enums';

interface BackgroundContainerProps {
  children: ReactNode;
  viewStyles?: ViewStyle;
  imageStyles?: ImageStyle;
  location?: string;
}

const { HOME, CONNEXION } = PATH;

const BackgroundContainer: FunctionComponent<BackgroundContainerProps> = ({
  children,
  viewStyles,
  imageStyles,
  location,
}) => (
  <View style={{ ...styles.container, ...viewStyles }}>
    <ImageBackground
      style={{ ...styles.image, ...imageStyles }}
      source={
        location === HOME
          ? require('../assets/images/background-home-bags.webp')
          : location === CONNEXION
            ? require('../assets/images/background-home.webp')
            : require('../assets/images/background.webp')
      }
      resizeMode="stretch" // to work, resizeMode should be here and not in StyleSheet
    >
      <View style={styles.viewContainer}>{children}</View>
    </ImageBackground>
  </View>
);

export default BackgroundContainer;
