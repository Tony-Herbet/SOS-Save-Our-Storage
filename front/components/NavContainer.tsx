import { FunctionComponent } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { navContainerStyle as styles } from 'styles/components/navContainerStyle';
import TouchableDivider from './TouchableDivider';
import { RouteParams } from 'navigation/types';
import { COLORS } from 'constants/Colors';
import { PATH } from 'constants/Enums';
import { SIZES } from 'constants/Sizes';

const { yellow, green, red, blue, pink, purple, orange } = COLORS;
const { GOBACK, STORAGE } = PATH;
const { fontDivider, fontDividerGoBack } = SIZES;
const { touchableStyle, dividerTextStyle, textContainerStyle } = styles;

interface NavContainerProps {}

const NavContainer: FunctionComponent<NavContainerProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const route = useRoute();

  const storageName = route.name === STORAGE ? GOBACK : 'Rangements';

  const tabOptions: Array<{ name: string; color: string }> = [
    { name: storageName, color: yellow },
    { name: 'Produits', color: green },
    { name: 'Dates', color: red },
    { name: 'Courses', color: blue },
    { name: 'Foyers', color: pink },
    { name: 'Membres', color: purple },
    { name: 'Profil', color: orange },
  ];

  return (
    <View
      style={{
        height: 700,
        position: 'absolute',
        right: -82,
        top: 0,
      }}
    >
      {tabOptions.map((tab, index) => (
        <TouchableDivider
          key={index}
          handleOnPress={() => {
            // This is to prevent an error when the actual screen is the first one
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}
          touchableStyle={touchableStyle}
          dividerColor={tab.color}
          dividerText={tab.name}
          dividerTextStyle={{
            ...dividerTextStyle,
            marginTop: tab.name === GOBACK ? 35 : 25,
            fontSize: tab.name === GOBACK ? fontDividerGoBack : fontDivider,
          }}
          textContainerStyle={textContainerStyle}
          dividerType={index === 0 ? 'full' : 'half'}
          svgWidth={index === 0 ? 110 : 90}
        />
      ))}
    </View>
  );
};

export default NavContainer;
