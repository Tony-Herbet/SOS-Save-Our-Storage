import { FunctionComponent } from 'react';
import { View, FlatList, Text } from 'react-native';
import { productStyle as styles } from 'styles/screens/productsStyle';

import ScreenContainer from 'components/ScreenContainer';

const { viewContainer } = styles;

const Products: FunctionComponent = () => {
  //* TEST products data
  const ProductsData = [
    {
      name: 'yaourt',
      storage: 'Frigo',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
    },
    {
      name: 'ail',
      storage: 'placard',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
    },
    {
      name: 'Mon produit avec un nom super long pour voir ce que ça donne',
      storage: 'Mon rangement avec un nom super long pour voir ce que ça donne',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
    },
    {
      name: 'ail',
      storage: 'placard',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
    },
    {
      name: 'ail',
      storage: 'placard',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
    },
    {
      name: 'ail',
      storage: 'placard',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
    },
    {
      name: 'ail',
      storage: 'placard',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
    },
    {
      name: 'ail',
      storage: 'placard',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
    },
    {
      name: 'ail',
      storage: 'placard',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
    },
    {
      name: 'ail',
      storage: 'placard',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
    },
    {
      name: 'ail',
      storage: 'placard',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
    },
    {
      name: 'ail',
      storage: 'placard',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
    },
    {
      name: 'ail',
      storage: 'placard',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
    },
  ];

  return (
    <ScreenContainer title="Maison du Lac">
      <View style={viewContainer}>
        {/* //&--------------------------------- TABLE HEAD --------------------------------- */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 3, fontWeight: 'bold' }}>Produits</Text>
          <Text style={{ flex: 2, fontWeight: 'bold' }}>Rangement</Text>
        </View>
        {/* //&--------------------------------- TABLE BODY --------------------------------- */}
        <View style={{ height: '85%' }}>
          <FlatList
            style={{ flex: 1 }}
            data={ProductsData}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 3, paddingRight: 5 }}>
                  <Text numberOfLines={1}>{item.name}</Text>
                </View>
                <View style={{ flex: 2, paddingRight: 2 }}>
                  <Text numberOfLines={1}>{item.storage}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Products;
