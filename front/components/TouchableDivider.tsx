import { FunctionComponent } from 'react';
import { TouchableOpacity, TextStyle, ViewStyle, StyleProp } from 'react-native';

import Divider from 'components/SVG/Divider';

interface TouchableDividerProps {
  handleOnPress: () => void;
  touchableStyle: StyleProp<ViewStyle>;
  dividerColor: string;
  dividerText: string;
  dividerTextStyle: TextStyle;
  textContainerStyle: ViewStyle;
  dividerType: string;
  svgWidth?: number;
}

const TouchableDivider: FunctionComponent<TouchableDividerProps> = ({
  handleOnPress,
  touchableStyle,
  dividerColor,
  dividerText,
  dividerTextStyle,
  textContainerStyle,
  dividerType,
  svgWidth,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={touchableStyle} onPress={handleOnPress}>
      <Divider
        dividerColor={dividerColor}
        dividerText={dividerText}
        dividerTextStyle={dividerTextStyle}
        textContainerStyle={textContainerStyle}
        dividerType={dividerType}
        svgWidth={svgWidth}
      />
    </TouchableOpacity>
  );
};

export default TouchableDivider;
