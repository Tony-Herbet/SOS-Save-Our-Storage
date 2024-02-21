import { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { RouteParams } from '../navigation/types';

import BackgroundContainer from '../components/BackgroundContainer';
import { homeFormStyle as styles } from '../styles/screens/homeFormStyle';
import { PATH } from '../constants/Enums';

const { CONNEXION } = PATH;
const { title, subtitle, input, button, textBtn, textGobackBtn, bgImage, buttonContainer, form, gobackButton } = styles;

const Inscription: FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  return (
    <BackgroundContainer location={CONNEXION} imageStyles={bgImage}>
      <View>
        <Text style={title}>S.O.S.</Text>
        <Text style={subtitle}>"Save Our Storage"</Text>
      </View>

      <View style={form}>
        <TextInput style={input} placeholderTextColor={'grey'} placeholder="Prénom" />
        <TextInput style={input} placeholderTextColor={'grey'} placeholder="Nom" />
        <TextInput style={input} placeholderTextColor={'grey'} placeholder="Email" />
        <TextInput style={input} placeholderTextColor={'grey'} placeholder="Mot de passe" />
        <TextInput style={input} placeholderTextColor={'grey'} placeholder="Confirmation du mot de passe" />
      </View>

      <View style={buttonContainer}>
        <TouchableOpacity style={button}>
          <Text style={textBtn}>M'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={gobackButton} onPress={() => navigation.goBack()}>
          <Text style={textGobackBtn}>&#60;&#60; Retour</Text>
        </TouchableOpacity>
      </View>
    </BackgroundContainer>
  );
};

export default Inscription;
