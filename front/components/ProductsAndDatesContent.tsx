import { FunctionComponent } from 'react';
import { View, FlatList, Text, ViewStyle } from 'react-native';
import { productsAndDatesContentStyle as styles } from 'styles/components/ProductsAndDatesContentStyle';

const { viewContainer } = styles;

interface ProductType {
  name: string;
  storage: string;
  date: string;
}

interface ProductsAndDatesContentProps {
  data: ProductType[];
  usedIn: 'Products' | 'Dates';
  productsColumnFlex?: ViewStyle;
}

const ProductsAndDatesContent: FunctionComponent<ProductsAndDatesContentProps> = ({
  data,
  usedIn,
  productsColumnFlex,
}) => {
  return (
    <View style={viewContainer}>
      {/* //&--------------------------------- TABLE HEAD --------------------------------- */}
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ flex: 3, fontWeight: 'bold', ...productsColumnFlex, marginBottom: 8 }}>Produits</Text>
        <Text style={{ flex: 2, fontWeight: 'bold', marginBottom: 8 }}>
          {usedIn === 'Products' ? 'Rangements' : usedIn === 'Dates' ? 'Dates' : 'Erreur'}
        </Text>
      </View>
      {/* //&--------------------------------- TABLE BODY --------------------------------- */}
      <View style={{ height: '80%' }}>
        <FlatList
          style={{ flex: 1 }}
          data={data}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flex: 3, paddingRight: 5, ...productsColumnFlex }}>
                <Text numberOfLines={1} style={{ lineHeight: 28 }}>
                  {item.name}
                </Text>
              </View>
              <View style={{ flex: 2, paddingRight: 2 }}>
                <Text numberOfLines={1} style={{ lineHeight: 28 }}>
                  {usedIn === 'Products' ? item.storage : usedIn === 'Dates' ? item.date : 'Erreur'}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ProductsAndDatesContent;
