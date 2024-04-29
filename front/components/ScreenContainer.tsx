import { FunctionComponent, ReactNode } from 'react';
import { View, Text } from 'react-native';
import BackgroundContainer from 'components/BackgroundContainer';
import { screenContainerStyle as styles } from 'styles/components/screenContainerStyle';

const { backgroundContainerImage, titleStyleContainer, styleTitle, styleSubtitle, childrenContainerStyle } = styles;

interface ScreenContainerProps {
  children: ReactNode[] | ReactNode; // children[0] should be the "view" with the main content of the screen & children[1] should be the divider(s) at the bottom
  title: string;
  subtitle?: string;
}

const ScreenContainer: FunctionComponent<ScreenContainerProps> = ({ children, title, subtitle }) => {
  // Destructure children for easier access
  const [mainContent, divider] = Array.isArray(children) ? children : [children, null];

  return (
    <BackgroundContainer backgroundContainerImageStyles={backgroundContainerImage}>
      <View style={titleStyleContainer}>
        <Text style={styleTitle}>{title}</Text>
        <Text style={styleSubtitle}>{subtitle}</Text>
      </View>
      <View style={childrenContainerStyle}>{mainContent}</View>
      {divider}
    </BackgroundContainer>
  );
};

export default ScreenContainer;
