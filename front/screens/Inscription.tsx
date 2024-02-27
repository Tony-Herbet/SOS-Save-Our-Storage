import { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { RouteParams } from '../navigation/types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import Eyes from '../components/SVG/Eyes';
import BackgroundContainer from '../components/BackgroundContainer';
import { homeFormStyle as styles } from '../styles/screens/homeFormStyle';
import { PATH } from '../constants/Enums';
const { CONNEXION } = PATH;
import {
  setFirstname,
  setLastname,
  setEmail,
  setPassword,
  setConfirmPassword,
  setIsPasswordHidden,
  setIsConfirmPasswordHidden,
  resetForm,
} from '../redux/reducers/inscription';

const {
  title,
  subtitle,
  input,
  button,
  textBtn,
  textGobackBtn,
  bgImage,
  buttonContainer,
  form,
  gobackButton,
  passwordView,
  eyesIconCtn,
  eyesIcon,
} = styles;

const Inscription: FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const dispatch = useAppDispatch();
  const { firstname, lastname, email, password, confirmPassword, isConfirmPasswordHidden, isPasswordHidden } =
    useAppSelector((state) => state.inscription);

  const handleBack = () => {
    dispatch(resetForm());
    navigation.goBack();
  };

  return (
    <BackgroundContainer location={CONNEXION} imageStyles={bgImage}>
      <View>
        <Text style={title}>S.O.S.</Text>
        <Text style={subtitle}>"Save Our Storage"</Text>
      </View>

      <View style={form}>
        <TextInput
          style={input}
          placeholderTextColor={'grey'}
          placeholder="Prénom"
          value={firstname}
          autoCapitalize="none"
          onChange={(e) => dispatch(setFirstname(e.nativeEvent.text))}
        />
        <TextInput
          style={input}
          placeholderTextColor={'grey'}
          placeholder="Nom"
          value={lastname}
          autoCapitalize="none"
          onChange={(e) => dispatch(setLastname(e.nativeEvent.text))}
        />
        <TextInput
          style={input}
          placeholderTextColor={'grey'}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          autoCapitalize="none"
          onChange={(e) => dispatch(setEmail(e.nativeEvent.text))}
        />
        <View style={passwordView}>
          <TouchableOpacity style={eyesIconCtn} onPress={() => dispatch(setIsPasswordHidden())}>
            <Eyes height={eyesIcon.height} width={eyesIcon.width} />
          </TouchableOpacity>
          <TextInput
            style={input}
            placeholderTextColor={'grey'}
            placeholder="Mot de passe"
            secureTextEntry={isPasswordHidden}
            value={password}
            autoCapitalize="none"
            onChange={(e) => dispatch(setPassword(e.nativeEvent.text))}
          />
        </View>
        <View style={passwordView}>
          <TouchableOpacity style={eyesIconCtn} onPress={() => dispatch(setIsConfirmPasswordHidden())}>
            <Eyes height={eyesIcon.height} width={eyesIcon.width} />
          </TouchableOpacity>
          <TextInput
            style={input}
            placeholderTextColor={'grey'}
            placeholder="Confirmation du mot de passe"
            secureTextEntry={isConfirmPasswordHidden}
            value={confirmPassword}
            autoCapitalize="none"
            onChange={(e) => dispatch(setConfirmPassword(e.nativeEvent.text))}
          />
        </View>
      </View>

      <View style={buttonContainer}>
        <TouchableOpacity style={button}>
          <Text style={textBtn}>M'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={gobackButton} onPress={handleBack}>
          <Text style={textGobackBtn}>&#60;&#60; Retour</Text>
        </TouchableOpacity>
      </View>
    </BackgroundContainer>
  );
};

export default Inscription;
