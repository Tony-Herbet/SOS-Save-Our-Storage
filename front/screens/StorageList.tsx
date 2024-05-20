import { FunctionComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { RouteParams } from 'navigation/types';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setAddStorageName, setIsModalOpen, resetAddStorage } from 'redux/reducers/storage';
import ScreenContainer from 'components/ScreenContainer';
import { storageListStyle as styles } from 'styles/screens/storageListStyle';

import { COLORS } from 'constants/Colors';
import { PATH, TITLE } from 'constants/Enums';
import TouchableDivider from 'components/TouchableDivider';
import ModalComponent from 'components/Modals/ModalComponent';

const { textStorageStyle, viewContainer, touchableStyle, dividerTextStyle, textContainerStyle } = styles;
const { STORAGE } = PATH;
const { ADD_STORAGE } = TITLE;

//* TEST storage dynamisation
const Storages = ['Frigo', 'Congèle', 'Placard', 'Armoire'];

const StorageList: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
  const { name, isModalOpen } = useAppSelector((state) => state.storage.addStorage);

  return (
    <ScreenContainer title="Maison du Lac">
      <View style={viewContainer}>
        {Storages.map((name, index) => (
          <TouchableOpacity
            key={index}
            style={{ marginBottom: 10 }}
            onPress={() => {
              // TODO replace name by id
              navigation.navigate(STORAGE, { storageName: name });
            }}
          >
            <Text style={textStorageStyle}>&bull; {name}</Text>
          </TouchableOpacity>
        ))}

        <ModalComponent
          title={ADD_STORAGE}
          visible={isModalOpen}
          handleCancel={() => dispatch(resetAddStorage())}
          handleConfirm={() => dispatch(() => dispatch(resetAddStorage()))}
          setNameValue={(name) => dispatch(setAddStorageName(name))}
          nameValue={name}
        />
      </View>

      <TouchableDivider
        dividerColor={COLORS.yellow}
        dividerText="Ajouter un rangement"
        dividerTextStyle={dividerTextStyle}
        handleOnPress={() => dispatch(setIsModalOpen(true))}
        touchableStyle={touchableStyle}
        textContainerStyle={textContainerStyle}
        dividerType="full"
      />
    </ScreenContainer>
  );
};

export default StorageList;
