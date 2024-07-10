import { FunctionComponent } from 'react';

import ScreenContainer from 'components/ScreenContainer';
import ProductsAndDatesContent from 'components/ProductsAndDatesContent';

const Products: FunctionComponent = () => {
  //* TEST products data
  const ProductsData = [
    {
      name: 'yaourt',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'ail',
      storage: 'placard',
      date: '01.03.24',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
      date: '01.03.24',
    },
    {
      name: 'Mon produit avec un nom super long pour voir ce que ça donne',
      storage: 'Mon rangement avec un nom super long pour voir ce que ça donne',
      date: '01.03.24',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'ail',
      storage: 'placard',
      date: '01.03.24',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
      date: '01.03.24',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'ail',
      storage: 'placard',
      date: '01.03.24',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
      date: '01.03.24',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'ail',
      storage: 'placard',
      date: '01.03.24',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
      date: '01.03.24',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'ail',
      storage: 'placard',
      date: '01.03.24',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
      date: '01.03.24',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'ail',
      storage: 'placard',
      date: '01.03.24',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
      date: '01.03.24',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'ail',
      storage: 'placard',
      date: '01.03.24',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
      date: '01.03.24',
    },
    {
      name: 'yaourt',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'fromage',
      storage: 'Frigo',
      date: '01.03.24',
    },
    {
      name: 'ail',
      storage: 'placard',
      date: '01.03.24',
    },
    {
      name: 'glaces',
      storage: 'congélateur',
      date: '01.03.24',
    },
  ];

  return (
    <ScreenContainer title="Maison du Lac">
      <ProductsAndDatesContent data={ProductsData} usedIn="Products" />
    </ScreenContainer>
  );
};

export default Products;
