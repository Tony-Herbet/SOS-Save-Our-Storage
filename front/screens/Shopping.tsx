import { FunctionComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { RouteParams } from 'navigation/types';
import ScreenContainer from 'components/ScreenContainer';

const Shopping: FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  return (
    <ScreenContainer title="Maison du lac" subtitle="Liste de mes courses">
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Temporary go back button</Text>
        </TouchableOpacity>
        <Text>Courses</Text>
      </View>
    </ScreenContainer>
  );
};

export default Shopping;
