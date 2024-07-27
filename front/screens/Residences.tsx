import { FunctionComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { RouteParams } from 'navigation/types';
import ScreenContainer from 'components/ScreenContainer';

const Residences: FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  return (
    <ScreenContainer title="Mes Foyers" subtitle="Liste de mes foyers">
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Temporary go back button</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

export default Residences;
