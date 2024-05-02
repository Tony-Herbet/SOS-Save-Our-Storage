import { FunctionComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { RouteParams } from 'navigation/types';
import ScreenContainer from 'components/ScreenContainer';
import { addStorageStyle as styles } from 'styles/screens/addStorageStyle';
import { PATH } from 'constants/Enums';
const { text, container } = styles;

const AddStorage: FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const handleBackToStorageList = () => {
    navigation.navigate(PATH.STORAGELIST);
  };

  return (
    <ScreenContainer title="Add storage">
      <View style={container}>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={handleBackToStorageList}>
          <Text style={text}>&bull; temporary go back for testing</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

export default AddStorage;
