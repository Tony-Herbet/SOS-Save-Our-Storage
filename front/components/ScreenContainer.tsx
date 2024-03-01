import { FunctionComponent, ReactNode } from 'react';
import { View, Text } from 'react-native';
import BackgroundContainer from 'components/BackgroundContainer';
import { screenContainerStyle as styles } from 'styles/components/screenContainerStyle';

const { bgImage, styleContainer, styleTitle, styleSubtitle, chlidrenContainerStyle } = styles;

interface ScreenContainerProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const ScreenContainer: FunctionComponent<ScreenContainerProps> = ({ children, title, subtitle }) => {
  return (
    <BackgroundContainer imageStyles={bgImage}>
      <View style={styleContainer}>
        <Text style={styleTitle}>{title}</Text>
        <Text style={styleSubtitle}>{subtitle}</Text>
      </View>
      <View style={chlidrenContainerStyle}>{children}</View>
    </BackgroundContainer>
  );
};

export default ScreenContainer;
