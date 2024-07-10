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
const { STORAGELIST, STORAGE, PRODUCTS, DATES, SHOPPING, RESIDENCES, MEMBERS, PROFILE } = PATH;
const { fontDivider, fontDividerGoBack } = SIZES;
const { navContainer, touchableStyle, dividerTextStyle, textContainerStyle } = styles;

interface NavContainerProps {}

const NavContainer: FunctionComponent<NavContainerProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const route = useRoute();

  const storageName = route.name === STORAGE ? STORAGE : 'Rangements';
  const storagePath = route.name === STORAGE ? STORAGE : STORAGELIST;

  const tabOptions: Array<{ name: string; color: string; path: PATH }> = [
    // name is the text display inside the divider
    // color is the color of the divider
    // path is the route for the screen name
    { name: storageName, color: yellow, path: storagePath },
    { name: 'Produits', color: green, path: PRODUCTS },
    { name: 'Dates', color: red, path: DATES },
    { name: 'Courses', color: blue, path: SHOPPING },
    { name: 'Foyers', color: pink, path: RESIDENCES },
    { name: 'Membres', color: purple, path: MEMBERS },
    { name: 'Profil', color: orange, path: PROFILE },
  ];

  return (
    <View style={navContainer}>
      {tabOptions.map((tab, index) => (
        <TouchableDivider
          key={index}
          handleOnPress={() => {
            // Using a switch so TS can infer the type of tab.path which it can't with an if-else statement
            switch (tab.path) {
              case STORAGE:
                // This is to prevent an error when the actual screen is the first one
                if (navigation.canGoBack()) {
                  navigation.goBack();
                }
                break;

              case STORAGELIST:
              case PRODUCTS:
              case DATES:
              case SHOPPING:
              case RESIDENCES:
              case MEMBERS:
              case PROFILE:
                navigation.navigate(tab.path);
                break;

              default:
                console.warn(`Unknown path: ${tab.path}`);
                break;
            }
          }}
          touchableStyle={touchableStyle}
          dividerColor={tab.color}
          dividerText={tab.name}
          dividerTextStyle={{
            ...dividerTextStyle,
            marginTop: tab.name === STORAGE ? 35 : 20,
            fontSize: tab.name === STORAGE ? fontDividerGoBack : fontDivider,
          }}
          textContainerStyle={textContainerStyle}
          dividerType={tab.path === route.name ? 'full' : 'half'}
          svgWidth={tab.path === route.name ? 90 : 70}
        />
      ))}
    </View>
  );
};

export default NavContainer;
