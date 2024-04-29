import { FunctionComponent } from 'react';
import { TouchableOpacity, TextStyle, ViewStyle } from 'react-native';

import Divider from 'components/SVG/Divider';

interface TouchableDividerProps {
  handleOnPress: () => void;
  touchableStyle: TextStyle;
  dividerColor: string;
  dividerText: string;
  dividerTextStyle: TextStyle;
  textContainerStyle: ViewStyle;
}

const TouchableDivider: FunctionComponent<TouchableDividerProps> = ({
  handleOnPress,
  touchableStyle,
  dividerColor,
  dividerText,
  dividerTextStyle,
  textContainerStyle,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={touchableStyle} onPress={handleOnPress}>
      <Divider
        dividerColor={dividerColor}
        dividerText={dividerText}
        dividerTextStyle={dividerTextStyle}
        textContainerStyle={textContainerStyle}
      />
    </TouchableOpacity>
  );
};

export default TouchableDivider;
