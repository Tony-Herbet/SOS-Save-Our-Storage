import Svg, { SvgProps, Defs, ClipPath, Path, G } from 'react-native-svg';

const Divider = (props: SvgProps) => (
  <Svg viewBox="0 0 375 187.5" {...props}>
    <Defs>
      <ClipPath id="a">
        <Path d="M2 32.145h371V75.59H2Zm0 0" />
      </ClipPath>
      <ClipPath id="b">
        <Path d="M2 72.96h371v82.435H2Zm0 0" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Path
        fill="#fec802"
        d="M2.2 76.934V-1.074h370.593v78.008H333.77v78.043c0 21.546-17.47 39.02-38.985 39.02H80.238c-21.55 0-39.02-17.474-39.02-39.02V76.934H2.2"
      />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#fec802"
        d="M2.2 38.336v-78.008h370.593v78.008H333.77v78.039c0 21.55-17.47 39.02-38.985 39.02H80.238c-21.55 0-39.02-17.47-39.02-39.02v-78.04H2.2"
      />
    </G>
  </Svg>
);
export default Divider;
