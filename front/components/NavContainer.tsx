import { FunctionComponent } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import TouchableDivider from './TouchableDivider';
import { RouteParams } from 'navigation/types';

interface NavContainerProps {}

const NavContainer: FunctionComponent<NavContainerProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const route = useRoute();

  const tabOptions: Array<{ name: string; color: string }> = [
    { name: 'Rangements', color: 'red' },
    { name: 'Produits', color: 'blue' },
    { name: 'Dates', color: 'pink' },
    { name: 'Courses', color: 'green' },
    { name: 'Membres', color: 'yellow' },
    { name: 'Foyers', color: 'grey' },
    { name: 'Profil', color: 'white' },
  ];

  return (
    <View
      style={{
        justifyContent: 'space-between',
        height: '85%',
        position: 'absolute',
        right: -100,
        top: 0,
      }}
    >
      {tabOptions.map((tab, index) => (
        <TouchableDivider
          key={index}
          handleOnPress={() => {
            console.log(route.name);
            // This is to prevent an error when the actual screen is the first one
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}
          touchableStyle={{
            // height: 100,
            width: 'auto',
            transform: [{ rotate: '-90deg' }],
          }}
          dividerColor={tab.color}
          dividerText={tab.name}
          dividerTextStyle={{
            width: '100%',
            height: 'auto',
            textAlign: 'center',
            transform: [{ rotate: '180deg' }],
          }}
          textContainerStyle={{
            width: '100%',
            height: '100%',
          }}
          dividerType={index === 3 || index === 5 || index === 2 ? 'full' : 'half'}
          svgWidth={index === 3 || index === 5 || index === 2 ? 75 : 150}
        />
      ))}
    </View>
  );
};

export default NavContainer;
