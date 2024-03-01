import { FunctionComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ScreenContainer from 'components/ScreenContainer';
import { storageStyle as styles } from 'styles/screens/storageListStyle';

const { text, container } = styles;

const StorageList: FunctionComponent = () => {
  return (
    <ScreenContainer title="Maison du Lac">
      <View style={container}>
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => {}}>
          <Text style={text}>&bull; Frigo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => {}}>
          <Text style={text}>&bull; Congel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => {}}>
          <Text style={text}>&bull; Placard</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text style={text}>&bull; Armoire</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

export default StorageList;
