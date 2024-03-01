import { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import BackgroundContainer from 'components/BackgroundContainer';
import { PATH } from 'constants/Enums';
import { storageStyle as styles } from 'styles/screens/storageStyle';

const { STORAGE } = PATH;
const { bgImage, storageContainer, storageTitle } = styles;

const Storage: FunctionComponent = () => {
  return (
    <BackgroundContainer location={STORAGE} imageStyles={bgImage}>
      <View style={storageContainer}>
        <Text style={storageTitle}>Maison du lac</Text>
        <Text style={storageTitle}>blabla</Text>
      </View>
    </BackgroundContainer>
  );
};
