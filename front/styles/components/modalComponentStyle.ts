import { StyleSheet, Platform } from 'react-native';

import { FONTS } from '../../constants/Fonts';
import { SIZES } from 'constants/Sizes';
import { COLORS } from 'constants/Colors';

const { RalewayBold } = FONTS;
const { fontText, borderRadius } = SIZES;
const { white, black, darkBlueGrey } = COLORS;

export const modalComponentStyle = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalBox: {
    width: '80%',
    backgroundColor: white,
    borderRadius: 15,
    padding: 35,
    justifyContent: 'space-evenly',
  },
  modalTitle: {
    fontFamily: RalewayBold,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainerView: {
    width: '100%',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  labelInput: {
    fontFamily: RalewayBold,
    fontSize: fontText,
    marginTop: Platform.OS === 'ios' ? 7 : 3,
    marginRight: 5,
  },
  input: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: black,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 7 : 3,
    fontSize: fontText,
    backgroundColor: white,
  },
  labelDateContainer: {
    marginTop: -7,
  },
  dateInput: {
    flex: 0,
    width: '43%',
    height: 32,
  },
  actualDateText: {
    color: darkBlueGrey,
    fontSize: 12,
    marginTop: -10,
    marginBottom: 15,
    textAlign: 'center',
  },
  quantityInput: {
    flex: 0,
    width: '20%',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    borderRadius: borderRadius,
    padding: 10,
  },
  textButton: {
    color: black,
    textAlign: 'center',
    fontFamily: RalewayBold,
    fontSize: fontText,
  },
  dropdownButtonStyle: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: black,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7.5,
    backgroundColor: white,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: fontText,
    fontWeight: '500',
    color: black,
  },
  dropdownButtonArrowStyle: {
    fontSize: 15,
    fontWeight: '500',
    color: black,
  },
  dropdownMenuStyle: {
    backgroundColor: white,
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: fontText,
    lineHeight: 20,
    fontWeight: '500',
    color: black,
    textAlign: 'center',
  },
});
