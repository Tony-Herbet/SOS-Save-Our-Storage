import { FunctionComponent } from 'react';
import { View, Modal, Pressable, Text, TextInput } from 'react-native';

import { modalComponentStyle as styles } from 'styles/components/modalComponentStyle';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setProduct } from 'redux/reducers/product';
import { COLORS } from 'constants/Colors';
import { TITLE } from 'constants/Enums';
import DatePicker from './DatePicker';
import Dropdown from './Dropdown';
import { UnknownAction } from 'redux';

const { modalBackground, modalBox } = styles;
const {
  buttonContainer,
  button,
  textButton,
  modalTitle,
  inputContainer,
  input,
  quantityInput,
  labelInput,
  inputContainerView,
} = styles;
const { yellow, darkYellow, purple, darkPurple } = COLORS;
const { EDIT_PRODUCT, ADD_PRODUCT } = TITLE;

interface ModalComponentProps {
  title: string;
  visible: boolean;
  handleCancel: () => void;
  handleConfirm: () => void;
  nameValue: string;
  setNameValue: (name: string | object) => UnknownAction;
  storageName?: string | undefined;
}

const ModalComponent: FunctionComponent<ModalComponentProps> = ({
  title,
  visible,
  handleCancel,
  handleConfirm,
  nameValue,
  setNameValue,
  storageName,
}) => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.product);

  const handleSetNameValue = (name: string) => {
    if (title === ADD_PRODUCT || title === EDIT_PRODUCT) {
      dispatch(setNameValue({ ...product, name }));
    } else {
      dispatch(setNameValue(name));
    }
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      {/* //^------------ BLACK BACKGROUND MODAL ------------ */}
      <View style={modalBackground}>
        {/* //*------------ WHITE BACKGROUND MODAL ------------ */}
        <View style={modalBox}>
          {/* //&------------ MODAL TITLE ------------ */}
          <Text style={modalTitle}>{title}</Text>

          {/* //&------------ INPUTS ------------ */}
          <View style={{ ...inputContainerView }}>
            <View style={inputContainer}>
              <Text style={labelInput}>Nom</Text>
              <TextInput value={nameValue} style={input} onChangeText={(name) => handleSetNameValue(name)} />
            </View>

            {(title === ADD_PRODUCT || title === EDIT_PRODUCT) && (
              <>
                <View style={inputContainer}>
                  <Text style={labelInput}>Quantité</Text>
                  <TextInput
                    value={product.quantity?.toString()}
                    style={{ ...input, ...quantityInput }}
                    onChangeText={(quantity) =>
                      dispatch(setProduct({ ...product, quantity: quantity.replace(/[^0-9]/g, '') }))
                    }
                  />
                </View>
                <DatePicker />
                <Dropdown title="Choisir le rangement" storageName={storageName} />
                <Dropdown title="Choisir le sous rangement" storageName={storageName} />
              </>
            )}
          </View>

          {/* //&------------ BUTTONS CTN ------------ */}
          <View style={buttonContainer}>
            <Pressable
              style={({ pressed }) => {
                return {
                  ...{
                    backgroundColor: pressed ? darkPurple : purple,
                  },
                  ...button,
                };
              }}
              onPress={() => handleCancel()}
            >
              <Text style={textButton}>Annuler</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => {
                return {
                  ...{
                    backgroundColor: pressed ? darkYellow : yellow,
                  },
                  ...button,
                };
              }}
              onPress={() => handleConfirm()}
            >
              <Text style={textButton}>Ajouter</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
