import { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import BackgroundContainer from 'components/BackgroundContainer';
import { homeStyle as styles } from 'styles/screens/homeStyle';
import { PATH } from 'constants/Enums';
import { RouteParams } from 'navigation/types';

const { HOME, INSCRIPTION, CONNECTION } = PATH;
const { title, subtitle, button, textBtn, backgroundContainerImage, buttonContainer } = styles;

const Home: FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  return (
    <BackgroundContainer location={HOME} backgroundContainerImageStyles={backgroundContainerImage}>
      <View>
        <Text style={title}>S.O.S.</Text>
        <Text style={subtitle}>"Save Our Storage"</Text>
      </View>

      <View style={buttonContainer}>
        <TouchableOpacity style={button} onPress={() => navigation.navigate(INSCRIPTION)}>
          <Text style={textBtn}>M'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={button} onPress={() => navigation.navigate(CONNECTION)}>
          <Text style={textBtn}>Me connecter</Text>
        </TouchableOpacity>
      </View>
    </BackgroundContainer>
  );
};

export default Home;
