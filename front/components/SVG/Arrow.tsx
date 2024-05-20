import Svg, { SvgProps, Path } from 'react-native-svg';

const Arrow = (props: SvgProps) => (
  <Svg
    width={19}
    height={40}
    viewBox="0 0 810 1440"
    {...props}
    style={{ transform: [{ rotate: '-90deg' }], alignSelf: 'center', marginTop: 15 }}
  >
    <Path d="M343.043 330.656c5.629 16.504 11.152 30.13 14.926 44.23 12.426 46.966 26.644 93.61 35.426 141.313 9.464 51.453-26.926 96.899-79.125 109.559-12.977 3.21-23.641 15.793-36.743 25.105-16.695-2.27-15.277-18.648-18.312-30.988-27.574-111.996-76.852-214.887-135.375-313.11-22.34-37.581-51.856-71.062-79.227-105.472-21.511-27.031-24.652-30.707-4.886-59.715 35.27-51.723 80.636-88.426 146.714-95.992 114.875-13.309 229.063-33.188 345.371-25.941 18.895 1.242 37.665 4.828 67.641 8.765-33.367 39.914-53.922 76.668-102.687 80.008-29.891 2.023-59.645 4.523-100.559 7.512 28.219 22.804 47.906 38.195 66.988 54.18 143.813 120.542 251.696 267.593 292.887 451.538 37.606 167.399 33.227 336.368-53.309 492.59-72.785 131.168-187.64 213.907-325.468 264.883-55.235 20.332-114.352 30.524-172.067 43.668-14.968 3.414-31.175.754-46.902.781-1.031-4.078-2.063-8.16-3.09-12.238 19.059-10.344 37.652-21.762 57.406-30.504 12.368-5.437 26.457-7.07 39.88-9.887 172.374-35.972 275.948-146.496 327.425-309.285 39.344-124.324 31.84-249.851-6.074-373.383-39.887-130.43-109.98-243.445-204.828-341.304-4.2-4.41-8.672-8.57-13.38-12.328-2.214-1.532-5.44-1.762-12.632-3.985Zm0 0" />
  </Svg>
);
export default Arrow;
