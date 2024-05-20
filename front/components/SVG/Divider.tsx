import { FunctionComponent } from 'react';
import { Text, View, TextStyle, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { dividerStyle as styles } from 'styles/components/SVG/dividerStyle';
import { PATH } from 'constants/Enums';
import Arrow from 'components/SVG/Arrow';

const { textContainerCommonStyle } = styles;

interface DividerProps {
  dividerColor: string;
  dividerText: string;
  dividerTextStyle: TextStyle;
  textContainerStyle: ViewStyle;
  dividerType: string;
  svgWidth?: number;
}

const Divider: FunctionComponent<DividerProps> = ({
  dividerColor,
  dividerText,
  dividerTextStyle,
  dividerType,
  svgWidth = 120,
}) => {
  const d =
    dividerType === 'full'
      ? 'M4.352 196.254V.84H932.71v195.414h-97.746V391.75c0 53.984-43.766 97.75-97.668 97.75h-537.45c-53.984 0-97.75-43.766-97.75-97.75V196.254H4.353' // Full divider
      : 'M-120 376.254V180.02h1173.513V181.844h-123.56v247.12c0 68.24-55.323 123.56-123.456 123.56H127.922c-68.238 0-123.559-55.32-123.559-123.56V181.845h-123.562'; // Half divider

  return (
    <Svg width={svgWidth} height={100} viewBox="0 0 936.75 489.75">
      {dividerType === 'full' && <Path fill={dividerColor} d={d} />}
      {dividerType === 'half' && <Path fill={dividerColor} d={d} />}
      <View style={textContainerCommonStyle}>
        {dividerText === PATH.GOBACK ? (
          <View style={dividerTextStyle}>
            <Arrow />
          </View>
        ) : (
          <Text style={dividerTextStyle}>{dividerText}</Text>
        )}
      </View>
    </Svg>
  );
};

export default Divider;
