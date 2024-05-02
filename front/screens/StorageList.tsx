import { FunctionComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { RouteParams } from 'navigation/types';
import ScreenContainer from 'components/ScreenContainer';
import { storageListStyle as styles } from 'styles/screens/storageListStyle';
import { COLORS } from 'constants/Colors';
import TouchableDivider from 'components/TouchableDivider';

const { textStorageStyle, viewContainer, touchableStyle, dividerTextStyle, textContainerStyle } = styles;

const StorageList: FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const handleAddStorage = () => {
    navigation.navigate('AddStorage');
  };

  return (
    <ScreenContainer title="Maison du Lac">
      <View style={viewContainer}>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => {}}>
          <Text style={textStorageStyle}>&bull; Frigo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => {}}>
          <Text style={textStorageStyle}>&bull; Congel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => {}}>
          <Text style={textStorageStyle}>&bull; Placard</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text style={textStorageStyle}>&bull; Armoire</Text>
        </TouchableOpacity>
      </View>

      <TouchableDivider
        dividerColor={COLORS.yellow}
        dividerText="Ajouter un rangement"
        dividerTextStyle={dividerTextStyle}
        handleOnPress={handleAddStorage}
        touchableStyle={touchableStyle}
        textContainerStyle={textContainerStyle}
        dividerType="full"
      />
    </ScreenContainer>
  );
};

export default StorageList;
