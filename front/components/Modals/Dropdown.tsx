import { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { modalComponentStyle as styles } from 'styles/components/modalComponentStyle';
import { COLORS } from 'constants/Colors';

const {
  inputContainer,
  dropdownButtonStyle,
  dropdownButtonTxtStyle,
  dropdownButtonArrowStyle,
  dropdownMenuStyle,
  dropdownItemStyle,
  dropdownItemTxtStyle,
} = styles;

interface DropdownProps {
  title: string;
  storageName: string | undefined;
}

// TODO handle storage and understorage data
const Dropdown: FunctionComponent<DropdownProps> = ({ title, storageName }) => {
  const UnderStorage = [
    storageName,
    'Etagère du haut',
    'Etagère du milieu',
    'Etagère du bas',
    'Panier violet en bas à droite blablablablabla',
    'Tiroir du milieu',
    'Boîte rouge',
    'Panier vert',
    'Etagère 8',
    'Etagère 9',
  ];

  return (
    <View style={inputContainer}>
      <SelectDropdown
        data={UnderStorage}
        onSelect={(selectedItem, index) => {}}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={dropdownButtonStyle}>
              <Text style={dropdownButtonTxtStyle}>{(selectedItem && selectedItem) || title}</Text>
              <Text style={dropdownButtonArrowStyle}>▼</Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View style={{ ...dropdownItemStyle, ...(isSelected && { backgroundColor: COLORS.blueGrey }) }}>
              <Text style={dropdownItemTxtStyle}>{item}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={dropdownMenuStyle}
      />
    </View>
  );
};

export default Dropdown;
