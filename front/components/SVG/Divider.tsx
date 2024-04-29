import { FunctionComponent } from 'react';
import { Text, View, TextStyle, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { dividerStyle as styles } from 'styles/components/SVG/dividerStyle';

const { textContainerCommonStyle, textCommonStyle } = styles;

interface DividerProps {
  dividerColor: string;
  dividerText: string;
  dividerTextStyle: TextStyle;
  textContainerStyle: ViewStyle;
}

const Divider: FunctionComponent<DividerProps> = ({
  dividerColor,
  dividerText,
  dividerTextStyle,
  textContainerStyle,
}) => (
  <Svg viewBox="0 0 936.75 489.75">
    <Path
      fill={dividerColor}
      d="M4.352 196.254V.84H932.71v195.414h-97.746V391.75c0 53.984-43.766 97.75-97.668 97.75h-537.45c-53.984 0-97.75-43.766-97.75-97.75V196.254H4.353"
    />
    <View style={{ ...textContainerCommonStyle, ...textContainerStyle }}>
      <Text style={{ ...textCommonStyle, ...dividerTextStyle }}>{dividerText}</Text>
    </View>
  </Svg>
);

export default Divider;
