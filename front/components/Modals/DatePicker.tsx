import { FunctionComponent, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setNewDate } from 'redux/reducers/product';
import MaskInput, { Masks } from 'react-native-mask-input';

import { modalComponentStyle as styles } from 'styles/components/modalComponentStyle';

const { inputContainer, labelInput, input, dateInput, labelDateContainer, actualDateText } = styles;

interface DatePickerProps {}

const DatePicker: FunctionComponent<DatePickerProps> = ({}) => {
  const dispatch = useAppDispatch();
  const { product, newDate } = useAppSelector((state) => state.product);

  useEffect(() => {
    const date = product.date ? product.date : '';
    dispatch(setNewDate(date));
  }, []);

  return (
    <>
      <View style={inputContainer}>
        <View style={labelDateContainer}>
          <Text style={labelInput}>Date de péremption</Text>
          <Text>(optionnel)</Text>
        </View>
        <MaskInput
          value={newDate}
          onChangeText={(date) => dispatch(setNewDate(date))}
          mask={Masks.DATE_DDMMYYYY}
          style={{ ...input, ...dateInput }}
        />
      </View>
      <Text style={actualDateText}>Date actuelle: {product.date}</Text>
    </>
  );
};

export default DatePicker;
