import { FunctionComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { RouteParams } from 'navigation/types';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setUnderStorageName, setIsUnderStorageModalOpen, resetUnderStorage } from 'redux/reducers/storage';
import ScreenContainer from 'components/ScreenContainer';
import { storageStyle as styles } from 'styles/screens/storageStyle';
import { COLORS } from 'constants/Colors';
import { PATH, TITLE } from 'constants/Enums';
import TouchableDivider from 'components/TouchableDivider';
import ModalComponent from 'components/Modals/ModalComponent';
import Spacer from 'components/SVG/Spacer';
import { setProduct, setIsAddProductModalOpen, setIsEditProductModalOpen, resetProduct } from 'redux/reducers/product';

const { viewContainer, dividerTextStyle, textContainerStyle, touchableContainer } = styles;
const { STORAGE } = PATH;
const { ADD_UNDERSTORAGE, ADD_PRODUCT, EDIT_PRODUCT } = TITLE;
const { yellow } = COLORS;

interface StorageScreenProps {
  route: RouteProp<RouteParams, typeof STORAGE>;
}

const Storage: FunctionComponent<StorageScreenProps> = ({ route }) => {
  const dispatch = useAppDispatch();
  const { name: underStorageName, isUnderStorageModalOpen } = useAppSelector((state) => state.storage.underStorage);
  const { product, isAddProductModalOpen, isEditProductModalOpen } = useAppSelector((state) => state.product);
  const { storageName } = route.params;

  // TODO change type once db is done
  const handleEditProductPress = (product: any) => {
    dispatch(setProduct(product));
    dispatch(setIsEditProductModalOpen(true));
  };

  //* TEST storage data
  const StorageData = [
    {
      name: 'Produits',
      products: [
        {
          name: 'Concombre',
          quantity: 11,
          date: null,
        },
        {
          name: 'Mozza',
          quantity: 9,
          date: '24/06/23',
        },
      ],
    },
    {
      name: 'Etagère du haut',
      products: [
        {
          name: 'Jus de pommknbiovhajehbncjdhnvouzdhve',
          quantity: 1,
          date: '04/01/22',
        },
        {
          name: 'Rillettes canard halal',
          quantity: 1,
          date: '08/05/22',
        },
        {
          name: 'Jus de poire',
          quantity: 5,
          date: '09/04/22',
        },
      ],
    },
    {
      name: 'Etagère du bas',
      products: [
        {
          name: 'Lait',
          quantity: 3,
          date: '07/01/22',
        },
        {
          name: 'Tomates',
          quantity: 2,
          date: '04/11/24',
        },
      ],
    },
    {
      name: 'Etagère du milieurarar',
      products: [
        {
          name: 'Yaourts',
          quantity: 50,
          date: '31/08/23',
        },
      ],
    },
    {
      name: 'Etagère du milieurzar',
      products: [
        {
          name: 'Yaourts',
          quantity: 50,
          date: '01/12/22',
        },
      ],
    },
    {
      name: 'Etagère du milieuez',
      products: [
        {
          name: 'Yaourts',
          quantity: 50,
          date: '31/0322',
        },
      ],
    },
    {
      name: 'Etagère du milieuz',
      products: [
        {
          name: 'Yaourts',
          quantity: 50,
          date: '24/01/22',
        },
      ],
    },
    {
      name: 'Etagère du milieuzzz',
      products: [
        {
          name: 'Yaourts',
          quantity: 50,
          date: '04/11/22',
        },
      ],
    },
    {
      name: 'Etagère du milieuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      products: [
        {
          name: 'Yaourts',
          quantity: 50,
          date: '04/14/28',
        },
      ],
    },
    {
      name: 'Etagère du milieuaaa',
      products: [
        {
          name: 'Yaourts',
          quantity: 50,
          date: '04/01/27',
        },
      ],
    },
    {
      name: 'Etagère du milieuaa',
      products: [
        {
          name: 'Yaourts',
          quantity: 50,
          date: '04/01/25',
        },
      ],
    },
    {
      name: 'Etagère du milieua',
      products: [
        {
          name: 'Yaourts',
          quantity: 50,
          date: '04/01/24',
        },
      ],
    },
  ];

  return (
    <ScreenContainer title="Maison du Lac" subtitle={storageName}>
      {/* //^--------------------------------- VIEW --------------------------------- */}
      <View style={viewContainer}>
        {/* //&--------------------------------- TABLE HEAD --------------------------------- */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 4, fontWeight: 'bold' }}>Produits</Text>
          <Text style={{ flex: 1, fontWeight: 'bold' }}>Nb</Text>
          <Text style={{ flex: 2, fontWeight: 'bold' }}>Dates</Text>
        </View>
        {/* //&--------------------------------- TABLE BODY --------------------------------- */}
        <View style={{ height: '85%' }}>
          <ScrollView style={{ flex: 1 }}>
            {/* // TODO change type when the dtb is done */}
            {StorageData.map((underStorage, index) => (
              <View key={'understorage' + index}>
                <Text numberOfLines={1} style={{ flex: 1, fontWeight: 'bold' }}>
                  {underStorage.name === 'Produits' ? '' : underStorage.name + ' :'}
                </Text>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 4 }}>
                    {underStorage.products.map((product: any, index) => (
                      <Text key={'name' + index} numberOfLines={1} onPress={() => handleEditProductPress(product)}>
                        {product.name}
                      </Text>
                    ))}
                  </View>
                  <View style={{ flex: 1 }}>
                    {underStorage.products.map((product: any, index) => (
                      <Text key={'quantity' + index} numberOfLines={1} onPress={() => handleEditProductPress(product)}>
                        x{product.quantity}
                      </Text>
                    ))}
                  </View>
                  <View style={{ flex: 2 }}>
                    {underStorage.products.map((product: any, index) => (
                      <Text key={'date' + index} numberOfLines={1} onPress={() => handleEditProductPress(product)}>
                        {product.date}
                      </Text>
                    ))}
                  </View>
                </View>

                {index !== StorageData.length - 1 && <Spacer />}
              </View>
            ))}
          </ScrollView>
        </View>
        {/* //&--------------------------------- ADDING MODALS --------------------------------- */}
        <ModalComponent
          title={ADD_UNDERSTORAGE}
          visible={isUnderStorageModalOpen}
          handleCancel={() => dispatch(resetUnderStorage())}
          handleConfirm={() => dispatch(resetUnderStorage())}
          nameValue={underStorageName}
          setNameValue={(name) => dispatch(setUnderStorageName(name))}
        />

        <ModalComponent
          title={ADD_PRODUCT}
          visible={isAddProductModalOpen}
          handleCancel={() => dispatch(resetProduct())}
          handleConfirm={() => dispatch(resetProduct())}
          nameValue={product.name}
          setNameValue={(name) => dispatch(setProduct(name))}
          storageName={storageName}
        />

        {/* //&--------------------------------- EDITING MODAL --------------------------------- */}
        <ModalComponent
          title={EDIT_PRODUCT}
          visible={isEditProductModalOpen}
          handleCancel={() => dispatch(resetProduct())}
          handleConfirm={() => dispatch(resetProduct())}
          nameValue={product.name}
          setNameValue={(name) => dispatch(setProduct(name))}
          storageName={storageName}
        />
      </View>

      {/* //^--------------------------------- DIVIDERS --------------------------------- */}
      <View style={touchableContainer}>
        <TouchableDivider
          dividerColor={yellow}
          dividerText="Ajouter un sous rangement"
          dividerTextStyle={dividerTextStyle}
          handleOnPress={() => dispatch(setIsUnderStorageModalOpen(true))}
          touchableStyle={{}}
          textContainerStyle={textContainerStyle}
          dividerType="full"
        />

        <TouchableDivider
          dividerColor={yellow}
          dividerText="Ajouter un produit"
          dividerTextStyle={dividerTextStyle}
          handleOnPress={() => dispatch(setIsAddProductModalOpen(true))}
          touchableStyle={{}}
          textContainerStyle={textContainerStyle}
          dividerType="full"
        />
      </View>
    </ScreenContainer>
  );
};

export default Storage;
