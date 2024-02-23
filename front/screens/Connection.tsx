import { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { RouteParams } from '../navigation/types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import BackgroundContainer from '../components/BackgroundContainer';
import { PATH } from '../constants/Enums';
import { homeFormStyle as styles } from '../styles/screens/homeFormStyle';
import { setEmail, setPassword, setIsPasswordHidden, resetForm } from '../redux/reducers/connection';

const { CONNEXION } = PATH;
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
  forgotPasswordBtn,
  passwordView,
  eyesIconCtn,
  eyesIcon,
} = styles;

const Connexion: FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const dispatch = useAppDispatch();
  const { email, password, isPasswordHidden } = useAppSelector((state) => state.connection);

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
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          onChange={(e) => dispatch(setEmail(e.nativeEvent.text))}
        />

        <View style={passwordView}>
          <TouchableOpacity style={eyesIconCtn} onPress={() => dispatch(setIsPasswordHidden())}>
            <Image style={eyesIcon} source={require('../assets/images/eyes.png')} />
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
        <TouchableOpacity>
          <Text style={forgotPasswordBtn}>Mot de passe oublié ? &#62;&#62;</Text>
        </TouchableOpacity>
      </View>

      <View style={buttonContainer}>
        <TouchableOpacity style={button}>
          <Text style={textBtn}>Me connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={gobackButton} onPress={handleBack}>
          <Text style={textGobackBtn}>&#60;&#60; Retour</Text>
        </TouchableOpacity>
      </View>
    </BackgroundContainer>
  );
};

export default Connexion;
